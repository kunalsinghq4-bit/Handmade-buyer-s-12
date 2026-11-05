import { Shirt, Layers, Gem, ShoppingBag, Footprints, Lamp, UtensilsCrossed, Armchair, Frame, Flower2, Gift, ToyBrick, PenLine, Cookie, LayoutGrid } from 'lucide-react'
export const ICONS = { Clothing: Shirt, 'Sarees & Dupattas': Layers, Jewellery: Gem, 'Bags & Accessories': ShoppingBag, Footwear: Footprints, 'Home decor': Lamp,
  'Kitchen & Dining': UtensilsCrossed, Furniture: Armchair, 'Art & Wall decor': Frame, 'Beauty & Wellness': Flower2, 'Gifts & Festive': Gift, 'Kids & Toys': ToyBrick,
  Stationery: PenLine, 'Food & Pantry': Cookie }
export default function CatIcon({ c, ...r }) { const I = ICONS[c] || LayoutGrid; return <I {...r} /> }
