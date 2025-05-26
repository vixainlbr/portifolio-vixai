// pages/index.js
import Head from 'next/head'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
    <>
      <Head>
        <title>VIXAI – Intelligent Automation & Custom AI Solutions</title>
        <meta
          name="description"
          content="Transform your business with AI-powered automation: save up to 30% time and cut costs by 20%. Free quotes & demos available."
        />
        <meta property="og:title" content="VIXAI – Intelligent Automation & Custom AI Solutions" />
        <meta
          property="og:description"
          content="Boost productivity and reduce costs with tailored automation and AI solutions."
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

        {/* Titles */}
        <h1 className="text-4xl font-bold lang-en">VIXAI – Intelligent Automation</h1>
        <h1 className="text-4xl font-bold lang-pt hidden">VIXAI – Automação Inteligente</h1>

        {/* USP */}
        <p className="text-gray-600 text-lg mt-2 lang-en">
          Save up to 30% of your time and reduce costs by 20% with custom AI solutions.
        </p>
        <p className="text-gray-600 text-lg mt-2 lang-pt hidden">
          Economize até 30% do seu tempo e reduza custos em até 20% com soluções de IA personalizadas.
        </p>

        {/* CTAs */}
        <div className="mt-4 space-x-4">
          <a
            href="#contato"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 lang-en"
          >
            Request a Free Quote
          </a>
          <a
            href="#contato"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 lang-pt hidden"
          >
            Peça um Orçamento Grátis
          </a>
          <a
            href="#contato"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 lang-en"
          >
            Schedule a Demo
          </a>
          <a
            href="#contato"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 lang-pt hidden"
          >
            Agende uma Demonstração
          </a>
        </div>
      </header>

      {/* PROJECTS */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 lang-en">Featured Projects</h2>
        <h2 className="text-3xl font-bold text-center mb-10 lang-pt hidden">Projetos em Destaque</h2>

        {/* Project 1 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold lang-en">1. Online Barcode Generator</h3>
          <h3 className="text-2xl font-semibold lang-pt hidden">1. Gerador de Códigos de Barras</h3>
          <p className="mt-2 lang-en">Web tool for generating barcodes with direct printing.</p>
          <p className="mt-2 lang-pt hidden">
            Ferramenta web para geração de códigos de barras com impressão direta.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>HTML, JavaScript, JsBarcode</li>
            <li className="lang-en">Instant barcode generation (CODE128)</li>
            <li className="lang-pt hidden">Geração instantânea de barcode (CODE128)</li>
            <li className="lang-en">Lightweight interface with integrated printing</li>
            <li className="lang-pt hidden">Interface leve, com impressão integrada</li>
          </ul>
          <a
            href="projetos/barcode-generator.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en"
          >
            View details
          </a>
          <a
            href="projetos/barcode-generator.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt hidden"
          >
            Ver detalhes
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold lang-en">2. Real-Time Productivity Monitor</h3>
          <h3 className="text-2xl font-semibold lang-pt hidden">
            2. Monitor de Produtividade em Tempo Real
          </h3>
          <p className="mt-2 lang-en">
            A Python-powered desktop tool to monitor and optimize barcode reading productivity.
          </p>
          <p className="mt-2 lang-pt hidden">
            Ferramenta desktop em Python para monitorar e otimizar produtividade na leitura de códigos
            de barras.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>Python, Pandas, Keyboard</li>
            <li className="lang-en">Automated logging with timestamp</li>
            <li className="lang-pt hidden">Armazenamento automático com timestamp</li>
            <li className="lang-en">Run directly from terminal</li>
            <li className="lang-pt hidden">Execução via terminal</li>
          </ul>
          <a
            href="projetos/barcode-capturer.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en"
          >
            View details
          </a>
          <a
            href="projetos/barcode-capturer.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt hidden"
          >
            Ver detalhes
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold lang-en">3. Route Indexer from PDF</h3>
          <h3 className="text-2xl font-semibold lang-pt hidden">
            3. Indexador de Rotas a partir de PDF
          </h3>
          <p className="mt-2 lang-en">
            Application that extracts logistics routes from PDF manifests and generates a formatted
            report.
          </p>
          <p className="mt-2 lang-pt hidden">
            Aplicativo que extrai rotas logísticas de manifestos PDF e gera relatório formatado.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>Python, PyMuPDF, FPDF, Tkinter</li>
            <li className="lang-en">GUI-based file selection</li>
            <li className="lang-pt hidden">Seleção de arquivo via GUI</li>
            <li className="lang-en">PDF with customized index</li>
            <li className="lang-pt hidden">PDF com índices personalizados</li>
          </ul>
          <a
            href="projetos/pdf-indexer.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en"
          >
            View details
          </a>
          <a
            href="projetos/pdf-indexer.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt hidden"
          >
            Ver detalhes
          </a>
        </div>

        {/* Project 4 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold lang-en">4. WhatsApp Message Automation with AI</h3>
          <h3 className="text-2xl font-semibold lang-pt hidden">
            4. Automação de Mensagens com IA no WhatsApp
          </h3>
          <p className="mt-2 lang-en">
            System for sending personalized WhatsApp messages using AI.
          </p>
          <p className="mt-2 lang-pt hidden">
            Sistema que envia mensagens personalizadas via WhatsApp com base em IA.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>FastAPI, Zapier/Make, OpenAI API</li>
            <li className="lang-en">AI-powered text generation</li>
            <li className="lang-pt hidden">Geração de texto automático</li>
            <li className="lang-en">Lead dashboard and logs</li>
            <li className="lang-pt hidden">Logs de envio e painel de leads</li>
          </ul>
          <a
            href="projetos/whatsapp-automation.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en"
          >
            View details
          </a>
          <a
            href="projetos/whatsapp-automation.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt hidden"
          >
            Ver detalhes
          </a>
        </div>

        {/* Project 5 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold lang-en">5. Task Management System (Web App)</h3>
          <h3 className="text-2xl font-semibold lang-pt hidden">
            5. Sistema de Gestão de Tarefas (Web App)
          </h3>
          <p className="mt-2 lang-en">
            Fullstack app for managing tasks with deadlines, status, and comments.
          </p>
          <p className="mt-2 lang-pt hidden">
            Aplicativo fullstack para gerenciamento de tarefas com prazos, status e comentários.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>FastAPI, PostgreSQL, React/Tailwind</li>
            <li className="lang-en">Full CRUD with authentication</li>
            <li className="lang-pt hidden">CRUD completo com autenticação</li>
            <li className="lang-en">Dashboard with filters and real-time updates</li>
            <li className="lang-pt hidden">Dashboard com filtros e atualizações em tempo real</li>
          </ul>
          <a
            href="projetos/task-manager.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en"
          >
            View details
          </a>
          <a
            href="projetos/task-manager.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt hidden"
          >
            Ver detalhes
          </a>
        </div>

        {/* Project 6 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold lang-en">6. Data Extraction Bot with Dashboard</h3>
          <h3 className="text-2xl font-semibold lang-pt hidden">
            6. Bot de Extração de Dados com Dashboard
          </h3>
          <p className="mt-2 lang-en">
            System that scrapes public data from websites and presents it in an interactive
            dashboard.
          </p>
          <p className="mt-2 lang-pt hidden">Sistema que extrai dados públicos e exibe em dashboard.</p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>Python, BeautifulSoup/Selenium, Streamlit</li>
            <li className="lang-en">Real-time web scraping and analysis</li>
            <li className="lang-pt hidden">Scraping e análise em tempo real</li>
            <li className="lang-en">User-friendly interface for non-technical users</li>
            <li className="lang-pt hidden">Interface amigável para não-técnicos</li>
          </ul>
          <a
            href="projetos/scraping-dashboard.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-en"
          >
            View details
          </a>
          <a
            href="projetos/scraping-dashboard.html"
            className="mt-4 inline-block text-blue-600 hover:underline lang-pt hidden"
          >
            Ver detalhes
          </a>
        </div>
      </main>

      {/* SOBRE */}
      <section className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-4 lang-en">About Me & VIXAI</h2>
        <h2 className="text-3xl font-bold mb-4 lang-pt hidden">Sobre Mim & VIXAI</h2>
        <div className="md:flex items-start gap-8">
          <img
            src="/profile.jpg"
            alt="Almeida Photo"
            className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0"
          />
          <div>
            <p className="mb-4 lang-en">
              I’m Almeida, a systems engineer and founder of VIXAI — a one-man consultancy specializing in automation and AI.
            </p>
            <p className="mb-4 lang-pt hidden">
              Me chamo Almeida, engenheiro de sistemas e fundador da VIXAI — consultoria unipessoal de automação e IA.
            </p>
            <p className="mb-4 lang-en">
              At VIXAI, I provide:
              <ul className="list-disc list-inside ml-4">
                <li>Report automation & dashboards</li>
                <li>API & legacy system integrations</li>
                <li>Chatbots & intelligent assistants</li>
              </ul>
            </p>
            <p className="mb-4 lang-pt hidden">
              Na VIXAI, ofereço:
              <ul className="list-disc list-inside ml-4">
                <li>Automação de relatórios e dashboards</li>
                <li>Integração de APIs e sistemas legados</li>
                <li>Desenvolvimento de chatbots e assistentes</li>
              </ul>
            </p>
            <p className="lang-en">
              My edge: delivering working prototypes in under 2 weeks and offering ongoing
              post-launch support.
            </p>
            <p className="lang-pt hidden">
              Meu diferencial: entrego protótipos funcionais em até 2 semanas e ofereço suporte contínuo pós-implantação.
            </p>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-center lang-en">What Clients Say</h2>
        <h2 className="text-3xl font-bold mb-6 text-center lang-pt hidden">O que dizem os clientes</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <blockquote className="bg-white shadow rounded p-6">
            <p className="italic lang-en">
              “Almeida understood our challenge and saved us 20+ hours per week.”
            </p>
            <p className="italic lang-pt hidden">
              “Almeida entendeu nosso problema e economizou 20+ horas por semana.”
            </p>
            <footer className="mt-4 text-sm text-gray-600">
              <span className="lang-en">— Logistics industry client, Netherlands</span>
              <span className="lang-pt hidden">— Cliente da indústria logística, Holanda</span>
            </footer>
          </blockquote>
          <blockquote className="bg-white shadow rounded p-6">
            <p className="italic lang-en">
              “Impressive results automating our reporting workflow.”
            </p>
            <p className="italic lang-pt hidden">
              “Resultados impressionantes na automação do nosso fluxo de relatórios.”
            </p>
            <footer className="mt-4 text-sm text-gray-600">
              <span className="lang-en">— Small business owner, Belgium</span>
              <span className="lang-pt hidden">— Pequeno empresário, Bélgica</span>
            </footer>
          </blockquote>
          <blockquote className="bg-white shadow rounded p-6">
            <p className="italic lang-en">
              “Almeida delivered an inventory control system that reduced our errors by 95%.”
            </p>
            <p className="italic lang-pt hidden">
              “Almeida entregou um sistema de controle de estoque que reduziu nossos erros em 95%.”
            </p>
            <footer className="mt-4 text-sm text-gray-600">
              <span className="lang-en">— Operations manager, Utrecht</span>
              <span className="lang-pt hidden">— Gerente de operações, Utrecht</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-blue-50 py-12">
        <div className="container mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4 lang-en">Get in Touch</h2>
          <h2 className="text-2xl font-bold mb-4 lang-pt hidden">Entre em contato</h2>
          <p className="mb-6 lang-en">
            Want to transform your operation with smart automation? Contact us.
          </p>
          <p className="mb-6 lang-pt hidden">
            Quer transformar sua operação com automação inteligente? Fale conosco.
          </p>
          <form
            action="mailto:vixainlbr@gmail.com"
            method="post"
            encType="text/plain"
            className="bg-white p-6 rounded-lg shadow mb-6"
          >
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 lang-en" htmlFor="nome">
                Name
              </label>
              <label className="block mb-1 text-gray-700 lang-pt hidden" htmlFor="nome">
                Nome
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
              <label className="block mb-1 text-gray-700 lang-en" htmlFor="email">
                Email
              </label>
              <label className="block mb-1 text-gray-700 lang-pt hidden" htmlFor="email">
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
              <label className="block mb-1 text-gray-700 lang-en" htmlFor="mensagem">
                Project
              </label>
              <label className="block mb-1 text-gray-700 lang-pt hidden" htmlFor="mensagem">
                Projeto
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
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 lang-en"
            >
              Send Message
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 lang-pt hidden"
            >
              Enviar Mensagem
            </button>
          </form>
          <a
            href="https://wa.me/+31616286396"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 lang-en"
          >
            WhatsApp
          </a>
          <a
            href="https://wa.me/+31616286396"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 lang-pt hidden"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-500 text-sm">
        &copy; 2025 VIXAI. All rights reserved.
      </footer>

      {/* CHAT WIDGET */}
      <ChatWidget />
    </>
  )
}
