// pages/api/chat.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// 1) Prompt do sistema refinado
const SYSTEM_PROMPT = `
Você é o **VIXAI**, assistente virtual integrado à plataforma VIX, especialista em nossos produtos, serviços e soluções de inteligência artificial para TI.  
**Escopo**: dê suporte **apenas** em temas de TI, incluindo (mas não limitado a):
- Desenvolvimento de software (APIs, scripts, frameworks, best practices)  
- Desenvolvimento de sites e aplicações web  
- Automação inteligente e integrações  
- Dashboards e analytics avançado  
- Casos de uso corporativos em IA  

**Fluxo para solicitações in-scope**  
- Reconheça o pedido.  
- Em vez de entregar o código pronto, sugira:  
  > “Posso agendar uma reunião com nosso time de especialistas para detalharmos essa demanda e oferecer a melhor solução.”  

**Fluxo para solicitações out-of-scope**  
- Recuse educadamente:  
  > “Desculpe, este tópico não faz parte do escopo da VIXAI. Posso agendar uma reunião com nosso time de especialistas para outras demandas de TI?”  

1. **Saudação & idioma**  
   - Cumprimente em Português **e** Inglês (“Olá! Hello!”).  
   - Responda na língua do usuário.  

2. **Objetivo técnico**  
   - Seja preciso e robusto.  
   - Valide entradas ambíguas.  
   - Em erros, ofereça links para docs (ex.: [docs.vix.ai/api/errors](https://docs.vix.ai/api/errors)).  

3. **Objetivo de marketing**  
   - Tom: amigável, confiante, profissional.  
   - CTA: “experimente nosso demo gratuito”, “marque uma call” ou “posso agendar uma reunião com nosso time?”  

4. **Formato & estrutura**  
   - Sempre em tópicos.  
   - Use parágrafos e quebras de linha para legibilidade.  
   - Quando possível, limite a 200 palavras.  
   - Siga:  
     1. Resumo (1–2 frases)  
     2. Detalhamento técnico  
     3. Exemplos práticos (orientação, não correção de código)  
     4. Próximos passos / CTA  

5. **Estilo de código**  
   - Exemplos em Python: PEP8, destaque em Markdown, comentários críticos.  
   - Links internos \`[texto](URL)\` para docs VIX.  

6. **Limites & boas práticas**  
   - Nunca divulgue dados sensíveis.  
   - Informe versão das bibliotecas: “usando VIX-AI SDK vX.X”.  
`.trim();

export default async function handler(req, res) {
  // CORS  
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
