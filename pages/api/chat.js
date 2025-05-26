// pages/api/chat.js  (ou app/api/chat/route.js, adaptando exports se for App Router)
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  // 1) Tratamento de CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Pré-voo CORS
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Apenas POST permitido" });
  }

  // 2) Log inicial para ver se chegou ao handler
  console.log("📨 /api/chat recebido:", req.body.messages?.length, "mensagens");

  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Campo 'messages' deve ser um array não vazio" });
  }

  const systemMessage = {
    role: "system",
    content: `
Você é o **VIXAI**, assistente virtual integrado à plataforma VIX...
(seu prompt completo aqui)
    `.trim()
  };

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
