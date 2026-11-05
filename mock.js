// ALL ratings, review counts, sales numbers and reviews below are SAMPLE DATA, not real.
export const CITIES = [
  { name: 'Patna', pins: ['800'] }, { name: 'Lucknow', pins: ['226'] }, { name: 'Jaipur', pins: ['302'] },
  { name: 'Pune', pins: ['411'] }, { name: 'Indore', pins: ['452'] }, { name: 'Kolkata', pins: ['700'] }]

// Full marketplace categories. Handmade is the USP, not the limit.
export const CATS = ['Clothing', 'Sarees & Dupattas', 'Jewellery', 'Bags & Accessories', 'Footwear', 'Home decor', 'Kitchen & Dining',
  'Furniture', 'Art & Wall decor', 'Beauty & Wellness', 'Gifts & Festive', 'Kids & Toys', 'Stationery', 'Food & Pantry']

// Unsplash search phrase per photo group. Products in a group share one cached search, each picks its own photo.
export const GROUPS = {
  kurta: 'indian kurta women fashion', shirt: 'linen shirt men fashion', dress: 'cotton dress boho fashion', jacket: 'embroidered jacket fashion',
  saree: 'indian saree silk', dupatta: 'colorful scarf textile', jhumka: 'indian earrings jewellery', necklace: 'handmade necklace jewellery',
  bangles: 'bangles bracelet jewellery', tote: 'handmade tote bag', wallet: 'leather wallet handmade', sunglass: 'wooden sunglasses',
  sandals: 'handmade leather sandals', planter: 'terracotta planter', vase: 'ceramic vase', candle: 'handmade candles',
  macrame: 'macrame wall hanging', cushion: 'cushion cover textile', brass: 'brass decor india', rug: 'woven jute rug',
  basket: 'woven basket storage', lamp: 'rattan lamp pendant', mug: 'handmade ceramic mug', dinner: 'handmade ceramic plates bowls',
  woodkitchen: 'wooden spoons kitchen', chair: 'cane chair furniture', table: 'wooden side table', shelf: 'wooden shelf decor',
  art: 'madhubani folk painting', wallart: 'wall art framed print', soap: 'handmade soap', skincare: 'natural skincare bottles',
  diya: 'diwali diya lights', hamper: 'gift hamper box', toys: 'wooden toys kids', plush: 'crochet toy', notebook: 'handmade paper notebook',
  pickle: 'pickle jar homemade', tea: 'masala chai tea spices', honey: 'honey jar' }

