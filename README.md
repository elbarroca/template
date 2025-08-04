<a href="https://demo-nextjs-with-supabase.vercel.app/">
  <img alt="Next.js and Supabase Starter Kit - the fastest way to build apps with Next.js and Supabase" src="https://demo-nextjs-with-supabase.vercel.app/opengraph-image.png">
  <h1 align="center">Next.js and Supabase Starter Kit</h1>
</a>

<p align="center">
 The fastest way to build apps with Next.js and Supabase
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#deploy-to-vercel"><strong>Deploy to Vercel</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
  <a href="#more-supabase-examples"><strong>More Examples</strong></a>
</p>
<br/>

## Features

- Works across the entire [Next.js](https://nextjs.org) stack
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
  - It just works!
- supabase-ssr. A package to configure Supabase Auth to use cookies
- Password-based authentication block installed via the [Supabase UI Library](https://supabase.com/ui/docs/nextjs/password-based-auth)
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Components with [shadcn/ui](https://ui.shadcn.com/)
- Optional deployment with [Supabase Vercel Integration and Vercel deploy](#deploy-your-own)
  - Environment variables automatically assigned to Vercel project

## Demo

You can view a fully working demo at [demo-nextjs-with-supabase.vercel.app](https://demo-nextjs-with-supabase.vercel.app/).

## Deploy to Vercel

Vercel deployment will guide you through creating a Supabase account and project.

After installation of the Supabase integration, all relevant environment variables will be assigned to the project so the deployment is fully functioning.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This+starter+configures+Supabase+Auth+to+use+cookies%2C+making+the+user%27s+session+available+throughout+the+entire+Next.js+app+-+Client+Components%2C+Server+Components%2C+Route+Handlers%2C+Server+Actions+and+Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png)

The above will also clone the Starter kit to your GitHub, you can clone that locally and develop locally.

If you wish to just develop locally and not deploy to Vercel, [follow the steps below](#clone-and-run-locally).

## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Create a Next.js app using the Supabase Starter template npx command

   ```bash
   npx create-next-app --example with-supabase with-supabase-app
   ```

   ```bash
   yarn create next-app --example with-supabase with-supabase-app
   ```

   ```bash
   pnpm create next-app --example with-supabase with-supabase-app
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd with-supabase-app
   ```

4. Rename `.env.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://supabase.com/dashboard/project/_?showConnect=true)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

6. This template comes with the default shadcn/ui style initialized. If you instead want other ui.shadcn styles, delete `components.json` and [re-install shadcn/ui](https://ui.shadcn.com/docs/installation/next)

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Feedback and issues

Please file feedback and issues over on the [Supabase GitHub org](https://github.com/supabase/supabase/issues/new/choose).

## More Supabase examples

- [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth and the Next.js 13 App Router (free course)](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth and the Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)

# 📈 MVP SaaS Template — Free Self‑Hosted Metrics, Performance, SEO

A clean, minimal setup using all‑free, open‑source tools:

## 🎯 Objectives

- Track real user actions: page views, sign‑ups, log‑ins, key conversions.  
- Measure speed (Core Web Vitals) and monitor performance regressions.  
- Structured SEO metadata for indexing & sharing than can scale.

## 🧰 Tools You’ll Self‑Host

- **Umami Analytics** (MIT license) via Docker Compose – unlimited usage, privacy‑focused, lightweight JS.  
- **web‑vitals** to capture LCP, FID, CLS, INP.  
- **Lighthouse** (or PageSpeed Insights) for speed audits.  
- **next‑seo** (or `react‑helmet`) for metadata management.  
- **(Optional) GTM snippet** to handle all other scripts.

---

## 🚀 Setup Instructions

### 1. Self‑Host Umami

```bash
mkdir umami && cd umami
# Copy this docker-compose.yml:
cat > docker-compose.yml <<'EOF'
services:
  umami:
    image: ghcr.io/umami-software/umami:postgresql-latest
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://umami:umami@umami-db:5432/umami
      DATABASE_TYPE: postgresql
      APP_SECRET: your_generated_secret # <<< CHANGE THIS
  umami-db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: umami
      POSTGRES_USER: umami
      POSTGRES_PASSWORD: strong-password # <<< CHANGE THIS TO A STRONG PASSWORD
    volumes:
      - ./umami-data:/var/lib/postgresql/data
EOF
docker-compose up -d
Open http://localhost:3000, log in as admin / umami, change password, add your domain.
```

### 2. Add Tracking JS to frontend

In your `app/layout.tsx`:

```html
<script defer data-website-id="YOUR_WEBSITE_ID" src="https://your-domain.com/umami.js"></script>
```
Remember to replace `"YOUR_WEBSITE_ID"` with the actual website ID you get from your Umami dashboard and `"https://your-domain.com"` with the URL where you've self-hosted Umami.

### 3. Track Custom Events

Inside your front-end auth hooks (e.g., `components/auth/sign-up-form.tsx`, `components/auth/login-form.tsx`):

```javascript
if (typeof window !== 'undefined' && window.umami) {
  window.umami.trackEvent('sign_up_completed'); // or 'login_success', etc.
}
```

### 4. Capture Web Vitals & Forward

The logic for capturing Core Web Vitals and forwarding them to Umami is encapsulated in `components/umami-tracker.tsx` and `lib/web-vitals.ts`. Ensure `components/umami-tracker.tsx` is imported and used in `app/layout.tsx`.

### 5. Speed Audits via Lighthouse

```bash
npm install -g lighthouse
lighthouse https://your-app.com --output html --output-path report.html
```
Add this to your CI pipeline for regression checks.

### 6. SEO Meta Tags

Install `next-seo`:

```bash
npm install next-seo
```

Configure `DefaultSeo` in `app/layout.tsx`:

```tsx
import { DefaultSeo } from 'next-seo';

// ... inside your RootLayout component
<DefaultSeo
  title="My SaaS MVP"
  description="Clean SaaS starter with free analytics & performance"
  openGraph={{
    type: 'website',
    locale: 'en_US',
    url: 'https://your-app.com', // <<< REPLACE WITH YOUR APP URL
    site_name: 'My SaaS MVP',
  }}
/>
```

### 7. Optional: Google Tag Manager (GTM)

Place the GTM snippet in `app/layout.tsx` within the `<head>` and immediately after the `<body>` tag, using the `next/script` component:

```tsx
import Script from 'next/script';

// ... inside your RootLayout component, within the <head>
<Script id="gtm-script" strategy="afterInteractive">
  {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');`} {/* <<< REPLACE WITH YOUR GTM ID */}
</Script>

// ... inside your RootLayout component, immediately after the <body> tag
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" {/* <<< REPLACE WITH YOUR GTM ID */}
    height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
</noscript>
```
**Important:** If you use GTM for Umami, you would configure Umami as a custom HTML tag within GTM, rather than directly placing the Umami script in your `app/layout.tsx`.

---

## ✅ What You’ll Get
Full control and ownership of your tracking data—hosted on your server.

Event-level insight on user flows (sign‑ups, log‑ins, conversions, page visits).

Core Web Vitals metrics to monitor user-perceived performance.

SEO-ready meta tags and share previews.

No recurring cost ever—just your server and bandwidth.

⚙️ Optional Enhancements
Funnels & Cohorts: Umami has basic funnels. For advanced segmentation, pair with BI tools (e.g. Metabase‑based) or export CSV.

Ackee: even lighter than Umami if you only need basic events/pageviews.

Matomo: full analytics feature set, though heavier to maintain.

Start with Umami—it’s simple, free forever, and more than enough for MVP tracking needs.
