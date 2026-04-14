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
