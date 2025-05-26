// pages/index.js
import Head from 'next/head'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
    <>
      <Head>
        <title>VIXAI – Automação Inteligente e IA Sob Medida</title>
        <meta
          name="description"
          content="Transforme sua empresa com automação inteligente e IA: economize até 30% do seu tempo e reduza custos em até 20%. Orçamento grátis e demonstração disponível."
        />
        <meta property="og:title" content="VIXAI - Automação Inteligente e IA Sob Medida" />
        <meta
          property="og:description"
          content="Aumente a produtividade e reduza custos com soluções personalizadas de automação e IA."
        />
        <meta property="og:image" content="https://portifolio-vixai.vercel.app/og-image.png" />
        <meta property="og:url" content="https://portifolio-vixai.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        function toggleLanguage() {
          document.querySelectorAll('.lang-pt').forEach(el => el.classList.toggle('hidden'));
          document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('hidden'));
        }
      `,
          }}
        />
      </Head>

      {/* HEADER */}
      <header className="bg-white shadow p-10 relative">
        <div className="absolute top-6 right-6">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') toggleLanguage();
            }}
            className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          >
            PT / EN
          </button>
        </div>
        <img src="/logovixai.png" alt="Logo VIXAI" className="mx-auto mb-4 w-24" />

        {/* Títulos */}
        <h1 className="text-4xl font-bold lang-pt">VIXAI - Automação Inteligente</h1>
        <h1 className="text-4xl font-bold lang-en hidden">VIXAI - Intelligent Automation</h1>

        {/* USP */}
        <p className="text-gray-600 text-lg mt-2 lang-pt">
          Economize até 30% do seu tempo e reduza custos em até 20% com soluções de IA personalizadas.
        </p>
        <p className="text-gray-600 text-lg mt-2 lang-en hidden">
          Save up to 30% time and reduce costs by 20% with tailored AI-powered solutions.
        </p>

        {/* CTAs */}
        <div className="mt-4 space-x-4">
          <a
            href="#contato"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 lang-pt"
          >
            Peça um Orçamento Grátis
          </a>
          <a
            href="#contato"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 lang-en hidden"
          >
            Request a Free Quote
          </a>
          <a
            href="#contato"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 lang-pt"
          >
            Agende uma Demonstração
          </a>
          <a
            href="#contato"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 lang-en hidden"
          >
            Schedule a Demo
          </a>
        </div>
      </header>

      {/* PROJETOS */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 lang-pt">Projetos em Destaque</h2>
        <h2 className="text-3xl font-bold text-center mb-10 lang-en hidden">Featured Projects</h2>

        {/* Projeto 1 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold lang-pt">1. Gerador de Códigos de Barras</h3>
          <h3 className="text-2xl font-semibold lang-en hidden">1. Online Barcode Generator</h3>
          <p className="mt-2 lang-pt">
            Ferramenta web para geração de códigos de barras com impressão direta.
          </p>
          <p className="mt-2 lang-en hidden">Web tool for generating barcodes with direct printing.</p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>HTML, JavaScript, JsBarcode</li>
            <li className="lang-pt">Geração instantânea de barcode (CODE128)</li>
            <li className="lang-en hidden">Instant barcode generation (CODE128)</li>
            <li className="lang-pt">Interface leve, com impressão integrada</li>
            <li className="lang-en hidden">Lightweight interface with integrated printing</li>
          </ul>
          <a
            href="projetos/barcode-generator.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt"
          >
            Ver detalhes
          </a>
          <a
            href="projetos/barcode-generator.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en hidden"
          >
            View details
          </a>
        </div>

        {/* ... demais projetos (2 a 6) mantidos como antes ... */}
      </main>

      {/* SOBRE */}
      <section className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-4 lang-pt">Sobre Mim & VIXAI</h2>
        <h2 className="text-3xl font-bold mb-4 lang-en hidden">About Me & VIXAI</h2>
        <div className="md:flex items-start gap-8">
          <img
            src="/profile.jpg"
            alt="Almeida Photo"
            className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0"
          />
          <div>
            <p className="mb-4 lang-pt">
              Me chamo Almeida, engenheiro de sistemas e fundador da VIXAI — uma consultoria unipessoal
              com foco em soluções de automação e IA.
            </p>
            <p className="mb-4 lang-en hidden">I’m Almeida, a systems engineer and founder of VIXAI …</p>
            <p className="mb-4 lang-pt">
              Na VIXAI, ofereço:
              <ul className="list-disc list-inside ml-4">
                <li>Automação de relatórios e dashboards</li>
                <li>Integração de APIs e sistemas legados</li>
                <li>Desenvolvimento de chatbots e assistentes inteligentes</li>
              </ul>
            </p>
            <p className="mb-4 lang-en hidden">
              At VIXAI, I provide:
              <ul className="list-disc list-inside ml-4">
                <li>Report automation and dashboards</li>
                <li>API and legacy system integrations</li>
                <li>Chatbots and intelligent assistant development</li>
              </ul>
            </p>
            <p className="lang-pt">
              Meu diferencial: entrego protótipos funcionais em até 2 semanas e ofereço suporte contínuo
              pós-implantação.
            </p>
            <p className="lang-en hidden">
              My edge: delivering working prototypes in under 2 weeks and offering ongoing
              post-launch support.
            </p>
          </div>
        </div>
      </section>

      {/* ... depoimentos, contato e footer como antes ... */}

      {/* CHAT WIDGET */}
      <ChatWidget />
    </>
  )
}
