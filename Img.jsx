import { useEffect, useRef, useState } from 'react'
const KEY = import.meta.env.VITE_UNSPLASH_KEY
const DAY = 864e5, pools = new Map()
const hash = s => { let h = 7; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h }
const orient = ratio => { const [a, b] = String(ratio).split('/').map(Number), r = a / (b || 1); return r < 0.9 ? 'portrait' : r > 1.2 ? 'landscape' : 'squarish' }
// One Unsplash search per phrase (30 photos), cached for 24h. Products pick their own photo from it, so 100 products cost ~40 requests.
function loadPool(q, o) {
  const k = `us2:${q}|${o}`
  if (pools.has(k)) return pools.get(k)
  let hit; try { hit = JSON.parse(localStorage.getItem(k)); if (hit && Date.now() - hit.t < DAY) { const r = Promise.resolve(hit.v); pools.set(k, r); return r } } catch { /* ignore */ }
  if (Date.now() < +(localStorage.getItem('us2:pause') || 0)) return Promise.resolve([])
  const r = fetch(`https://api.unsplash.com/search/photos?per_page=30&orientation=${o}&query=${encodeURIComponent(q)}&client_id=${KEY}`)
    .then(res => { if (res.status === 403 || res.status === 429) { localStorage.setItem('us2:pause', Date.now() + 36e5); return { results: [] } } return res.json() })
    .then(d => { const v = (d.results || []).map(p => ({ src: p.urls.raw + '&auto=format&fit=crop&w=900&q=75', by: p.user.name, link: p.links.html + '?utm_source=handmade_buyer&utm_medium=referral' }))
      if (v.length) try { localStorage.setItem(k, JSON.stringify({ t: Date.now(), v })) } catch { /* quota */ } else pools.delete(k)
      return v }).catch(() => { pools.delete(k); return [] })
  pools.set(k, r); return r
}
export function useUnsplash(q, seed, o, on = true) {
  const [u, setU] = useState(null)
  useEffect(() => {
    if (!KEY || !q || !on) return
    let live = true
    loadPool(q, o).then(v => { if (live && v.length) setU(v[hash(seed) % v.length]) })
    return () => { live = false }
  }, [q, seed, o, on]); return u
}
const TONES = [['#2A2A86', '#6D5BD0'], ['#C77F00', '#F5A623'], ['#9B2C2C', '#E2725B'], ['#1F6F5C', '#58B89C'], ['#5B3A29', '#B98B5E'], ['#7A3E8E', '#C77DD6']]
// no key / offline / rate limited: a block-print style colour tile, never a blank box
function Art({ q, alt }) {
  const [a, b] = TONES[hash(q) % TONES.length]
  return <div className="relative grid h-full w-full place-items-center overflow-hidden p-3 text-center" style={{ background: `linear-gradient(145deg,${a},${b})` }}>
    <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true"><defs><pattern id="bp" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M14 3l5 11-5 11-5-11z" fill="none" stroke="#fff" strokeWidth="1.4" /><circle cx="14" cy="14" r="1.6" fill="#fff" /></pattern></defs><rect width="100%" height="100%" fill="url(#bp)" /></svg>
    <span className="relative font-display text-sm leading-tight text-white drop-shadow">{alt}</span></div>
}
// aspect-ratio box + blur-up + lazy fetch when scrolled near + art fallback (no layout shift)
export default function Img({ q, alt, ratio = '1/1', className = '', seed, credit, eager }) {
  const box = useRef(), [near, setNear] = useState(!!eager), [ok, setOk] = useState(true), [on, setOn] = useState(false)
  useEffect(() => {
    if (near || !box.current) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect() } }, { rootMargin: '400px' })
    io.observe(box.current); return () => io.disconnect()
  }, [near])
  const u = useUnsplash(q, seed ?? q + alt, orient(ratio), near)
  return <div ref={box} className={`relative overflow-hidden bg-brand-soft ${className}`} style={{ aspectRatio: ratio }}>
    {u && ok ? <><img src={u.src} alt={alt} loading="lazy" onLoad={() => setOn(true)} onError={() => setOk(false)}
      className={`h-full w-full object-cover transition duration-500 ${on ? '' : 'blur-md'}`} />
      {credit && <a href={u.link} target="_blank" rel="noreferrer" className="absolute bottom-1 right-2 text-[10px] text-white/80 underline">Photo: {u.by} on Unsplash</a>}</> : <Art q={q} alt={alt} />}
  </div>
}
