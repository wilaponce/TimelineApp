
# 3D Timeline App

[![CI](https://github.com/wilaponce/TimelineApp/actions/workflows/ci.yml/badge.svg)](https://github.com/wilaponce/TimelineApp/actions)
![License](https://img.shields.io/badge/license-MIT-green)
![Supabase](https://img.shields.io/badge/Supabase-SSR-success?logo=supabase)

A modern open-source **Next.js App Router** application using **Supabase (SSR)**
featuring a protected, scrollable 3D timeline of verified moments.

## Features
- Next.js 14 App Router
- Supabase authentication (SSR-safe)
- Protected routes
- 3D timeline UI with smooth scrolling & keyboard navigation
- Moment detail pages

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```
---

## 🤝 CONTRIBUTING

Thank you for your interest in contributing!

### Development Setup

1. Fork and clone the repository
2. Install dependencies with `npm install`
3. Create `.env.local` from `.env.example`
4. Run `npm run dev`

### Project Rules

- Use **Next.js App Router** only
- No `pages/` directory
- Protected UI must live under `app/(protected)/`
- API routes under `app/api/**`
- Use only `@supabase/ssr`, no deprecated helpers

### Pull Requests

- Create a feature branch
- Keep PRs focused
- Ensure the project builds before submitting
- Do not include secrets or credentials

---

## 🔐 SECURITY

### Supported Versions

Only the latest `main` branch is supported with security updates.

### Reporting Vulnerabilities

- **Do not open public issues** for security problems
- Report privately via GitHub Security Advisories or directly to the project maintainer

### Scope

Security issues include:
- Authentication or authorization flaws
- Session or cookie handling issues
- API data exposure
- Supabase misconfiguration or RLS bypass

---

## 📄 LICENSE

MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