// [name, category, price, photo group, craft line]
const T = [
  ['Block print kurta', 'Clothing', 1499, 'kurta', 'Hand block printed'], ['Indigo hand-dyed shirt', 'Clothing', 1799, 'shirt', 'Natural indigo dyed'],
  ['Chikankari kurta set', 'Clothing', 2499, 'kurta', 'Hand embroidered'], ['Ajrakh print co-ord set', 'Clothing', 2299, 'dress', 'Hand block printed'],
  ['Khadi nehru jacket', 'Clothing', 2199, 'jacket', 'Handspun khadi'], ['Bandhani anarkali', 'Clothing', 2899, 'kurta', 'Hand tie-dyed'],
  ['Linen kurta pyjama', 'Clothing', 1999, 'shirt', 'Handloom linen'], ['Kantha stitch jacket', 'Clothing', 3299, 'jacket', 'Hand stitched kantha'],
  ['Ikat wrap dress', 'Clothing', 2399, 'dress', 'Handwoven ikat'], ['Embroidered denim jacket', 'Clothing', 3499, 'jacket', 'Hand embroidered'],
  ['Cotton palazzo set', 'Clothing', 1299, 'dress', 'Hand block printed'], ['Kalamkari tunic', 'Clothing', 1699, 'kurta', 'Hand painted kalamkari'],
  ['Handloom cotton saree', 'Sarees & Dupattas', 2200, 'saree', 'Handwoven on pit loom'], ['Banarasi silk saree', 'Sarees & Dupattas', 6800, 'saree', 'Handwoven brocade'],
  ['Chanderi saree', 'Sarees & Dupattas', 3400, 'saree', 'Handwoven chanderi'], ['Kantha silk saree', 'Sarees & Dupattas', 4200, 'saree', 'Hand stitched kantha'],
  ['Bandhani saree', 'Sarees & Dupattas', 2600, 'saree', 'Hand tie-dyed'], ['Madhubani dupatta', 'Sarees & Dupattas', 899, 'dupatta', 'Hand painted'],
  ['Phulkari dupatta', 'Sarees & Dupattas', 1599, 'dupatta', 'Hand embroidered phulkari'], ['Tie-dye cotton stole', 'Sarees & Dupattas', 599, 'dupatta', 'Hand tie-dyed'],
  ['Woollen shawl', 'Sarees & Dupattas', 2999, 'dupatta', 'Handwoven wool'], ['Ajrakh cotton dupatta', 'Sarees & Dupattas', 999, 'dupatta', 'Hand block printed'],
  ['Silver jhumkas', 'Jewellery', 1250, 'jhumka', 'Hand crafted silver'], ['Lac bangles set', 'Jewellery', 650, 'bangles', 'Hand set lac'],
  ['Oxidised silver necklace', 'Jewellery', 1450, 'necklace', 'Hand crafted silver'], ['Kundan choker', 'Jewellery', 2250, 'necklace', 'Hand set kundan'],
  ['Terracotta earrings', 'Jewellery', 349, 'jhumka', 'Hand moulded clay'], ['Beaded statement necklace', 'Jewellery', 799, 'necklace', 'Hand beaded'],
  ['Brass anklet pair', 'Jewellery', 599, 'bangles', 'Hand cast brass'], ['Meenakari pendant', 'Jewellery', 1299, 'necklace', 'Hand enamelled'],
  ['Thread-work earrings', 'Jewellery', 299, 'jhumka', 'Hand wound thread'], ['Temple jewellery set', 'Jewellery', 3499, 'necklace', 'Hand carved and set'],
  ['Jute tote bag', 'Bags & Accessories', 799, 'tote', 'Hand stitched jute'], ['Leather sling bag', 'Bags & Accessories', 1999, 'tote', 'Vegetable tanned, hand stitched'],
  ['Banjara potli bag', 'Bags & Accessories', 699, 'tote', 'Hand embroidered'], ['Wooden frame sunglasses', 'Bags & Accessories', 1100, 'sunglass', 'Hand carved wood'],
  ['Bamboo sunglasses', 'Bags & Accessories', 1350, 'sunglass', 'Hand shaped bamboo'], ['Hand-stitched leather wallet', 'Bags & Accessories', 899, 'wallet', 'Hand stitched'],
  ['Macrame keychain set', 'Bags & Accessories', 249, 'wallet', 'Hand knotted'], ['Embroidered laptop sleeve', 'Bags & Accessories', 1199, 'tote', 'Hand embroidered'],
  ['Cork card holder', 'Bags & Accessories', 499, 'wallet', 'Hand cut and stitched'], ['Cane crossbody bag', 'Bags & Accessories', 1699, 'tote', 'Hand woven cane'],
  ['Kolhapuri chappals', 'Footwear', 1199, 'sandals', 'Hand stitched leather'], ['Jutti with mirror work', 'Footwear', 999, 'sandals', 'Hand embroidered'],
  ['Leather mojari', 'Footwear', 1399, 'sandals', 'Hand stitched leather'], ['Woven sandals', 'Footwear', 899, 'sandals', 'Hand woven'],
  ['Handmade espadrilles', 'Footwear', 1299, 'sandals', 'Hand stitched jute sole'], ['Kids jutti', 'Footwear', 699, 'sandals', 'Hand embroidered'],
  ['Terracotta planter', 'Home decor', 540, 'planter', 'Hand thrown clay'], ['Ceramic bud vase', 'Home decor', 450, 'vase', 'Hand thrown'],
  ['Soy wax pillar candles', 'Home decor', 599, 'candle', 'Hand poured'], ['Macrame wall hanging', 'Home decor', 1299, 'macrame', 'Hand knotted'],
  ['Block print cushion covers', 'Home decor', 799, 'cushion', 'Hand block printed'], ['Dhokra brass figurine', 'Home decor', 1899, 'brass', 'Lost wax cast'],
  ['Woven jute rug', 'Home decor', 2499, 'rug', 'Handwoven'], ['Seagrass storage baskets', 'Home decor', 899, 'basket', 'Hand woven'],
  ['Hand-painted lantern', 'Home decor', 1099, 'lamp', 'Hand painted'], ['Kantha throw blanket', 'Home decor', 2799, 'cushion', 'Hand stitched kantha'],
  ['Hand-thrown ceramic mug', 'Kitchen & Dining', 480, 'mug', 'Hand thrown'], ['Stoneware dinner set', 'Kitchen & Dining', 3899, 'dinner', 'Hand glazed'],
  ['Neem wood spoon set', 'Kitchen & Dining', 399, 'woodkitchen', 'Hand carved'], ['Cast iron tawa', 'Kitchen & Dining', 1199, 'woodkitchen', 'Hand forged'],
  ['Blue pottery serving bowl', 'Kitchen & Dining', 950, 'dinner', 'Hand painted blue pottery'], ['Brass thali set', 'Kitchen & Dining', 2299, 'brass', 'Hand hammered'],
  ['Block print table runner', 'Kitchen & Dining', 749, 'cushion', 'Hand block printed'], ['Cane lounge chair', 'Furniture', 6499, 'chair', 'Hand woven cane'],
  ['Sheesham side table', 'Furniture', 3499, 'table', 'Hand carved sheesham'], ['Wall-mounted wooden shelf', 'Furniture', 1899, 'shelf', 'Hand finished wood'],
  ['Rope-weave stool', 'Furniture', 2299, 'chair', 'Hand woven rope'], ['Channapatna jewellery box', 'Furniture', 1599, 'shelf', 'Hand lacquered'],
  ['Rattan pendant lamp', 'Furniture', 2499, 'lamp', 'Hand woven rattan'], ['Madhubani painting', 'Art & Wall decor', 3200, 'art', 'Hand painted on paper'],
  ['Warli art canvas', 'Art & Wall decor', 2400, 'art', 'Hand painted'], ['Pattachitra scroll', 'Art & Wall decor', 2800, 'art', 'Hand painted on cloth'],
  ['Gond art print set', 'Art & Wall decor', 1499, 'wallart', 'Artist signed prints'], ['Framed pressed flowers', 'Art & Wall decor', 1199, 'wallart', 'Hand pressed and framed'],
  ['Tanjore style panel', 'Art & Wall decor', 7500, 'art', 'Hand painted with gold leaf'], ['Hand-carved wooden mirror', 'Art & Wall decor', 3299, 'wallart', 'Hand carved'],
  ['Pichwai wall art', 'Art & Wall decor', 4200, 'art', 'Hand painted'], ['Cold-process soap trio', 'Beauty & Wellness', 449, 'soap', 'Small batch'],
  ['Kumkumadi face oil', 'Beauty & Wellness', 899, 'skincare', 'Small batch'], ['Neem wood comb', 'Beauty & Wellness', 299, 'skincare', 'Hand carved'],
  ['Rose clay face mask', 'Beauty & Wellness', 349, 'skincare', 'Small batch'], ['Ayurvedic hair oil', 'Beauty & Wellness', 399, 'skincare', 'Small batch'],
  ['Lavender bath salts', 'Beauty & Wellness', 549, 'soap', 'Small batch'], ['Beeswax lip balm set', 'Beauty & Wellness', 299, 'soap', 'Small batch'],
  ['Festive diya set', 'Gifts & Festive', 420, 'diya', 'Hand painted clay'], ['Festive gift hamper', 'Gifts & Festive', 1899, 'hamper', 'Curated from local makers'],
  ['Rakhi gift box', 'Gifts & Festive', 699, 'hamper', 'Hand made rakhis'], ['Personalised name plate', 'Gifts & Festive', 999, 'wallart', 'Hand painted to order'],
  ['Brass pooja thali', 'Gifts & Festive', 1499, 'brass', 'Hand hammered'], ['Scented candle gift set', 'Gifts & Festive', 1099, 'candle', 'Hand poured'],
  ['Channapatna wooden toys', 'Kids & Toys', 799, 'toys', 'Hand lacquered wood'], ['Crochet amigurumi', 'Kids & Toys', 649, 'plush', 'Hand crocheted'],
  ['Hand-painted story blocks', 'Kids & Toys', 899, 'toys', 'Hand painted'], ['Handmade paper journal', 'Stationery', 399, 'notebook', 'Handmade paper'],
  ['Hand-bound sketchbook', 'Stationery', 549, 'notebook', 'Hand bound'], ['Small-batch mango pickle', 'Food & Pantry', 299, 'pickle', 'Small batch'],
  ['Spiced chai blend', 'Food & Pantry', 349, 'tea', 'Small batch'], ['Wild forest honey', 'Food & Pantry', 499, 'honey', 'Small batch']]

