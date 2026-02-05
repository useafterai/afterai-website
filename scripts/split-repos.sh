#!/usr/bin/env bash
#
# Split afterai-web monorepo into two directory trees:
#   - afterai-app (PRIVATE): app, login, dashboard, API routes (session, aces), middleware, lib
#   - afterai-website (PUBLIC): marketing pages, contact API only
#
# Run from repo root: ./scripts/split-repos.sh
# Output: ../afterai-app and ../afterai-website (sibling dirs to afterai-web)
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
PARENT="$(dirname "$REPO_ROOT")"
APP_DIR="${SPLIT_APP_DIR:-$PARENT/afterai-app}"
WEB_DIR="${SPLIT_WEB_DIR:-$PARENT/afterai-website}"

echo "Source: $REPO_ROOT"
echo "App (private) → $APP_DIR"
echo "Website (public) → $WEB_DIR"
echo ""

# ---- Helpers ----
copy_tree() {
  local dest="$1"
  mkdir -p "$dest"
  rsync -a --exclude='.git' --exclude='node_modules' --exclude='.next' --exclude='out' \
    "$REPO_ROOT/" "$dest/"
}

# ---- 1. App repo (private) ----
echo "Building app repo..."
copy_tree "$APP_DIR"
cd "$APP_DIR"

# Remove marketing-only app routes (keep login, app/*, console, api/session, api/aces)
rm -rf "app/cloud"
rm -rf "app/console-coming-soon"
rm -rf "app/contact"
rm -rf "app/faq"
rm -rf "app/pricing"
rm -rf "app/privacy"
rm -rf "app/security"
rm -rf "app/signup"
rm -rf "app/terms"
rm -rf "app/verify"
rm -rf "app/api/contact"

# Replace root page with redirect to login (app repo has no marketing landing)
cat > "app/page.tsx" << 'PAGETSX'
import { redirect } from "next/navigation";

export default function AppRootPage() {
  redirect("/login");
}
PAGETSX

# Remove marketing-only components (keep app + login components)
rm -f "components/PricingSection.tsx"
rm -f "components/DecisionCarousel.tsx"
rm -f "components/ConsoleComingSoon.tsx"

# App .env.example: keep only app vars (strip contact/resend comments optional; full template is ok)
# Leave next.config.js as-is (standalone, redirects)

echo "  App: removed marketing pages and contact API"

# ---- 2. Website repo (public) ----
echo "Building website repo..."
copy_tree "$WEB_DIR"
cd "$WEB_DIR"

# Remove app-only routes and API
rm -rf "app/login"
rm -rf "app/app"
rm -rf "app/console"
rm -rf "app/api/session"
rm -rf "app/api/aces"

# Remove app-only components and lib
rm -f "components/AppShell.tsx"
rm -f "components/SecretsPane.tsx"
rm -f "components/ManualAceFormModal.tsx"
rm -f "components/ConsoleApp.tsx"
rm -f "components/AppHomeContent.tsx"
rm -rf "lib"
rm -f "middleware.ts"

# Remove Docker / GHCR (website doesn't need them)
rm -f "Dockerfile"
rm -f ".dockerignore"
rm -rf ".github"

# Marketing next.config.js: no standalone (Vercel runs pages + /api/contact as serverless)
cat > next.config.js << 'NEXTCONFIG'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
}

module.exports = nextConfig
NEXTCONFIG

# Marketing .env.example: only public + contact vars
cat > .env.example << 'ENVEXAMPLE'
# Next.js Environment Variables (marketing site)

# API base URL for signup/validate (browser). Default: https://api.useafter.ai
NEXT_PUBLIC_API_BASE_URL=https://api.useafter.ai

# Contact form (Enterprise "Talk to us") – sends via Resend.
# REQUIRED for /api/contact in production: add RESEND_API_KEY in Vercel → Settings → Environment Variables.
RESEND_API_KEY=
# CONTACT_TO_EMAIL=hello@useafter.ai
# CONTACT_FROM_EMAIL=AfterAI Contact <contact@useafter.ai>
ENVEXAMPLE

# Point "Sign in" / "/login" links to app subdomain
APP_LOGIN_URL="https://app.useafter.ai/login"
for f in app/page.tsx app/signup/page.tsx app/signup/validate/page.tsx app/verify/page.tsx; do
  if [[ -f "$f" ]]; then
    sed -i.bak "s|href=\"/login\"|href=\"$APP_LOGIN_URL\"|g" "$f" && rm -f "${f}.bak"
  fi
done
# ConsoleComingSoon may have logout; leave as-is (no /api/session on website – user can remove button in website repo)

echo "  Website: removed app routes, middleware, lib; Sign in → $APP_LOGIN_URL"

# ---- Summary ----
echo ""
echo "Done. Next steps:"
echo "  1. cd $APP_DIR && git init && git add . && git commit -m 'chore: extract app from afterai-web'"
echo "  2. cd $WEB_DIR && git init && git add . && git commit -m 'chore: extract marketing from afterai-web'"
echo "  3. In website repo: if ConsoleComingSoon has Sign out, remove or point to $APP_LOGIN_URL (no session on marketing)."
echo "  4. Add remotes and push to your new repos."
echo ""
echo "Override output dirs: SPLIT_APP_DIR=/path/to/app SPLIT_WEB_DIR=/path/to/web ./scripts/split-repos.sh"
