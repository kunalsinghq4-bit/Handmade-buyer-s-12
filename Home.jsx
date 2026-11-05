import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, BadgeCheck, Truck, ShieldCheck, MessageCircle, Zap } from 'lucide-react'
import Img from '../components/Img'
import CatIcon from '../components/CatIcon'
import { ProductCard } from '../components/Card'
import Hero from './Hero'
import { STORES, CATS, disc } from '../data/mock'
import { PRICING } from '../config/pricing'
import { useApp } from '../store/useApp'
const enc = encodeURIComponent
const StoreTile = ({ s, tag }) => <Link to={`/store/${s.id}`} className="block w-48 shrink-0 overflow-hidden rounded-2xl bg-white shadow-card">
  <Img q="handloom textile india" seed={s.id} alt={s.name} ratio="4/3" /><div className="p-2"><p className="flex items-center gap-1 truncate font-bold">{s.name}{s.verified && <BadgeCheck size={15} className="shrink-0 text-brand" aria-label="Verified" />}</p>
  <p className="text-xs text-slate-600">{tag && <b className="text-gold-dark">Featured. </b>}{s.products.length} products, {s.rating} stars (sample)</p></div></Link>
const Head = ({ t, to, sub }) => <div className="flex items-end justify-between px-3 pb-2"><div><h2 className="font-display text-2xl leading-none">{t}</h2>{sub && <p className="mt-1 text-xs text-slate-600">{sub}</p>}</div>
  {to && <Link to={to} className="flex min-h-[44px] items-center text-sm font-bold text-brand">See all<ChevronRight size={16} /></Link>}</div>
