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
              typeof window !== 'undefined' && window.toggleLanguage();
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

        {/* Projeto 2 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold lang-pt">
            2. Monitor de Produtividade em Tempo Real
          </h3>
          <h3 className="text-2xl font-semibold lang-en hidden">
            2. Real-Time Productivity Monitor
          </h3>
          <p className="mt-2 lang-pt">
            Ferramenta desktop em Python para monitorar e otimizar produtividade na leitura de códigos
            de barras.
          </p>
          <p className="mt-2 lang-en hidden">
            A Python-powered desktop tool to monitor and optimize barcode reading productivity.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>Python, Pandas, Keyboard</li>
            <li className="lang-pt">Armazenamento automático com timestamp</li>
            <li className="lang-en hidden">Automated logging with timestamp</li>
            <li className="lang-pt">Execução via terminal</li>
            <li className="lang-en hidden">Run directly from terminal</li>
          </ul>
          <a
            href="projetos/barcode-capturer.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt"
          >
            Ver detalhes
          </a>
          <a
            href="projetos/barcode-capturer.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en hidden"
          >
            View details
          </a>
        </div>

        {/* Projeto 3 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold lang-pt">3. Indexador de Rotas a partir de PDF</h3>
          <h3 className="text-2xl font-semibold lang-en hidden">3. Route Indexer from PDF</h3>
          <p className="mt-2 lang-pt">
            Aplicativo que extrai rotas logísticas de manifestos PDF e gera relatório formatado.
          </p>
          <p className="mt-2 lang-en hidden">
            Application that extracts logistics routes from PDF manifests and generates a formatted
            report.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>Python, PyMuPDF, FPDF, Tkinter</li>
            <li className="lang-pt">Seleção de arquivo via GUI</li>
            <li className="lang-en hidden">GUI-based file selection</li>
            <li className="lang-pt">PDF com índices personalizados</li>
            <li className="lang-en hidden">PDF with customized index</li>
          </ul>
          <a
            href="projetos/pdf-indexer.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt"
          >
            Ver detalhes
          </a>
          <a
            href="projetos/pdf-indexer.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en hidden"
          >
            View details
          </a>
        </div>

        {/* Projeto 4 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold lang-pt">
            4. Automação de Mensagens com IA no WhatsApp
          </h3>
          <h3 className="text-2xl font-semibold lang-en hidden">
            4. WhatsApp Message Automation with AI
          </h3>
          <p className="mt-2 lang-pt">
            Sistema que envia mensagens personalizadas via WhatsApp com base em IA.
          </p>
          <p className="mt-2 lang-en hidden">
            System for sending personalized WhatsApp messages using AI.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>FastAPI, Zapier/Make, OpenAI API</li>
            <li className="lang-pt">Geração de texto automático</li>
            <li className="lang-en hidden">AI-powered text generation</li>
            <li className="lang-pt">Logs de envio e painel de leads</li>
            <li className="lang-en hidden">Lead dashboard and logs</li>
          </ul>
          <a
            href="projetos/whatsapp-automation.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt"
          >
            Ver detalhes
          </a>
          <a
            href="projetos/whatsapp-automation.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en hidden"
          >
            View details
          </a>
        </div>

        {/* Projeto 5 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold lang-pt">
            5. Sistema de Gestão de Tarefas (Web App)
          </h3>
          <h3 className="text-2xl font-semibold lang-en hidden">
            5. Task Management System (Web App)
          </h3>
          <p className="mt-2 lang-pt">
            Aplicativo fullstack para gerenciamento de tarefas com prazos, status e comentários.
          </p>
          <p className="mt-2 lang-en hidden">
            Fullstack app for managing tasks with deadlines, status, and comments.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>FastAPI, PostgreSQL, React/Tailwind</li>
            <li className="lang-pt">CRUD completo com autenticação</li>
            <li className="lang-en hidden">Full CRUD with authentication</li>
            <li className="lang-pt">Dashboard com filtros e atualizações em tempo real</li>
            <li className="lang-en hidden">Dashboard with filters and real-time updates</li>
          </ul>
          <a
            href="projetos/task-manager.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt"
          >
            Ver detalhes
          </a>
          <a
            href="projetos/task-manager.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en hidden"
          >
            View details
          </a>
        </div>

        {/* Projeto 6 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold lang-pt">
            6. Bot de Extração de Dados com Dashboard
          </h3>
          <h3 className="text-2xl font-semibold lang-en hidden">
            6. Data Extraction Bot with Dashboard
          </h3>
          <p className="mt-2 lang-pt">
            Sistema que extrai dados públicos de sites e apresenta análises em dashboard interativo.
          </p>
          <p className="mt-2 lang-en hidden">
            System that scrapes public data from websites and presents it in an interactive dashboard.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>Python, BeautifulSoup/Selenium, Streamlit</li>
            <li className="lang-pt">Scraping e análise em tempo real</li>
            <li className="lang-en hidden">Real-time web scraping and analysis</li>
            <li className="lang-pt">Interface amigável para não-técnicos</li>
            <li className="lang-en hidden">User-friendly interface for non-technical users</li>
          </ul>
          <a
            href="projetos/scraping-dashboard.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt"
          >
            Ver detalhes
          </a>
          <a
            href="projetos/scraping-dashboard.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en hidden"
          >
            View details
          </a>
        </div>
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
            <p className="mb-4 lang-en hidden">I’m Almeida, a systems engineer and founder of VIXAI …
            </p>
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

      {/* DEPOIMENTOS */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-center lang-pt">O que dizem os clientes</h2>
        <h2 className="text-3xl font-bold mb-6 text-center lang-en hidden">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <blockquote className="bg-white shadow rounded p-6">
            <p className="italic lang-pt">
              “Almeida entendeu nosso problema e economizou 20+ horas por semana.”
            </p>
            <p className="italic lang-en hidden">
              “Almeida understood our challenge and saved us 20+ hours per week.”
            </p>
            <footer className="mt-4 text-sm text-gray-600">
              <span className="lang-pt">— Cliente da indústria logística, Holanda</span>
              <span className="lang-en hidden">— Logistics industry client, Netherlands</span>
            </footer>
          </blockquote>
          <blockquote className="bg-white shadow rounded p-6">
            <p className="italic lang-pt">
              “Resultados impressionantes na automação do nosso fluxo de relatórios.”
            </p>
            <p className="italic lang-en hidden">
              “Impressive results automating our reporting workflow.”
            </p>
            <footer className="mt-4 text-sm text-gray-600">
              <span className="lang-pt">— Pequeno empresário, Bélgica</span>
              <span className="lang-en hidden">— Small business owner, Belgium</span>
            </footer>
          </blockquote>
          <blockquote className="bg-white shadow rounded p-6">
            <p className="italic lang-pt">
              “Almeida entregou um sistema de controle de estoque que reduziu nossos erros em 95%.”
            </p>
            <p className="italic lang-en hidden">
              “Almeida delivered an inventory control system that reduced our errors by 95%.”
            </p>
            <footer className="mt-4 text-sm text-gray-600">
              <span className="lang-pt">— Gerente de operações, Utrecht</span>
              <span className="lang-en hidden">— Operations manager, Utrecht</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-blue-50 py-12">
        <div className="container mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4 lang-pt">Entre em contato</h2>
          <h2 className="text-2xl font-bold mb-4 lang-en hidden">Get in Touch</h2>
          <p className="mb-6 lang-pt">
            Quer transformar sua operação com automação inteligente? Fale conosco.
          </p>
          <p className="mb-6 lang-en hidden">
            Want to transform your operation with smart automation? Contact us.
          </p>
          <form
            action="mailto:vixainlbr@gmail.com"
            method="post"
            enctype="text/plain"
            className="bg-white p-6 rounded-lg shadow mb-6"
          >
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 lang-pt" htmlFor="nome">
                Nome
              </label>
              <label className="block mb-1 text-gray-700 lang-en hidden" htmlFor="nome">
                Name
              </label>
              <input
                type="text"
                id="nome"
                name="Nome"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 lang-pt" htmlFor="email">
                Email
              </label>
              <label className="block mb-1 text-gray-700 lang-en hidden" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 lang-pt" htmlFor="mensagem">
                Projeto
              </label>
              <label className="block mb-1 text-gray-700 lang-en hidden" htmlFor="mensagem">
                Project
              </label>
              <textarea
                id="mensagem"
                name="Mensagem"
                rows="4"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 lang-pt"
            >
              Enviar Mensagem
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 lang-en hidden"
            >
              Send Message
            </button>
          </form>
          <a
            href="https://wa.me/+31616286396"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 lang-pt"
          >
            WhatsApp
          </a>
          <a
            href="https://wa.me/+31616286396"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 lang-en hidden"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-500 text-sm">
        &copy; 2025 VIXAI. Todos os direitos reservados.
      </footer>

      {/* CHAT WIDGET */}
      <ChatWidget />
    </>
  )
}
