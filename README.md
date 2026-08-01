# Pest Warriors — Calgary Pest Control Website

Premium lead-generation website for Pest Warriors, built with Next.js (App
Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Routes

| Route       | Purpose                                              |
| ----------- | ---------------------------------------------------- |
| `/`         | Homepage (hero, services, about, FAQ, offers, CTAs)  |
| `/services` | Detailed service pages for the five primary services |
| `/contact`  | Quote-request form + contact information             |
| `/privacy`  | Privacy policy placeholder                           |
| `/terms`    | Terms & conditions placeholder                       |

## Getting started

```bash
npm install
npm run dev      # local development at http://localhost:3000
npm run build    # production build
```

## Contact-form email setup (one required step before launch)

The quote form posts to `/api/contact`, which sends email via SMTP using
Nodemailer. Configure it:

1. Copy `.env.example` to `.env.local`.
2. Fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and
   optionally `SMTP_FROM` with credentials from any SMTP provider
   (Resend, Brevo, Mailgun, SendGrid, or the hosting provider's SMTP).
3. The recipient address is `contact.formRecipient` in
   `src/config/site.ts` (currently the client's email).

Until SMTP is configured, the form shows a clear "temporarily unavailable —
call or email us" message instead of silently failing. No email keys are ever
exposed to the browser.

## Creating a new city version

All location-specific data lives in `src/config/site.ts`:

1. Update the `location` object (city, province, service areas).
2. Update `hero`, `seo`, and `contact` copy for the new city.
3. Replace the two images in `public/images/` (or update paths in
   `siteConfig.images`).
4. Review `src/config/services.ts` — service copy is city-agnostic, but each
   city site should get some unique local copy to avoid duplicate content.

## Replacing the temporary logo

Set `business.logoSrc` in `src/config/site.ts` to the uploaded logo path
(e.g. `"/images/logo.svg"`). The header, footer, and intro wordmark switch
over automatically.

## Configurable business claims (client must confirm)

- **"200,000+ treatments completed"** — disabled by default; enable at
  `stats.treatmentsCompleted.enabled` in `src/config/site.ts`.
- **Warranty wording** — `guarantee` object in `src/config/site.ts`
  (responsible wording; toggle off to hide).
- **20% new-customer offer** — `offer` object in `src/config/site.ts`.

## Image sources

Both photos were taken from the client's existing website
(https://pestwarriors.ca/) as requested, optimized to WebP:

- `public/images/pest-warriors-calgary-hero.webp` — technician photo
- `public/images/pest-warriors-professional-service.webp` — heat-treatment equipment
