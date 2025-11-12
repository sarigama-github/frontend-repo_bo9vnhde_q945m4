import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function Shop(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ gender: '', collection: '', min: '', max: '' })

  useEffect(()=>{
    const params = new URLSearchParams()
    if (filters.gender) params.set('gender', filters.gender)
    if (filters.collection) params.set('collection', filters.collection)
    if (filters.min) params.set('min_price', filters.min)
    if (filters.max) params.set('max_price', filters.max)

    fetch(`${BACKEND}/api/products?${params.toString()}`)
      .then(r=>r.json())
      .then(d=> setItems(d.items || []))
      .catch(()=>{})
      .finally(()=> setLoading(false))
  }, [filters])

  return (
    <section id="shop" className="bg-[#0b0b0b] text-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-serif" style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>Shop</h2>
            <p className="text-neutral-400 text-sm">Refined essentials and signature statements</p>
          </div>
          <div className="flex gap-2">
            <select className="bg-white/10 px-3 py-2 rounded text-sm" value={filters.gender} onChange={e=> setFilters(f=>({...f, gender: e.target.value}))}>
              <option value="">All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="unisex">Unisex</option>
            </select>
            <input type="number" placeholder="Min" className="bg-white/10 px-3 py-2 rounded text-sm w-24" value={filters.min} onChange={e=> setFilters(f=>({...f, min: e.target.value}))}/>
            <input type="number" placeholder="Max" className="bg-white/10 px-3 py-2 rounded text-sm w-24" value={filters.max} onChange={e=> setFilters(f=>({...f, max: e.target.value}))}/>
          </div>
        </div>

        {loading ? (
          <div className="text-neutral-400">Loading…</div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map(p => (
              <div key={p._id} className="group bg-neutral-900 rounded-xl overflow-hidden">
                <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=2069&auto=format&fit=crop'} alt={p.title} className="h-64 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"/>
                <div className="p-4">
                  <div className="text-sm uppercase tracking-widest text-neutral-400">{p.collection || p.category}</div>
                  <div className="mt-1 font-medium">{p.title}</div>
                  <div className="mt-2 text-gold">KES {Number(p.price).toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
