# Camluk Website

The marketing website and online academy for **Camluk Technologies**, an IT services company based in Kensington, Cape Town, South Africa. The repo contains two independent React single-page applications:

- **`/` (root)** — the main company site: services overview, portfolio, contact, and an AI chat widget.
- **`/academy`** — Camluk Academy, a separate course platform with authentication, payments, quizzes, and certificates.

## Features

**Main site**
- Landing page with hero, about, stats, services, process, clients, testimonials, and contact sections
- Portfolio page and a dedicated AI Solutions page
- An AI-powered chat widget (`src/components/ui/Chatbot.jsx`) that talks to Claude through a PHP proxy (`chat-proxy.php`, deployed separately on the production host) to keep the API key off the client
- Floating WhatsApp contact button
- Contact form powered by EmailJS
- Course enrolment landing/entry page for the Academy

**Academy app**
- Firebase authentication (login/register) with protected routes
- Course catalogue, individual course pages, quizzes, and certificate generation (via `jspdf`/`html2canvas`)
- Course payments through PayFast (`src/utils/payfast.js`), with success/cancel redirect pages
- Progress tracking per course (`useProgress` hook)

## Tech stack

- **React 18** + **Vite 6** (both apps)
- **React Router v6** for client-side routing
- **Tailwind CSS** with `tailwindcss-animate`, plus Radix UI primitives and shadcn-style components (`components.json`) in the main app
- **Framer Motion** for animations
- **TanStack Query**, **React Hook Form** + **Zod** for data/forms
- **Firebase** (Academy auth/data)
- **PayFast** (Academy payments), **EmailJS** (contact form / enrolment emails)
- **ESLint** + **TypeScript-checked JS** (`tsc` via `jsconfig.json`, no full TS migration)
- Deployed to Afrihost via FTP on every push to `main` (`.github/workflows/deploy.yml`)

## Project structure

```
.
├── src/                    # Main site (Camluk Technologies)
│   ├── components/
│   │   ├── landing/        # Home page sections (Hero, About, Services, etc.)
│   │   └── ui/             # Shared UI (Button, Chatbot, FloatingWhatsApp, Toaster)
│   ├── pages/               # Route-level pages (Home, Portfolio, AI Solutions, Academy entry...)
│   ├── lib/                  # Auth context, query client, utils
│   └── email-templates/     # HTML email template(s)
├── academy/                # Camluk Academy (separate Vite app, own package.json)
│   └── src/
│       ├── components/       # Navbar, CourseCard, PaymentModal, ProtectedRoute...
│       ├── pages/            # Landing, Login, Register, Dashboard, CoursePage, Quiz, Certificate, Payment...
│       ├── contexts/          # AuthContext (Firebase)
│       ├── hooks/              # useProgress
│       └── utils/               # payfast.js
└── .github/workflows/deploy.yml  # FTP deploy to Afrihost on push to main
```

## Getting started

Requires Node.js and npm. The two apps are independent — install and run each separately.

### Main site

```bash
npm install
npm run dev        # start dev server (Vite)
npm run build       # production build -> dist/
npm run preview      # preview the production build
npm run lint          # ESLint
npm run typecheck      # tsc type-checking over jsconfig.json
```

### Academy

```bash
cd academy
npm install
npm run dev
npm run build
npm run preview
```

### Environment variables

The main site expects EmailJS credentials at build time (used in CI, see `.github/workflows/deploy.yml`):

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
VITE_EMAILJS_ENROL_TEMPLATE_ID
```

The Academy app expects Firebase config and PayFast credentials (referenced in `academy/src/firebase.js` and `academy/src/utils/payfast.js`), e.g.:

```
VITE_PAYFAST_SANDBOX
VITE_PAYFAST_MERCHANT_ID
VITE_PAYFAST_MERCHANT_KEY
```

Put these in a local `.env` file (already git-ignored) for development.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the main site and deploys the `dist/` folder to the production server over FTP (Afrihost). The `chat-proxy.php` file used by the AI chatbot is excluded from the automated sync and lives on the server independently.
