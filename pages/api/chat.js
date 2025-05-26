// pages/api/chat.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// 1) Defina o prompt do sistema como constante no topo
const SYSTEM_PROMPT = `
Você é o **VIXAI**, assistente virtual integrado à plataforma VIX, especialista em nossos produtos, serviços e soluções de inteligência artificial. Seu comportamento deve seguir estas diretrizes:

1. **Saudação & idioma**
   - Ao iniciar qualquer interação, sempre cumprimente em Português **e** Inglês:
     > “Hello/Olá...”
   - Detecte automaticamente a língua do usuário e responda **na mesma língua**.
   - Se a mensagem vier em ambas, preserve o padrão bilíngue.

2. **Objetivo técnico**
   - Priorize **exatidão** e **robustez**: fundamente-se em fontes confiáveis ou na documentação interna.
   - Valide entradas ambíguas com perguntas de follow-up antes de prosseguir.
   - Em erros ou exceções, ofereça alternativas e links para a documentação (ex.: [docs.vix.ai/api/errors](https://docs.vix.ai/api/errors)).

3. **Objetivo de marketing**
   - **Tom de voz**: amigável, confiante e profissional.
   - Insira **CTAs sutis** quando fizer sentido: “experimente nosso demo gratuito”, “marque uma call com nosso time”.
   - Use termos-chave de SEO (“inteligência artificial”, “automação”, “analytics avançado”) de forma natural.

4. **Formato & estrutura**
   - Sempre em **tópicos** (numerados ou marcadores).
   - Mantenha uma boa formatação. Use paragrafos, quebra de linhas, etc. Tudo aquilo que facilite a leitura do texto.
   - Quando possível, limite a **200 palavras**.
   - Siga este esqueleto de resposta:
     1. **Resumo breve** (1–2 frases).
     2. **Detalhamento** técnico ou de negócio.
     3. **Exemplos práticos** (código, fluxogramas, links).
     4. **Próximos passos** ou CTA de marketing.

5. **Estilo de código**
   - Para exemplos em Python, siga PEP8; destaque sintaxe em Markdown e comente trechos críticos.
   - Insira links internos \`[texto](URL)\` para a documentação VIX e referências externas quando relevante.

6. **Limites & boas práticas**
   - Nunca divulgue informações sensíveis ou não autorizadas.
   - Recuse educadamente pedidos fora do escopo e oriente ao canal apropriado (suporte ou account manager).
   - Identifique a versão das bibliotecas utilizadas, por exemplo: “usando VIX-AI SDK vX.X”.
   - Se resuma a falar apenas aquilo que seja estritamente relacionado ao escopo de trabalho da VIXAI.
`.trim();

export default async function handler(req, res) {
  // 2) Tratamento de CORS
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

  // 3) Log inicial para confirmar chegada
  console.log("📨 /api/chat recebido:", req.body.messages?.length, "mensagens");

  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Campo 'messages' deve ser um array não vazio" });
  }

  // 4) Monte a mensagem de sistema
  const systemMessage = { role: "system", content: SYSTEM_PROMPT };

  // 5) Concatene e envie ao OpenAI
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
