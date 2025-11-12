export default function Footer(){
  return (
    <footer className="bg-black text-neutral-300 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-xl font-serif text-white">Lou Vou</div>
          <p className="mt-3 text-sm">Where Luxury Meets You.</p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-neutral-400">Explore</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-neutral-400">Follow</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-neutral-400">Newsletter</div>
          <form className="mt-3 flex gap-2">
            <input className="flex-1 px-3 py-2 rounded bg-white/5 border border-white/10 text-sm placeholder:text-neutral-500" placeholder="Email address" />
            <button className="px-4 py-2 rounded bg-gold text-black text-sm">Join</button>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Lou Vou Collections Kenya</div>
    </footer>
  )
}
