import { motion } from 'framer-motion'

const BrandStory = () => {
  return (
    <section className="relative bg-[#0E0E0E] text-[#F6F3EA] py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
            Born in Kenya. Crafted for the World.
          </h2>
          <p className="text-[#E7E2D4]/90" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
            We celebrate Nairobi’s urban sophistication and the intimacy of couture. From black-and-white ateliers to the city’s golden hour, our pieces honor heritage while shaping tomorrow’s luxury.
          </p>
          <p className="text-[#E7E2D4]/80">
            Minimal silhouettes, rich textures, and quiet confidence — designed for those who lead with presence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-[420px] rounded-xl overflow-hidden"
        >
          <img src="https://images.unsplash.com/photo-1531590878845-12627191e687?q=80&w=1600&auto=format&fit=crop" alt="Craftsmanship" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default BrandStory
