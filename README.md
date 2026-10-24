# 🖥️ Backend Systems & Cloud Architecture Portfolio

[![Next.js 14](https://img.shields.io/badge/Built%20With-Next.js%2014%20(App%20Router)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tests-Vitest%20%2F%20RTL-729B1B?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Security](https://img.shields.io/badge/Security-Hardened%20Headers-success?style=for-the-badge)](next.config.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A high-performance portfolio tailored specifically for a **Backend & Systems Engineer**. Designed with a retro-futuristic **Cyber-Terminal & Systems Architecture** theme, this web application highlights distributed systems design, interactive RESTful API consoles, terminal CLI navigation, and production-grade security patterns.

---

## 🌟 Key Architecture & Features

### 1. 📟 Interactive Terminal Command Line (CLI)
* Embedded interactive Unix-like shell with command parsing (`help`, `cat skills`, `ls projects`, `status`, `clear`, `contact`).
* Keyboard navigation history (Up/Down arrow memory) and custom cyber-terminal styling.

### 2. ⚡ Live API Console & Request Sandbox
* Built-in interactive REST API explorer simulating live endpoints:
  * `GET /api/v1/health` — Real-time server health and memory metrics.
  * `GET /api/v1/skills` — Categorized backend technology matrix.
  * `POST /api/v1/contact` — Validated contact message dispatch with rate-limit simulation.
* Real-time HTTP status badges (`200 OK`, `429 Too Many Requests`, `500 Internal Server Error`) and JSON syntax-highlighted response payloads.

### 3. 🌐 Distributed Systems Architecture Topology
* Interactive visual node diagrams mapping enterprise backend topologies:
  * Edge DNS & Cloudflare CDN layers
  * API Gateway with token bucket rate-limiting
  * Microservices & worker pools
  * Redis distributed caching & message brokers
  * PostgreSQL primary-replica database clusters

### 4. 🔒 Enterprise Security & Mailer Hardening
* **Nodemailer SMTP Relay**: Secure server-to-server email dispatch configured with SPF and DKIM authentication compliance.
* **HTML Entity Escaping**: Prevents email body HTML injection and XSS exploits.
* **In-Memory Rate Limiting**: Token-based sliding window rate-limiter guarding the `/api/contact` endpoint against bot flooding.
* **Hardened Security Headers**: Configured in [next.config.js](next.config.js) including `HSTS` (63072000s max-age), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: origin-when-cross-origin`.

### 5. 🚀 SEO & Structured Data Engine
* Automated dynamic [robots.ts](src/app/robots.ts) and [sitemap.ts](src/app/sitemap.ts).
* Comprehensive Schema.org JSON-LD structured data for Google Knowledge Graph integration.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict typing) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with Cyber-Terminal green/cyan tokens |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Email Relay** | [Nodemailer](https://nodemailer.com/) with SMTP authentication |
| **Form Validation** | [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/) |
| **Unit Testing** | [Vitest](https://vitest.dev/) & [@testing-library/react](https://testing-library.com/) |

---

## 📁 Project Structure

```text
portfolio/
├── public/                     # Static assets, diagrams, project screenshots
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/        # Secure contact form API route with rate-limiting
│   │   ├── layout.tsx          # Root layout with fonts, JSON-LD, metadata
│   │   ├── page.tsx            # Main cyber-terminal dashboard
│   │   ├── robots.ts           # Dynamic robots.txt route
│   │   └── sitemap.ts          # Dynamic sitemap.xml route
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Terminal prompt and architecture intro
│   │   │   ├── About.tsx       # System engineer biography and credentials
│   │   │   ├── Skills.tsx      # Categorized backend skills matrix
│   │   │   ├── Projects.tsx    # Systems, APIs, and microservices projects
│   │   │   ├── Terminal.tsx    # Interactive CLI terminal emulator
│   │   │   ├── ApiConsole.tsx  # Interactive REST API explorer
│   │   │   ├── Architecture.tsx# Microservice topology diagram
│   │   │   ├── Resume.tsx      # Experience timeline and downloadable CV
│   │   │   └── Contact.tsx     # Validated contact form
│   │   └── ui/                 # Cyber-themed UI primitives
│   └── lib/                    # Mailer relay, rate limiter, validation schemas
├── .env.example                # Template for environment variables
├── next.config.js              # Production security headers and image patterns
├── package.json                # Project dependencies and test scripts
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** v18.18 or higher (Node.js 20+ recommended)
* **npm** or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harsh-GitHup/portfolio.git
   cd portfolio/portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment template:
   ```bash
   cp .env.example .env.local
   ```
   Open `.env.local` and configure your SMTP credentials:
   ```env
   MAIL_USER=your-email@gmail.com
   MAIL_PASS=your-email-app-password
   MAIL_FROM=your-email@gmail.com
   MAIL_TO=destination-inbox@gmail.com
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🧪 Testing & Code Quality

Run the test suite using Vitest:
```bash
# Run all unit and integration tests
npm test

# Run tests in watch mode
npx vitest

# Run a specific test file
npx vitest run src/components/Contact.test.tsx

# Run linter
npm run lint
```

---

## 🏗️ Production Build & Vercel Deployment

1. **Build locally:**
   ```bash
   npm run build
   npm run start
   ```

2. **Deploy to Vercel:**
   * Import the repository on [Vercel](https://vercel.com/new) and select `portfolio/portfolio` as the root directory.
   * Add the SMTP environment variables (`MAIL_USER`, `MAIL_PASS`, `MAIL_FROM`, `MAIL_TO`) under **Settings > Environment Variables**.
   * Deploy! Next.js will prerender static pages and deploy the `/api/contact` route as a serverless edge function.

---

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE).
