# SaiKumar Labs — Website

Premium website for SaiKumar Labs — a lead systems and business systems company helping service businesses get more enquiries, better follow-up, and fewer missed leads.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then fill in your values:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (no +, no spaces) | `919876543210` |
| `NEXT_PUBLIC_SITE_URL` | Your production URL | `https://saikumarlabs.com` |

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Add environment variables in Vercel dashboard
4. Deploy

That's it. Vercel auto-detects Next.js and handles everything.

## Where to Update Things

### Contact Details & Social Links
Edit `src/lib/config.ts` — all contact info, WhatsApp number, email, phone, and social links are in one file.

### Google Analytics
Set `NEXT_PUBLIC_GA4_ID` in your `.env.local` file or Vercel environment variables.

### WhatsApp Number
Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in your `.env.local` file, or update the fallback in `src/lib/config.ts`.

### Content
- **Home page**: `src/app/page.tsx`
- **Services page**: `src/app/services/ServicesContent.tsx`
- **Work/Portfolio page**: `src/app/work/WorkContent.tsx`
- **About page**: `src/app/about/AboutContent.tsx`
- **Contact page**: `src/app/contact/ContactContent.tsx`

### SEO Metadata
- **Global metadata**: `src/app/layout.tsx`
- **Per-page metadata**: Each page's `page.tsx` file exports its own metadata

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO, JSON-LD
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design system, brand colors
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   ├── services/           # Services page
│   ├── work/               # Portfolio page
│   ├── about/              # About page
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Header, Footer, WhatsApp button
│   ├── ui/                 # Reusable UI components
│   └── analytics/          # GA4, scroll tracking
└── lib/
    ├── config.ts           # Central configuration
    └── analytics.ts        # Event tracking helpers
```

## License

© SaiKumar Labs. All rights reserved.
