// components/ChatWidget.js
import { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Hello! Em que posso ajudar? How can I help you?' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef();

  // Scroll automático à última mensagem
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    // 1) Cria userMsg e monta newMessages antes de atualizar o state
    const userMsg = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');

    try {
      // 2) Faz a chamada à API com newMessages
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      // 3) Log do status HTTP para depuração
      console.log('🛰️ fetch /api/chat status:', resp.status);

      // 4) Se não for OK, lê e loga o corpo de erro
      if (!resp.ok) {
        const errorText = await resp.text();
        console.error('💥 API responded:', errorText);
        throw new Error(`Status ${resp.status}`);
      }

      // 5) Com sucesso, adiciona a resposta do bot ao chat
      const data = await resp.json();
      const botMsg = {
        role: 'assistant',
        content: data.reply || 'Desculpe, houve um erro.'
      };
      setMessages((prev) => [...prev, botMsg]);

    } catch (err) {
      // 6) Em erro de rede ou API, loga o erro e exibe mensagem amigável
      console.error('🌐 Network/API error:', err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Erro de rede, tente novamente.' }
      ]);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {open && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col overflow-hidden">
          <div className="p-2 bg-blue-600 text-white font-bold">Chat VIXAI</div>
          <div className="flex-1 p-2 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  m.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
                }`}
              >
                {m.content}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="p-2 border-t flex">
            <input
              className="flex-1 border rounded px-2 py-1 mr-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded"
              onClick={sendMessage}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700"
        aria-label="Abrir chat"
      >
        💬
      </button>
    </div>
  );
}
