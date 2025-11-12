import { motion } from 'framer-motion'

const items = [
  { title: "Men’s Luxury Wear", slug: 'mens-luxury', image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1974&auto=format&fit=crop' },
  { title: "Women’s Couture & Accessories", slug: 'womens-couture', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop' },
  { title: "Unisex Streetwear", slug: 'streetwear', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1974&auto=format&fit=crop' },
  { title: "Lou Vou Bags & Signature Pieces", slug: 'signature', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1974&auto=format&fit=crop' },
]

export default function Collections() {
  return (
    <section className="bg-[#0b0b0b] text-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serif mb-10" style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>Collections</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-neutral-900"
            >
              <img src={it.image} alt={it.title} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-serif">{it.title}</h3>
                <div className="mt-3 inline-block px-4 py-1 rounded-full text-xs tracking-widest uppercase bg-white/10 backdrop-blur-sm">
                  Explore →
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(800px circle at var(--x,50%) var(--y,50%), rgba(212,175,55,0.25), transparent 40%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
