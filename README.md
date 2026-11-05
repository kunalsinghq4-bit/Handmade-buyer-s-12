# Handmade buyer PWA (pass C: full marketplace)
npm install && npm run dev

## What changed in pass C
- 100 products per city across 14 categories (clothing, sarees, jewellery, bags, footwear, home decor, kitchen, furniture, art, beauty, gifts, kids, stationery, pantry). Handmade is the trust layer on every card, product page and banner.
- New hero banner: 4 auto-rotating slides, Ken Burns photo, rotating maker stamp, swipe, block-print border.
- New Home: category circles, collections, today's deals with countdown, makers near you, category rows, maker spotlight, load-more grid.
- Search: category chips, made-to-order and new filters, discount and rating sort, price up to Rs. 15,000.
- Unsplash: one search per photo group (30 photos), cached 24h, fetched only when a card scrolls near the screen.

## Photos
Copy .env.example to .env and set VITE_UNSPLASH_KEY. Without it you get coloured block-print tiles (no photos).
For GitHub Pages add it as the repo secret VITE_UNSPLASH_KEY. It ends up public in the built site. Before a real launch, apply for Unsplash production access and add the download trigger and credits for each photo.

Mocked: everything. Sample stats are marked in src/data/mock.js. Fees and flags: src/config/pricing.js.
