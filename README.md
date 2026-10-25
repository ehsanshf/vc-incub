# FoundNexa

A responsive static Astro + TypeScript website. No database, forms, analytics, trackers, payments, or authentication. Assets and fonts are local. Nothing has been published.

## Develop and verify

Use Node.js 22.19+ (or a current supported LTS) and npm.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The production output is `dist/`. Preview and development default to `http://127.0.0.1:4321`. The lockfile pins dependencies.

## Edit content and business details

`src/config.ts` is the central source for the business name, email, production domain, program status, navigation, stages, services, measurement priorities, and FAQs. Editorial page copy is in `src/pages/index.astro`; privacy text is in `src/pages/privacy.astro`. The shared layout is `src/layouts/Layout.astro`, and visual styles are in `src/styles/global.css`.

The domain and email are intentionally empty. Contact buttons are disabled with visible explanations until `site.email` contains a real monitored address. Once configured, each action opens the visitor's email application with a distinct founder, development, or partnership subject; no email is sent automatically. Previewing these links does not send mail.

Set `site.domain` to the verified HTTPS production origin without a trailing slash. Canonical URLs, Open Graph absolute URLs, robots, and the two-page sitemap derive from that value at build time. Without a domain, pages have `noindex, nofollow`, robots disallows crawling, and the sitemap has no URLs. Rebuild after configuration changes. The social image is `public/social-card.png`, and the favicon is `public/favicon.svg`.

## Deployment and custom domain

This is host-independent static output. For Vercel, Netlify, Cloudflare Pages, or another static host, import the repository, choose Astro/static output, set build command `npm run build`, output directory `dist`, and a supported Node 22.19+ or 24 LTS runtime. Use `npm ci` for installation. No server adapter or runtime secrets are needed. Alternatively upload the contents of `dist/` to a static web host.

To connect your domain, add the domain in the chosen host's domain settings, then copy its required DNS records to your registrar. Wait for verification, enable the host's managed HTTPS certificate, and select the canonical hostname (redirect any alternate hostname to it). Use that exact HTTPS origin in `site.domain` and rebuild. Follow the selected host's displayed DNS values; do not guess records. Verify HTTPS, both pages, anchors, email subjects, `/robots.txt`, `/sitemap.xml`, favicon, and social previews after deployment. Do not publish until the configuration and privacy text below are complete.

## Required before public launch

- Supply the real monitored public contact email in `src/config.ts`.
- Supply the actual production HTTPS domain in `src/config.ts`.
- Choose and configure a static host, domain DNS, and HTTPS. No provider is currently selected by this project.
- Confirm the public program status and all program/services copy. No confirmed launch date, team, partnerships, fixed equity percentages, or historical results are claimed.
- Update the privacy page for the selected hosting and email providers and their actual processing/logging practices. Do not add an unverified retention or compliance promise.
- Test all three email paths in a configured mail application and confirm the destination inbox receives enquiries you choose to send.

The inaugural program status can remain as written; no launch date is required. Contact and production-domain values are deliberately unavailable rather than invented.

## Visual direction

The site uses deep navy, white, and restrained blue accents, with locally served Instrument Serif headlines and DM Sans body copy. The revised editorial hierarchy was informed by the public Sequoia Capital (https://sequoiacap.com/) and Index Ventures (https://www.indexventures.com/) websites. These are design references only; there is no affiliation. Theme tokens are at the top of `src/styles/global.css`. The favicon and sharing image follow the same navy palette.