const MAKER = { Clothing: 0, 'Sarees & Dupattas': 0, Jewellery: 3, 'Bags & Accessories': 3, Footwear: 3, 'Home decor': 2, 'Kitchen & Dining': 2, Furniture: 2,
  'Art & Wall decor': 1, 'Gifts & Festive': 1, 'Kids & Toys': 1, Stationery: 1, 'Beauty & Wellness': 4, 'Food & Pantry': 4 }
const NAMES = [['Maurya Looms', 'Madhubani Ghar', 'Mitti Mahal', 'Gehna Ghar', 'Sattu & Spice'], ['Awadh Karigar', 'Kala Kothi', 'Chikan Mitti', 'Zari Zevar', 'Nawabi Pantry'],
  ['Rangrez Looms', 'Kala Ghar', 'Mitti & Thread', 'Meena Studio', 'Pink City Pantry'], ['Peshwai Looms', 'Warli Wala', 'Kumbhar Kothi', 'Kolhapuri Kala', 'Sahyadri Pantry'],
  ['Maheshwar Looms', 'Mandu Kala', 'Malwa Mitti', 'Sarafa Studio', 'Poha & Pickle'], ['Tant Ghar', 'Pata Kala', 'Terracotta Tola', 'Kolkata Kantha', 'Mishti & Mustard']]
