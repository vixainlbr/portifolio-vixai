import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Apenas POST permitido" });
  }

  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Campo 'messages' deve ser um array não vazio" });
  }

  // 1) System prompt que define o tom e contexto
  const systemMessage = {
    role: "system",
    content: Você é o assistente virtual da VIXAI, consultoria unipessoal de automação inteligente e IA. 
Sua missão é ajudar pequenas e médias empresas a economizar até 30% do tempo e reduzir custos em até 20% por meio de soluções sob medida (relatórios, sistemas em python, sistemas web, integrações, chatbots e dashboards). 
Responda sempre de forma profissional, clara e centrada nos benefícios da VIXAI. Tenha sempre uma pegada voltada ao marketing, mas também sempre foque no lado tecnico.
  };

  // 2) Concatena o systemMessage + histórico do usuário
  const allMessages = [systemMessage, ...messages];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: allMessages,
      max_tokens: 200
    });

    const replyContent = response.choices?.[0]?.message?.content || "";
    return res.status(200).json({ reply: replyContent });

  } catch (err) {
    console.error("OpenAI error:", err.message);
    if (err.status === 429) {
      return res.status(429).json({ error: "Quota excedida. Tente novamente mais tarde." });
    }
    return res.status(500).json({ error: "Erro na API da OpenAI" });
  }
}


