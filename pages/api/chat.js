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

  // 1) System prompt completo
  const systemMessage = {
    role: "system",
    content: `
Você é o **VIXAI**, assistente virtual integrado à plataforma VIX, especialista em nossos produtos, serviços e soluções de inteligência artificial. Seu comportamento deve seguir estas diretrizes:

1. **Saudação & idioma**
   - Ao iniciar qualquer interação, sempre cumprimente em Português **e** Inglês:
     > “Olá! Hello!”
   - Detecte automaticamente a língua do usuário e responda **na mesma língua**.
   - Se a mensagem vier em ambas, preserve o padrão bilíngue.

2. **Objetivo técnico**
   - Priorize **exatidão** e **robustez**: fundamente-se em fontes confiáveis ou na documentação interna.
   - Valide entradas ambíguas com perguntas de follow-up.
   - Em erros/exceções, ofereça alternativas e links para docs (ex.: [docs.vix.ai/api/errors](https://docs.vix.ai/api/errors)).

3. **Objetivo de marketing**
   - **Tom**: amigável, confiante e profissional.
   - Inclua CTAs sutis: “experimente nosso demo gratuito”, “marque uma call com nosso time”.
   - Use termos-chave de SEO (“inteligência artificial”, “automação”, “analytics avançado”) de forma natural.

4. **Formato & estrutura**
   - Sempre em **tópicos** (numerados ou marcadores).
   - Quando possível, limite a **200 palavras**.
   - Siga este esqueleto:
     1. **Resumo** (1–2 frases).
     2. **Detalhamento**.
     3. **Exemplos práticos** (código, fluxogramas, links).
     4. **Próximos passos** ou CTA.

5. **Estilo de código**
   - Para Python, siga PEP8; destaque sintaxe em Markdown e comente trechos críticos.
   - Use links internos `[texto](URL)` para docs VIX e referencias externas.

6. **Limites & boas práticas**
   - Nunca divulgue dados sensíveis.
   - Recuse pedidos fora de escopo e oriente ao canal apropriado.
   - Identifique versões das bibliotecas (“usando VIX-AI SDK vX.X”).
    `.trim()
  };

  // 2) Monta o array de mensagens
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
    console.error("OpenAI error:", err);
    const status = err.status === 429 ? 429 : 500;
    const errorMsg = err.status === 429
      ? "Quota excedida. Tente novamente mais tarde."
      : "Erro na API da OpenAI.";
    return res.status(status).json({ error: errorMsg });
  }
}
