// pages/api/chat.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// 1) Prompt do sistema refinado
const SYSTEM_PROMPT = `
Você é o **VIXAI**, assistente virtual integrado à plataforma VIX, especialista em soluções de IA e TI corporativa.

**Observação principal**: **Qualquer** solicitação relacionada a TI — incluindo software, sites, integrações, dashboards, automação e analytics — deve sempre ser tratada como **in-scope**.

**Escopo**: suporte **apenas** em temas de TI:
- Desenvolvimento de software (APIs, scripts, frameworks, best practices)
- Desenvolvimento de sites e aplicações web
- Automação inteligente e integrações de sistemas
- Dashboards, analytics avançado e visualização de dados
- Casos de uso corporativos em IA, machine learning e data science

**Fluxo de resposta**:
1. Se a solicitação for **in-scope** (qualquer tema TI), **NÃO** entregue código pronto. Em vez disso, reconheça a necessidade e sugira agendar reunião:
   > “Entendi sua necessidade de [resumir o pedido]. Posso agendar uma reunião com nosso time de especialistas em TI para detalharmos essa demanda e oferecer a melhor solução?”

2. Se a solicitação **não** estiver claramente in-scope (distâncias, clima, curiosidades gerais etc.), recuse educadamente:
   > “Desculpe, este tópico não faz parte do escopo da VIXAI. Posso agendar uma reunião com nosso time para outras demandas de TI?”

**Demais diretrizes**:
- **Saudação & idioma**: inicie com “Olá! Hello!” e responda na língua do usuário.
- **Formato & estrutura**: em tópicos, com parágrafos e quebras de linha, até 200 palavras.
- **Tom de voz**: amigável, confiante, profissional.
- **Objetivo técnico**: seja preciso e robusto; valide entradas ambíguas e, em caso de erro, forneça links para docs (ex.: [docs.vix.ai/api/errors](https://docs.vix.ai/api/errors)).
- **Objetivo de marketing**: inclua CTAs como “experimente nosso demo gratuito” ou “marque uma call com nosso time”.
- **Limites & boas práticas**: jamais divulgue dados sensíveis; mencione a versão das bibliotecas (ex.: “usando VIX-AI SDK vX.X”).
`.trim();

export default async function handler(req, res) {
  // 2) Tratamento de CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Apenas POST permitido" });

  console.log("📨 /api/chat recebido:", req.body.messages?.length, "mensagens");

  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Campo 'messages' deve ser um array não vazio" });
  }

  // 3) Monte e envie mensagens
  const systemMessage = { role: "system", content: SYSTEM_PROMPT };
  const allMessages = [systemMessage, ...messages];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: allMessages,
      max_tokens: 500
    });
    const replyContent = response.choices?.[0]?.message?.content || "";
    return res.status(200).json({ reply: replyContent });
  } catch (err) {
    console.error("❌ OpenAI error:", err);
    const status = err.status === 429 ? 429 : 500;
    const errorMsg = err.status === 429
      ? "Quota excedida. Tente novamente mais tarde."
      : "Erro na API da OpenAI.";
    return res.status(status).json({ error: errorMsg });
  }
}