const Row = ({ t, to, sub, children }) => <section className="mt-8"><Head t={t} to={to} sub={sub} /><div className="noscrollbar flex gap-3 overflow-x-auto px-3 pb-1">{children}</div></section>
// resets at midnight so the deals row always has a live countdown
function useLeft() {
  const calc = () => { const n = new Date(), e = new Date(n); e.setHours(24, 0, 0, 0); const s = Math.floor((e - n) / 1000); return [s / 3600 | 0, (s % 3600) / 60 | 0, s % 60].map(v => String(v).padStart(2, '0')).join(':') }
  const [t, setT] = useState(calc); useEffect(() => { const i = setInterval(() => setT(calc()), 1000); return () => clearInterval(i) }, []); return t
}
export default function Home() {
  const city = useApp(s => s.city), left = useLeft(), [more, setMore] = useState(12)
  const mine = STORES.filter(s => s.city === city), prods = mine.flatMap(s => s.products)
  const deals = [...prods].sort((a, b) => disc(b) - disc(a)).slice(0, 10)
  const shown = prods.filter(p => !deals.includes(p))
  const picks = [['Home decor', 'Home decor'], ['Clothing', 'Clothing'], ['Jewellery', 'Jewellery'], ['Gifts & Festive', 'Gifts & Festive']]
  const coll = [['Under Rs. 499', '/search?max=499', 'handmade small gift', 'from-[#C77F00]'], [`${PRICING.festival || 'Festive'} gifts`, `/search?cat=${enc('Gifts & Festive')}`, 'diwali diya lights', 'from-[#9B2C2C]'],
    ['Made to order', '/search?badge=made', 'artisan workshop india', 'from-[#1F6F5C]'], ['New this week', '/search?new=1', 'handmade craft flatlay', 'from-[#2A2A86]']]
  return <div>
    <Hero />
    <div className="noscrollbar overflow-hidden border-y bg-white py-2 text-sm font-medium text-brand" aria-label="Why shop here">
      <div className="marq flex gap-8">{[0, 1].map(k => <div key={k} className="flex shrink-0 gap-8" aria-hidden={k === 1}>{['Made by hand, by makers near you', 'Prepaid and protected', `Ships within ${city}`, '7-day dispute support', 'Chat with the maker, free'].map(t => <span key={t} className="flex items-center gap-8">{t}<i className="h-1.5 w-1.5 rotate-45 bg-gold" /></span>)}</div>)}</div></div>
    <section className="mt-6"><Head t="Shop by category" sub="Everything for you, home and gifting. Each one made by hand or in small batches." />
      <div className="noscrollbar flex gap-3 overflow-x-auto px-3 pb-1">{CATS.map(c => <Link key={c} to={`/search?cat=${enc(c)}`} className="flex w-[4.6rem] shrink-0 flex-col items-center gap-1.5 text-center text-xs font-medium">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-brand ring-2 ring-gold/0 transition active:ring-gold"><CatIcon c={c} size={26} /></span>{c}</Link>)}</div></section>
    <section className="mt-6 grid grid-cols-2 gap-3 px-3 sm:grid-cols-4">{coll.map(([t, to, q, g]) => <Link key={t} to={to} className="relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
      <Img q={q} seed={t} alt="" ratio="4/3" className="!h-full" /><div className={`absolute inset-0 bg-gradient-to-t ${g} via-black/20 to-transparent`} /><span className="absolute bottom-2 left-3 right-2 font-display text-xl leading-tight text-white drop-shadow">{t}</span></Link>)}</section>
    <section className="mt-8 bg-brand-soft py-5"><div className="flex items-end justify-between px-3 pb-2"><div><h2 className="flex items-center gap-1.5 font-display text-2xl leading-none"><Zap className="fill-gold text-gold" size={22} />Today's deals</h2>
      <p className="mt-1 text-xs text-slate-600">Resets in <b className="tabular-nums text-brand">{left}</b></p></div><Link to="/search?sort=disc" className="flex min-h-[44px] items-center text-sm font-bold text-brand">See all<ChevronRight size={16} /></Link></div>
      <div className="noscrollbar flex gap-3 overflow-x-auto px-3">{deals.map(p => <ProductCard key={p.id} p={p} className="w-40 shrink-0 sm:w-48" />)}</div></section>
    <Row t="Makers near you" sub={`Verified studios in ${city}. Tap to see their story and catalogue.`}>{mine.map(s => <StoreTile key={s.id} s={s} tag={s.featured} />)}</Row>
    {picks.map(([c, t]) => <Row key={c} t={t} to={`/search?cat=${enc(c)}`}>{prods.filter(p => p.cat === c).slice(0, 8).map(p => <ProductCard key={p.id} p={p} className="w-40 shrink-0 sm:w-48" />)}</Row>)}
    <section className="mx-3 mt-8 overflow-hidden rounded-3xl bg-slate-900 text-white sm:flex"><Img q="indian artisan hands craft" seed={`maker${city}`} alt="A maker at work" ratio="4/3" className="sm:w-1/2 sm:!aspect-auto" />
      <div className="p-5 sm:w-1/2 sm:self-center sm:p-8"><h2 className="font-display text-3xl leading-tight">Every order has a name on it</h2>
        <p className="mt-2 text-sm text-white/80">Not a warehouse. Each product comes from a maker in {city} who packs it and sends a photo before it ships.</p>
        <ul className="mt-4 space-y-2 text-sm">{[[MessageCircle, 'Chat with the maker before you buy, free'], [Truck, `Ships within ${city} with tracking`], [ShieldCheck, 'Payment held until you receive it']].map(([I, t]) => <li key={t} className="flex items-center gap-2"><I size={18} className="text-gold" />{t}</li>)}</ul>
        <Link to={`/store/${mine.find(s => s.featured)?.id}`} className="btn-cta mt-5">Meet a featured maker</Link></div></section>
    <section className="mt-8"><Head t={`More from ${city}`} sub={`${prods.length} products and counting`} />
      <div className="grid grid-cols-2 gap-3 px-3 sm:grid-cols-3 lg:grid-cols-4">{shown.slice(0, more).map(p => <ProductCard key={p.id} p={p} />)}</div>
      {more < shown.length && <div className="p-4"><button className="btn-ghost w-full" onClick={() => setMore(more + 12)}>Show more ({shown.length - more} left)</button></div>}</section>
    <p className="px-4 pb-6 pt-2 text-center text-xs text-slate-500">Ratings, reviews and sales counts are sample data. Photos from Unsplash.</p>
  </div>
}
