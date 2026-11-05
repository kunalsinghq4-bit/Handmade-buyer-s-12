import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Star, Hand } from 'lucide-react'
import Img from './Img'
import { useApp } from '../store/useApp'
import { disc, STORES } from '../data/mock'
export function Wish({ id }) {
  const { wish, toggleWish } = useApp(), on = wish.includes(id), [k, setK] = useState(0)
  return <button aria-label={on ? 'Remove from wishlist' : 'Add to wishlist'} aria-pressed={on} onClick={e => { e.preventDefault(); setK(k + 1); toggleWish(id) }}
    className="absolute right-1 top-1 z-10 grid h-11 w-11 place-items-center"><span key={k} className={on ? 'pop' : ''}><Heart fill={on ? '#E11D48' : 'rgba(255,255,255,.7)'} color={on ? '#E11D48' : '#334155'} /></span></button>
}
export const rs = n => 'Rs. ' + n.toLocaleString('en-IN')
const makerName = id => STORES.find(s => s.id === id)?.name
// className lets rows use fixed widths (w-40 shrink-0) while grids let the card fill its cell
export function ProductCard({ p, className = '' }) {
  const d = disc(p)
  return <Link to={`/p/${p.id}`} className={`group relative block overflow-hidden rounded-2xl bg-white shadow-card ${className}`}>
    <div className="relative overflow-hidden"><Img q={p.q} seed={p.id} alt={p.name} ratio="4/5" className="transition duration-500 group-hover:scale-[1.04]" />
      <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-medium text-brand backdrop-blur">
        <Hand size={11} />{p.madeToOrder ? `Made to order, ${p.days || 3} days` : p.days ? 'Handmade' : 'Small batch'}</span></div>
    <Wish id={p.id} />
    {p.sponsored ? <span className="tag absolute left-2 top-2">Sponsored</span> : d >= 20 && <span className="absolute left-2 top-2 rounded bg-gold px-1.5 py-0.5 text-[11px] font-bold text-slate-900">{d}% off</span>}
    <div className="p-3"><p className="truncate text-sm font-medium">{p.name}</p>
      <p className="truncate text-xs text-slate-500">{makerName(p.storeId)}</p>
      <p className="mt-0.5 flex items-baseline gap-1.5 font-bold">{rs(p.price)} <s className="text-xs font-normal text-slate-500">{rs(p.mrp)}</s></p>
      <p className="flex items-center gap-1 text-xs text-slate-600" aria-label={`${p.rating} stars, sample data`}><Star size={12} className="fill-gold text-gold" />{p.rating}<span className="text-slate-400">({p.sold})</span></p></div></Link>
}
export const Skeleton = () => <div className="grid grid-cols-2 gap-3 p-3">{[0, 1, 2, 3].map(i => <div key={i} className="sk h-60" />)}</div>
export const Empty = ({ t, d }) => <div className="p-10 text-center"><h2 className="font-bold">{t}</h2><p className="text-sm text-slate-600">{d}</p></div>
