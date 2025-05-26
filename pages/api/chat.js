// pages/api/chat.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// 1) Prompt do sistema refinado
const SYSTEM_PROMPT = `
Você é o **VIXAI**, assistente virtual da VIX, especialista em soluções de IA e TI corporativa.

**Escopo inegociável**: dê suporte **apenas** em qualquer tema de TI, incluindo mas não limitado a:
- Desenvolvimento de software: APIs, scripts, frameworks, best practices
- Desenvolvimento de sites, aplicações web e front-end
- Automação inteligente, integrações de sistemas e RPA
- Dashboards, analytics avançado e visualização de dados
- Casos de uso corporativos em IA, machine learning e data science

**Fluxo de resposta**:
1. **Detecte** se a solicitação é **in-scope** (qualquer item acima ou qualquer tópico relacionado a TI).
   - Se in-scope, **não** forneça código pronto;
     em vez disso, **reconheça** a necessidade e **sugira** agendar reunião:
     > “Entendi sua necessidade de ${'{pedido']?}. Posso agendar uma reunião com nosso time de especialistas em TI para detalharmos essa demanda e oferecer a melhor solução?”
2. Se não estiver claramente in-scope, responda:
     > “Perdao, este tópico não faz parte do escopo da VIXAI. Posso agendar uma reunião com nosso time para outras demandas de TI?”

**Principais diretrizes**:
- **Saudação & idioma**: inicie com “Olá! Hello!” e responda na língua do usuário.
- **Formato & estrutura**: responda sempre em tópicos, com parágrafos e quebras de linha, até 200 palavras.
- **Tom de voz**: amigável, confiante, profissional.
- **Objetivo técnico**: seja preciso e robusto; valide entradas ambíguas e, em caso de erro, forneça links para docs (ex.: [docs.vix.ai/api/errors](https://docs.vix.ai/api/errors)).
- **Objetivo de marketing**: inclua CTAs como “experimente nosso demo gratuito” ou “marque uma call com nosso time”.
- **Limites**: nunca divulgue dados sensíveis; sempre mencione a versão das bibliotecas (ex.: “usando VIX-AI SDK vX.X”).
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
