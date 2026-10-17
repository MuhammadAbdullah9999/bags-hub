# Bags Hub

Responsive quotation-led website built with React, TypeScript strict mode, Next App Router conventions and the Sites Vinext runtime. Uses Tailwind and custom responsive CSS, Lucide icons, restrained CSS motion with reduced-motion support, Zod server validation and AI-generated WebP imagery.

## Development

Node 22.13+ required. Run `npm install`, then `npm run dev`. Run `npx tsc --noEmit` for type checks. Run `npm run build` for a Sites build. Hosting identity is retained in `.openai/hosting.json`.

For Vercel, use the same app/components/data/public source with standard Next.js scripts (`next dev`, `next build`, `next start`), removing the Sites-specific runtime/build tooling. This alternative deployment has not been verified.

## Content

- Edit `data/catalog.ts` for product names, descriptions, categories, imagery, phone and WhatsApp details.
- Product specifications are intentionally unconfirmed. All 8 product entries are illustrative.
- `public/images/` contains the generated product assets; `IMAGE-PROMPTS.md` documents prompts and provenance.
- The phone numbers were transcribed from the supplied brand screenshots. Confirm ownership before public launch.
- Add the real factory address, email, opening hours, approved technical specs and actual factory photographs when supplied. No fake factory photos or certifications are used.
- Privacy and terms pages are clearly marked drafts pending business review.

## Real inquiry delivery

`POST /api/inquiries` validates body size, contact fields, consent, a honeypot and quote quantity. It enforces same-origin browser requests and a best-effort 60-second per-email cooldown within the worker instance. A distributed rate-limit service/CAPTCHA should be added for a public high-traffic launch.

Configure these **server-only secrets** in Sites environment settings, then redeploy:

- `INQUIRY_WEBHOOK_URL`: HTTPS endpoint that durably records or delivers inquiries.
- `INQUIRY_WEBHOOK_TOKEN`: bearer token used to authenticate the request.

The endpoint receives JSON with customer details and selected specifications. It must return HTTP 2xx only after accepting the inquiry reliably. There is no local database, fake inbox, or simulated email delivery. Without configuration, the API responds 503 and the form explains that nothing was sent. WhatsApp and phone links remain available. No file uploads or payments are enabled. Quotation specifications can be downloaded locally at review.

To add email delivery, implement your provider in the webhook (using its server-side API key) or replace the server handler with that provider. Keep secrets out of client code. Test delivery and retention before public launch.

## Optional analytics

No analytics are enabled. Add your GA4 ID through an explicit consent-aware integration if desired. Record a quote conversion only after `/api/inquiries` responds successfully. Verify the final domain in Search Console using its verification record; submit `/sitemap.xml` after public launch. Update metadataBase, sitemap and robots URLs if the domain changes.

## Validation

Run the TypeScript check and production build. Smoke-test every route, catalog filtering/search/reset, mobile navigation, gallery, FAQ, and all four quotation steps. Invalid requests must return 400, unavailable delivery must return 503, and no success should display until the configured endpoint accepts a valid inquiry.
