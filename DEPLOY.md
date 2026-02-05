# Deploy: afterai-website (marketing)

## Vercel

1. **Connect repo:** [Vercel Dashboard](https://vercel.com) → Add New → Project → Import `useafterai/afterai-website`.
2. **Framework:** Next.js (auto-detected). Build: `npm run build`. Output: default.
3. **Environment variables** (Settings → Environment Variables):

   | Variable | Required | Notes |
   |----------|----------|--------|
   | `NEXT_PUBLIC_API_BASE_URL` | Yes (prod) | e.g. `https://api.useafter.ai` – for signup/validate |
   | `RESEND_API_KEY` | Yes (prod) | For /api/contact. Get at [resend.com/api-keys](https://resend.com/api-keys) |
   | `CONTACT_TO_EMAIL` | Optional | Default recipient, e.g. `hello@useafter.ai` |
   | `CONTACT_FROM_EMAIL` | Optional | From address after Resend domain verified |

4. **Domain:** Assign `useafter.ai` (and optionally `www.useafter.ai`) in Project Settings → Domains.

## Cloudflare Pages

1. Connect GitHub repo `useafterai/afterai-website`.
2. Framework preset: **Next.js**. Build command: `npm run build`. Output: default.
3. Set the same environment variables as above in Cloudflare Pages → Settings → Environment variables.
