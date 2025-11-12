import { useEffect, useState } from 'react'

const Concierge = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Welcome to Lou Vou. What’s your occasion today?" }
  ])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const askStylist = async () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    const payload = { occasion: input, gender: undefined }
    const res = await fetch(`${backend}/api/stylist`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json()

    const responseText = data.count > 0
      ? `Consider ${data.picks.slice(0,3).map(p => p.title).join(', ')}.`
      : 'I will curate options shortly.'
    setMessages(prev => [...prev, { role: 'bot', text: responseText }])
  }

  return (
    <div>
      {/* Floating button */}
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-40 rounded-full bg-[#C2A768] text-black px-4 py-3 shadow-lg">
        Fashion Concierge
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-[#0E0E0E] text-[#F6F3EA] border border-white/10 rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 font-medium">AI Fashion Concierge</div>
          <div className="max-h-72 overflow-y-auto space-y-2 p-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'bot' ? 'text-[#E7E2D4]' : 'text-white/90 text-right'}>
                <span className="inline-block bg-white/5 rounded px-3 py-2">{m.text}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 p-3 border-t border-white/10">
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Your occasion" className="flex-1 bg-[#141414] rounded px-3 py-2" />
            <button onClick={askStylist} className="bg-[#C2A768] text-black rounded px-3">Send</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Concierge