const STORY = ['Hand-block printing and handloom weaving, passed down three generations.', 'Folk art, gifting and toys from a family studio.',
  'Clay, cane and wood, made slowly in small batches.', 'Silver, brass and leather, shaped one piece at a time.', 'Small-batch pickles, oils and soaps made in a home kitchen.']
const SIZES = { Clothing: ['S', 'M', 'L', 'XL'], Footwear: ['6', '7', '8', '9', '10'] }
const COLS = ['Indigo', 'Rust', 'Ivory']

export const STORES = CITIES.flatMap((c, ci) => NAMES[ci].map((name, si) => ({
  id: `${ci}${si}`, city: c.name, name, story: STORY[si], featured: si < 2, verified: (ci + si) % 4 !== 3,
  rating: +(4.2 + ((ci + si) % 7) / 10).toFixed(1), reviews: 40 + ci * 13 + si * 7, // sample
  products: T.map(([n, cat, price, g, craft], k) => ({ n, cat, price, g, craft, k })).filter(t => MAKER[t.cat] === si).map(t => {
    const k = t.k, off = [0, 50, 100, 0, 150, 50][ci] + (k % 3) * 20
    return { id: `${ci}-${k}`, storeId: `${ci}${si}`, city: c.name, name: t.n, cat: t.cat, q: GROUPS[t.g], g: t.g, craft: t.craft,
      price: t.price + (t.price > 1000 ? off : 0), mrp: Math.round(t.price * (1.12 + (k % 6) * 0.07) / 10) * 10 + (t.price > 1000 ? off : 0),
      sizes: SIZES[t.cat] || [], colours: COLS, rating: +(4 + ((k + si) % 9) / 10).toFixed(1), sold: 20 + ((k * 37 + ci * 11) % 480), // sample
      days: /Small batch|Curated/.test(t.craft) ? 0 : 2 + (k % 6), sponsored: k % 23 === 3, isNew: k % 5 === 1,
      madeToOrder: k % 9 === 4 || /to order/.test(t.craft) }
  }) })))
export const REVIEWS = [{ n: 'Ananya', t: 'Stitching and print are exactly like the video. Arrived in two days.', r: 5 },
  { n: 'Rohit', t: 'Gifted this, got lots of compliments. Packaging was careful.', r: 4 }] // sample
export const PRODUCTS = STORES.flatMap(s => s.products)
export const disc = p => Math.max(0, Math.round((1 - p.price / p.mrp) * 100))
