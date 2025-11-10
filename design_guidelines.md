# E-Commerce Platform Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from Shopify, Etsy, and modern DTC brands that balance visual appeal with conversion optimization. This e-commerce platform prioritizes product discovery and seamless purchasing flow.

## Typography System
- **Headings**: Inter or Plus Jakarta Sans (600-700 weight)
  - H1: 3rem (desktop), 2rem (mobile)
  - H2: 2.25rem (desktop), 1.75rem (mobile)
  - H3: 1.5rem (desktop), 1.25rem (mobile)
- **Body**: Inter Regular (400 weight), 1rem base size
- **Product Prices**: 700 weight, 1.25rem for emphasis
- **UI Elements**: 500 weight, 0.875rem for labels and buttons

## Layout System
**Spacing Primitives**: Use Tailwind units 2, 4, 6, 8, 12, 16, 20, 24
- Container max-width: `max-w-7xl`
- Section padding: `py-16 lg:py-24`
- Card padding: `p-6`
- Element gaps: `gap-6` for grids, `gap-4` for lists

## Component Library

### Navigation Header
- Sticky header with logo left, navigation center, cart/user icons right
- Search bar prominence in center (expandable on mobile)
- Category mega-menu on hover (desktop)
- Cart badge showing item count
- Mobile: Hamburger menu with slide-out drawer

### Hero Section
- Full-width lifestyle image (80vh) showcasing featured collection
- Overlay with primary CTA button (blurred background `backdrop-blur-md`)
- Headline + subtext overlay (max-w-2xl, white text with subtle shadow)
- Multiple hero images in carousel format (auto-rotate every 5s)

### Product Grid
- 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Product cards: Image (aspect-ratio-square), title, price, quick-add button
- Hover: Subtle scale transform, secondary product image reveal
- Grid/List view toggle in toolbar
- Lazy loading for performance

### Product Detail Page
- Two-column layout: Image gallery left (60%), details right (40%)
- Image gallery: Main image + 4-5 thumbnails, zoom on click
- Details section: Title, price, rating stars, size/variant selector, quantity picker, prominent "Add to Cart" button
- Accordion sections: Description, Shipping Info, Reviews
- "You May Also Like" carousel at bottom

### Shopping Cart
- Slide-out drawer from right (desktop), full page (mobile)
- Cart items: Thumbnail, title, price, quantity controls, remove button
- Sticky footer: Subtotal, "Proceed to Checkout" button
- Empty state: Friendly message + "Continue Shopping" link

### Category Filtering
- Left sidebar (desktop): Collapsible filter groups (Price, Size, Brand, Rating)
- Top horizontal filters (mobile): Drawer-based filter panel
- Active filters displayed as removable chips above products
- Result count and sort dropdown (Price, Popularity, New Arrivals)

### Checkout Summary Page
- Single column (max-w-3xl centered)
- Order items list with small thumbnails
- Breakdown: Subtotal, Shipping, Tax, Total (bold, larger)
- Promo code input field
- "Continue to Payment" CTA button

### Footer
- Four-column layout: Shop (categories), About, Customer Service, Newsletter signup
- Social media icons row
- Payment method icons (trust badges)
- Copyright and legal links

## Images
**Hero**: Lifestyle product photography featuring models using/wearing products in aspirational settings (home, outdoor, lifestyle contexts). 2-3 rotating hero images.

**Product Cards**: Clean white/neutral background shots, consistent lighting and framing across catalog.

**Product Detail**: Multiple angles, detail shots, lifestyle context images (4-6 images per product).

**Category Banners**: Full-width imagery representing each product category.

## Interaction Patterns
- Loading states: Skeleton screens for product grids
- Success feedback: Toast notifications for "Added to Cart"
- Form validation: Inline error messages
- Sticky "Add to Cart" bar appears on scroll (product detail page)
- Quick view modal: Click product card to see details without page navigation

## Responsive Breakpoints
- Mobile: < 768px (single column, bottom navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full layout)

**Critical**: Every page must feel premium and conversion-optimized. Prioritize product imagery, clear pricing, and friction-free path to purchase.