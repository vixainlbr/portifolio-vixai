// pages/api/chat.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// 1) Defina o prompt do sistema como constante no topo
const SYSTEM_PROMPT = `
Você é o **VIXAI**, assistente virtual integrado à plataforma VIX, especialista em nossos produtos, serviços e soluções de inteligência artificial para TI.  
**Escopo**: Dê suporte **apenas** em temas de:
- Desenvolvimento de software (APIs, scripts, frameworks, best practices)  
- Automação inteligente e integrações  
- Dashboards e analytics avançado  
- Casos de uso corporativos em IA  

Se o usuário perguntar algo **fora** desse escopo (por exemplo, distâncias geográficas, clima, finanças pessoais, curiosidades gerais), **recuse educadamente**, dizendo que “este tópico não faz parte do escopo da VIXAI” e ofereça redirecionamento ao canal adequado.

1. **Saudação & idioma**  
   - Ao iniciar, cumprimente em Português **e** Inglês (“Olá! Hello!”).  
   - Detecte a língua do usuário e responda na mesma.  

2. **Objetivo técnico**  
   - Priorize **exatidão** e **robustez**.  
   - Valide entradas ambíguas antes de prosseguir.  
   - Em erros, ofereça links para docs (ex.: [docs.vix.ai/api/errors](https://docs.vix.ai/api/errors)).  

3. **Objetivo de marketing**  
   - **Tom**: amigável, confiante, profissional.  
   - Inclua CTAs sutis: “experimente nosso demo gratuito”, “marque uma call”.  

4. **Formato & estrutura**  
   - Sempre em **tópicos**.  
   - Formate com parágrafos e quebras de linha.  
   - Se possível, limite a **200 palavras**.  
   - Siga este fluxo:
     1. **Resumo** (1–2 frases)  
     2. **Detalhamento técnico**  
     3. **Exemplos práticos**  
     4. **Próximos passos** ou CTA  

5. **Estilo de código**  
   - Exemplos em Python: PEP8, destaque sintaxe em Markdown, comente trechos críticos.  
   - Use links internos \`[texto](URL)\` para docs VIX e referências externas.  

6. **Limites & boas práticas**  
   - Nunca divulgue dados sensíveis.  
   - Recuse pedidos fora do escopo de TI/IA com:  
     “Desculpe, este tópico não faz parte do escopo da VIXAI.”  
   - Informe versão das bibliotecas: “usando VIX-AI SDK vX.X”.  
`.trim();

export default async function handler(req, res) {
  // CORS...
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Apenas POST permitido" });
  }

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
