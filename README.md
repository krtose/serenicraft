# SereniCraft Website

A premium brand website for SereniCraft - Health First kitchenware brand.

## Tech Stack

- **Next.js** - React framework with static export support
- **Tailwind CSS** - Utility-first CSS framework
- **JSX** - JavaScript XML for component structure

## Features

- ✅ Static site generation for Vercel deployment
- ✅ Responsive design optimized for all devices
- ✅ Premium, clean aesthetic suitable for high-end users
- ✅ SEO optimized with proper meta tags
- ✅ Fast loading with optimized assets

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Build and export static files
npm run export
```

This will generate static files in the `out/` directory ready for deployment.

## Deployment to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy with static export

Alternatively, you can deploy directly:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Project Structure

```
SereniCraft/
├── pages/
│   ├── _app.js          # App component with global styles
│   └── index.js         # Homepage component
├── styles/
│   └── globals.css      # Global styles with Tailwind
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## Brand Guidelines

- **Brand Name**: SereniCraft
- **Tagline**: Health First. Crafted for Peace of Mind.
- **Values**: Health, Safety, Premium Materials, Craftsmanship
- **Target Audience**: High-end consumers seeking healthy, non-toxic kitchenware

## License

All rights reserved © SereniCraft