import { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Collections from './components/Collections'
import Shop from './components/Shop'
import Footer from './components/Footer'
import './index.css'

export default function App(){
  const shopRef = useRef(null)
  const handleShopClick = () => {
    const el = document.getElementById('shop')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white" style={{
      // Matte gold utility
      ['--gold']: '#D4AF37'
    }}>
      <style>{` 
        .text-gold{ color: #D4AF37 }
        .bg-gold{ background-color: #D4AF37 }
      `}</style>

      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif">Lou Vou</div>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#collections" className="hover:text-white">Collections</a>
            <a href="#shop" className="hover:text-white">Shop</a>
            <a href="#about" className="hover:text-white">About</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero onShopClick={handleShopClick} />
        <div id="about"><About /></div>
        <div id="collections"><Collections /></div>
        <Shop ref={shopRef} />
      </main>

      <Footer />
    </div>
  )
}
