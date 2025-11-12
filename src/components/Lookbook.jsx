import { useEffect, useState } from 'react'

const Lookbook = () => {
  const [entries, setEntries] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    (async () => {
      const res = await fetch(`${backend}/api/lookbook`)
      const data = await res.json()
      setEntries(data)
    })()
  }, [])

  return (
    <section className="bg-[#0E0E0E] text-[#F6F3EA] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serif mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Lookbook</h2>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-6 min-w-max">
            {entries.map(e => (
              <div key={e.id} className="relative w-[320px] h-[420px] flex-none rounded-xl overflow-hidden bg-[#141414]">
                <img src={e.media_url} alt={e.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-sm opacity-80">{e.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lookbook
