# Timeline App

https://github.com/wilaponce/TimelineApp/actions/workflows/ci.yml/badge.svg
https://img.shields.io/badge/license-MIT-green
https://img.shields.io/badge/Supabase-SSR-success?logo=supabase

A modern **Next.js App Router** application using **Supabase Auth (SSR)**, featuring a **protected 3D timeline** of verified moments with smooth scrolling, keyboard navigation, and detail views.

---

## ✨ Features

- ✅ **Next.js App Router (Next 14)**
- ✅ **Supabase Authentication (SSR-safe, non-deprecated)**
- ✅ **Protected routes** (`/timelines`, `/moments/:id`)
- ✅ **3D timeline UI**
  - Smooth inertial scrolling
    - Keyboard navigation (`W/S` or `↑/↓`)
      - Perspective depth & scaling
      - ✅ **Moment detail pages**
      - ✅ **Server-side session validation**
      - ✅ **Edge-safe cookie handling**
      - ✅ Clean, scalable folder structure

      ---

      ## 🧱 Tech Stack

      - **Framework:** Next.js 14 (App Router)
      - **Auth & Backend:** Supabase
      - **Supabase Integration:** `@supabase/ssr`
      - **Language:** TypeScript
      - **Rendering:** Server Components + Client Components
      - **Styling:** CSS-in-JS (inline styles for now)

      ---

      ## 📁 Project Structure

      ```txt
      timeline-app/
      ├── package.json
      ├── next.config.js
      ├── middleware.ts
      ├── .env.example
      │
      ├── lib/
      │   └── supabase/
      │       ├── browser.ts      # Browser Supabase client
      │       └── server.ts       # Server Supabase client (SSR-safe)
      │
      ├── app/
      │   ├── layout.tsx          # Root layout
      │   ├── page.tsx            # Redirect → /timelines
      │   ├── session-menu.tsx
      │   │
      │   ├── login/
      │   │   └── page.tsx
      │   ├── signup/
      │   │   └── page.tsx
      │   │
      │   ├── (protected)/
      │   │   ├── layout.tsx      # Auth guard
      │   │   ├── timelines/
      │   │   │   └── page.tsx    # 3D timeline
      │   │   └── moments/
      │   │       └── [id]/
      │   │           └── page.tsx
      │   │
      │   └── api/
      │       └── moments/
      │           ├── verified/
      │           │   └── route.ts
      │           └── [id]/
      │               └── route.ts
      └── public/