# Shortly — Short Link Manager

A production-quality short link management application built with modern full-stack technologies.

Shortly allows authenticated users to create, manage, and track shortened URLs. Users can generate short links, customize slugs, view click statistics, and manage their links from a responsive dashboard.

## Live Demo

Deployed URL:

> Add your Vercel deployment URL here

---

## Features

### Authentication

* Email and password sign up
* Email and password login
* Secure logout functionality
* Protected dashboard routes
* Authentication powered by Neon Auth

---

### Short Link Management

Authenticated users can:

* Create shortened links
* Add an optional title
* Provide a custom slug
* Automatically generate a random 6-character slug when no custom slug is provided
* Copy generated short URLs
* Delete links with confirmation dialogs
* View all created links from the dashboard

Each slug is globally unique to prevent collisions.

---

### URL Validation

All link creation inputs are validated on the server.

Validation includes:

* Required destination URL
* Valid `http` / `https` URL format
* Optional title validation
* Optional custom slug validation
* Slug format restrictions:

  * Alphanumeric characters
  * Dashes allowed
  * No invalid symbols

Validation is handled using Zod schemas.

---

### Dashboard

The dashboard provides:

* Total links count
* Total clicks count
* Recent activity overview
* User's shortened links list
* Link management actions

Each link card displays:

* Short URL
* Original destination URL
* Title
* Click count
* Creation date
* Copy action
* External link action
* Delete action

The dashboard includes responsive layouts for desktop and mobile devices.

---

### Redirect System

Short links are available through:

```
/r/[slug]
```

When a user visits a short URL:

1. The slug is searched in the database
2. The click counter is incremented
3. The user is redirected to the original destination URL using HTTP `307` redirect

If the slug does not exist, a custom 404 page is displayed.

---

### Link Details

Each link has a dedicated details page:

```
/dashboard/links/[id]
```

The details page includes:

* Full destination URL
* Total click count
* Creation date
* Click history visualization

A 7-day clicks chart is implemented using a chart library.

---

## Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS v4
* shadcn/ui
* Lucide Icons
* Sonner Toast Notifications
* next-themes for dark mode support

---

### Backend

* Next.js App Router
* Server Components
* Server Actions
* Neon Auth
* Neon PostgreSQL
* Drizzle ORM

---

### Validation

* Zod
* Server-side input validation
* Type-safe validation schemas

---

## Project Architecture

The project follows a clean separation between UI, actions, authentication, and database logic.

Example structure:

```
src
├── actions
│   └── server actions for mutations
│
├── app
│   ├── dashboard
│   ├── login
│   ├── signup
│   └── r/[slug]
│
├── components
│   ├── auth
│   ├── dashboard
│   └── ui
│
├── lib
│   ├── auth
│   ├── db
│   ├── validations
│   └── utils
│
└── schemas
```

---

## Database

Database management is handled with:

* Neon PostgreSQL
* Drizzle ORM

Main entities:

### Links

Stores:

* URL slug
* Destination URL
* Optional title
* Click count
* Creation date
* Owner user ID

### Click Tracking

Stores click information used for analytics and charts.

---

## Local Development

### Requirements

* Node.js
* pnpm
* Neon PostgreSQL database

---

### Installation

Clone the repository:

```bash
git clone <repository-url>

cd shortly
```

Install dependencies:

```bash
pnpm install
```

---

## Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL=

NEXT_PUBLIC_AUTH_URL=

NEXT_PUBLIC_APP_URL=

NEON_AUTH_URL=

NEON_AUTH_COOKIE_SECRET=
```

Fill the values from your Neon project configuration.

---

## Database Migration

Generate migrations:

```bash
pnpm drizzle-kit generate
```

Run migrations:

```bash
pnpm drizzle-kit migrate
```

---

## Running the Project

Start development server:

```bash
pnpm dev
```

Application will be available at:

```
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
pnpm dev
```

Runs the local development server.

---

### Build

```bash
pnpm build
```

Creates an optimized production build.

---

### Lint

```bash
pnpm lint
```

Runs ESLint checks.

---

## AI Usage

### How I used AI tools

I used AI coding assistants throughout the development process to speed up implementation, debugging, and architectural decisions.

AI was mainly used for:

* Exploring Next.js App Router patterns
* Designing project structure
* Implementing authentication flows
* Debugging Neon Auth and session handling
* Creating reusable dashboard components
* Reviewing TypeScript errors
* Improving UI consistency
* Generating initial component structures

The final architecture, decisions, and integration choices were reviewed and adjusted manually.

One challenging part where AI assistance required additional verification was authentication integration. Neon Auth, cookies, server sessions, and Next.js server/client boundaries required testing against the actual project environment.

AI helped accelerate development, but every generated solution was validated, tested, and modified when necessary.

---

## Design Decisions

### Authentication

Neon Auth was selected as the authentication provider to avoid managing user credentials manually and to provide a production-ready authentication system.

---

### Server Actions

All application mutations use Server Actions instead of internal API routes.

This keeps the application aligned with the Next.js App Router architecture.

---

### Database Access

Database queries are separated from React components to keep UI components clean and maintainable.

---

### Responsive Design

The application was designed mobile-first with:

* Responsive dashboard layout
* Mobile navigation drawer
* Adaptive link cards
* Dark mode support

---

## Deployment

The application is deployed using Vercel.

Production URL:

> Add deployment URL here

---

## Evaluation Checklist

Implemented:

* ✅ Authentication
* ✅ Protected dashboard
* ✅ Create short links
* ✅ Custom slugs
* ✅ Automatic slug generation
* ✅ URL validation
* ✅ Dashboard management
* ✅ Copy short URL
* ✅ Delete confirmation
* ✅ Redirect endpoint
* ✅ Click tracking
* ✅ Link details page
* ✅ Responsive UI
* ✅ Dark mode
* ✅ Toast notifications
* ✅ Loading and error boundaries

---

## License

This project was created as an engineering assessment project.
