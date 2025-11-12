import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="bg-[#0e0e0e] text-neutral-100 py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl font-serif" style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>
            Born in Kenya. Crafted for the World.
          </h2>
          <p className="text-neutral-300 leading-relaxed" style={{ fontFamily: 'Inter, Manrope, sans-serif' }}>
            Lou Vou is a love letter to Nairobi—where couture sophistication meets streetwise confidence. Our atelier works hand-in-hand with local artisans to craft pieces that respect tradition and redefine luxury.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            Each silhouette is designed with intentionality—minimal lines, sumptuous textiles, and finishing that whispers rather than shouts.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img src="https://images.unsplash.com/photo-1617374995350-c26b53c74903?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLZW55YW4lMjBhcnRpc2Fuc3xlbnwwfDB8fHwxNzYyOTg2NjQwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Kenyan artisans" className="rounded-xl object-cover w-full h-80" />
          <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  )
}
