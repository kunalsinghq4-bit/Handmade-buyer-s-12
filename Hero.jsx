import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Img from '../components/Img'
import { PRICING } from '../config/pricing'
import { useApp } from '../store/useApp'
// Rotating stamp: text on a circle, sits on the banner like a maker's seal
function Stamp({ city }) {
  const t = `MADE BY HAND IN ${city.toUpperCase()}   MADE BY HAND IN ${city.toUpperCase()}   `
  return <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28" aria-hidden="true">
    <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0"><defs><path id="ring" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
      <circle cx="60" cy="60" r="58" fill="#F5A623" /><text fontSize="10.5" fontWeight="700" letterSpacing="1.4" fill="#1C1C5E"><textPath href="#ring" textLength="285">{t}</textPath></text></svg>
    <span className="absolute inset-0 grid place-items-center font-display text-2xl text-brand-dark">हाथ</span></div>
}
export default function Hero() {
  const { city, lang } = useApp(), hi = lang === 'hi', fest = PRICING.flags.festivalBanner && PRICING.festival
  const slides = [
    { q: 'diwali diya lights celebration', grad: 'from-[#5A1A6B] via-[#B4233C] to-[#F5A623]', to: `/search?cat=${encodeURIComponent('Gifts & Festive')}`, cta: 'Shop festive gifts',
      h: fest ? (hi ? `${fest}, हाथों से बनी` : `${fest}, made by hand`) : 'Gifts with a maker behind them', sub: `Diyas, hampers, brass and sweets from makers in ${city}. Under Rs. 500 picks too.`, chip: 'Up to 30% off' },
    { q: 'handloom saree weaving india', grad: 'from-[#1C1C5E] via-[#2A2A86] to-[#4B6CC1]', to: `/search?cat=${encodeURIComponent('Sarees & Dupattas')}`, cta: 'Shop sarees and dupattas',
      h: hi ? 'करघे से सीधे आप तक' : 'From the loom, to you', sub: 'Banarasi, chanderi, kantha and khadi. Woven in days, not factories.', chip: 'Handwoven' },
    { q: 'terracotta pottery home decor interior', grad: 'from-[#5B3A29] via-[#B2552F] to-[#E8A06B]', to: `/search?cat=${encodeURIComponent('Home decor')}`, cta: 'Shop home and living',
      h: hi ? 'घर, धीरे धीरे बना' : 'A home, made slowly', sub: 'Clay, cane, brass and wood. Furniture and decor you can trace to one pair of hands.', chip: 'Free local delivery over Rs. 999' },
    { q: 'indian artisan craftsman workshop', grad: 'from-[#0F4C45] via-[#1F6F5C] to-[#7BCFB3]', to: '/search?badge=made', cta: 'See made to order',
      h: hi ? `${city} के कारीगर, आपके नाम` : `Made for you, in ${city}`, sub: 'Pick a colour or size and the maker starts after you order. Chat with them free.', chip: 'Chat with the maker' }]
  const [i, setI] = useState(0), [hold, setHold] = useState(false), x0 = useRef(null)
  useEffect(() => {
    if (hold || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI(n => (n + 1) % slides.length), 6000); return () => clearTimeout(t)
  }, [i, hold, slides.length])
  const go = d => setI(n => (n + d + slides.length) % slides.length)
  return <section aria-roledescription="carousel" aria-label="Featured collections" className="relative m-3 overflow-hidden rounded-3xl bg-brand text-white shadow-card"
    onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} onFocus={() => setHold(true)} onBlur={() => setHold(false)}
    onTouchStart={e => { x0.current = e.touches[0].clientX }} onTouchEnd={e => { const d = e.changedTouches[0].clientX - x0.current; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1) }}>
    <div className="relative h-[27rem] sm:h-[30rem]">
      {slides.map((s, n) => <div key={s.q} role="group" aria-label={`${n + 1} of ${slides.length}`} aria-hidden={n !== i} className={`absolute inset-0 transition-opacity duration-700 ${n === i ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${s.grad}`} />
        <div className={`absolute inset-0 ${n === i ? 'kb' : ''}`}><Img q={s.q} alt="" ratio="16/9" className="!h-full !aspect-auto" seed={`hero${n}${city}`} eager credit={n === i} /></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        {n === i && <div className="absolute inset-x-0 bottom-0 p-5 pb-12 sm:p-8 sm:pb-14">
          <span className="slidein inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold text-slate-900">{s.chip}</span>
          <h2 className="slidein mt-3 max-w-xl font-display text-[2.6rem] leading-[1.02] sm:text-6xl" style={{ animationDelay: '.25s' }}>{s.h}</h2>
          <p className="slidein mt-3 max-w-md text-[15px] text-white/90" style={{ animationDelay: '.4s' }}>{s.sub}</p>
          <Link to={s.to} className="btn-cta slidein mt-5" style={{ animationDelay: '.55s' }}>{s.cta}</Link></div>}
      </div>)}
      <div className="absolute right-3 top-3 sm:right-6 sm:top-6"><Stamp city={city} /></div>
      <div className="absolute inset-x-0 bottom-0 flex gap-1.5 px-5 pb-4 sm:px-8" role="tablist" aria-label="Choose slide">
        {slides.map((s, n) => <button key={n} role="tab" aria-selected={n === i} aria-label={`Slide ${n + 1}`} onClick={() => setI(n)} className="group h-6 flex-1 py-2.5">
          <span className="relative block h-1 overflow-hidden rounded-full bg-white/30">{n < i && <span className="absolute inset-0 bg-white" />}{n === i && <span key={`${i}${hold}`} className={`absolute inset-0 bg-white ${hold ? '' : 'fill'}`} />}</span></button>)}</div>
      <button aria-label="Previous slide" onClick={() => go(-1)} className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/30 backdrop-blur sm:grid"><ChevronLeft /></button>
      <button aria-label="Next slide" onClick={() => go(1)} className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/30 backdrop-blur sm:grid"><ChevronRight /></button>
    </div><div className="blockprint" aria-hidden="true" /></section>
}
