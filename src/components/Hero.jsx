import { motion } from 'framer-motion'

const videoUrl = 'https://cdn.coverr.co/videos/coverr-aerial-shot-of-nairobi-7361/1080p.mp4'

export default function Hero({ onShopClick }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs tracking-[0.2em] uppercase text-gold/90">
            Lou Vou Collections Kenya
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1.1 }}
          className="text-5xl sm:text-6xl md:text-7xl leading-tight font-serif"
          style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}
        >
          Luxury Woven in Identity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="mt-6 max-w-2xl text-neutral-200"
          style={{ fontFamily: 'Inter, Manrope, sans-serif' }}
        >
          Couture refinement fused with Nairobi's urban soul. Discover pieces that speak your language of luxury.
        </motion.p>

        <motion.button
          onClick={onShopClick}
          whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(212,175,55,0.35)' }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 px-8 py-3 rounded-full text-sm tracking-wide bg-gold text-black hover:bg-gold/90 transition-colors"
        >
          Shop the Collection
        </motion.button>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 text-xs text-neutral-300 tracking-widest uppercase">
        Scroll
      </div>
    </section>
  )
}
