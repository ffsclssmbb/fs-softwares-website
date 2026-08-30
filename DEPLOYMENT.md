# FS Softwares Website - Build & Deployment Guide

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/ffsclssmbb/fs-softwares-website.git
cd fs-softwares-website

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Run development server
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── providers.tsx      # Client providers
│   └── [route]/page.tsx   # Route pages
├── pages/                  # Page components
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── PricingPage.tsx
│   ├── ProcessPage.tsx
│   ├── IndustriesPage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── components/             # React components
│   ├── layout/            # Header, Footer
│   ├── ui/                # UI primitives
│   └── sections/          # Page sections
├── hooks/                  # Custom React hooks
├── utils/                  # Utilities & constants
├── styles/                # Stylesheet modules
└── types/                 # TypeScript types
```

## Key Features

✅ **Next.js 14 with App Router** - Latest React framework
✅ **TypeScript** - Type-safe development
✅ **TailwindCSS** - Utility-first styling
✅ **Framer Motion** - Smooth animations
✅ **Three.js** - 3D graphics ready
✅ **Responsive Design** - Mobile-first approach
✅ **SEO Optimized** - Meta tags, structured data
✅ **Accessible** - WCAG 2.1 AA compliant
✅ **Performance** - Optimized for <3s load time

## Design System

### Colors
- **Primary Green**: `#10B981`
- **Secondary Navy**: `#1E293B`
- **Silver Accent**: `#E2E8F0`
- **Dark Background**: `#0F1117`

### Components
- `CTAButton` - Call-to-action buttons with variants
- `GlowCard` - Cards with glow effects
- `Badge` - Small labels and badges
- `SectionContainer` - Page section wrapper

### Animations
- Framer Motion for interactive animations
- CSS keyframes for continuous effects
- Stagger animations for content
- Hover and scroll interactions

## Building & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
netlify deploy --prod --dir=.next
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

```env
# Site Configuration
NEXT_PUBLIC_SITE_NAME=FS Softwares
NEXT_PUBLIC_SITE_URL=https://fssoftwares.ph

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXXXXX

# API
NEXT_PUBLIC_API_BASE_URL=https://api.fssoftwares.ph

# Hub Emails
NEXT_PUBLIC_NCR_EMAIL=ncr@fssoftwares.ph
NEXT_PUBLIC_CEBU_EMAIL=cebu@fssoftwares.ph
NEXT_PUBLIC_DAVAO_EMAIL=davao@fssoftwares.ph
NEXT_PUBLIC_GENERAL_EMAIL=hello@fssoftwares.ph
NEXT_PUBLIC_SUPPORT_EMAIL=support@fssoftwares.ph

# Feature Flags
NEXT_PUBLIC_ENABLE_LIVE_CHAT=true
NEXT_PUBLIC_ENABLE_BOOKING=true
NEXT_PUBLIC_ENABLE_MULTILANG=true
```

## Performance Optimization

- Image optimization with Next.js Image component
- Lazy loading for images and components
- Code splitting with dynamic imports
- CSS minification and purging
- Font optimization with next/font
- CDN integration ready

## SEO

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Sitemap generation
- robots.txt configuration
- Canonical URLs
- Mobile-friendly design

## Testing

```bash
# Run linter
npm run lint

# Type check
npm run type-check

# Build check
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request

## License

MIT License - See LICENSE file

## Support

- 📧 Email: hello@fssoftwares.ph
- 🔗 Website: https://fssoftwares.ph
- 📱 Phone: 1-800-FS-SOFT

---

**Built with ❤️ for Philippine businesses | Nationwide Coverage | Local Presence**
