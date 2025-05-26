import Head from 'next/head'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
    <>
      <Head>
        <title>VIXAI – Automação Inteligente</title>
        <meta name="description" content="Transforme sua empresa com automação inteligente e IA: economize até 30% do seu tempo e reduza custos em até 20%." />
      </Head>

      {/* Conteúdo principal do portfólio */}
      <main className="container mx-auto px-4 py-12">
        {/* Exemplo de header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">VIXAI – Automação Inteligente</h1>
          <p className="mt-4 text-lg text-gray-600">
            Soluções de IA e automação para otimizar processos e reduzir custos.
          </p>
        </header>

        {/* Seções de projetos, sobre, depoimentos, contato etc */}
        {/* ... */}

      </main>

      {/* Chatbot Widget */}
      <ChatWidget />
    </>
  )
}
