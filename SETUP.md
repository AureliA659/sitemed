# Setup Guide - Medical Center Website

## Development Setup

### 1. Clone Repository
```bash
git clone <repo-url>
cd project
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Environment Configuration

#### Create Local Environment File
```bash
cp .env.local.example .env.local
```

#### Edit `.env.local`
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
ALLOWED_ORIGIN=http://localhost:3000
```

**Get these values from:**
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Settings → API
4. Copy "Project URL" and "anon public" key

### 4. Database Setup

#### Run Migrations
```bash
# Using Supabase CLI
supabase migration up

# OR manually in Supabase dashboard
# Go to SQL Editor and run:
# - 20260210181131_create_medical_center_schema.sql
# - 20260315_add_communication_tables.sql
```

### 5. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

### 6. TypeScript Type Checking
```bash
npm run typecheck
```

### 7. Linting
```bash
npm run lint
```

---

## Important Files

- `.env.local` - ⚠️ NEVER COMMIT (git ignored)
- `.env.example` - Public variables template
- `middleware.ts` - Rate limiting & security headers
- `lib/validation.ts` - Input validation schemas
- `app/api/contact/route.ts` - Contact form endpoint
- `app/api/messages/route.ts` - Chat endpoint
- `SECURITY.md` - Security documentation

---

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API endpoints
│   │   ├── contact/       # Contact form
│   │   └── messages/      # Chat messages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── blog/, services/, team/, contact/
│   └── globals.css        # Global styles
│
├── components/            # React components
│   ├── ui/               # Radix UI wrapped components
│   └── (sections)        # Page sections
│
├── lib/
│   ├── supabase.ts       # Supabase client
│   ├── utils.ts          # Utility functions
│   └── validation.ts     # Zod schemas
│
├── middleware.ts         # Security middleware
├── SECURITY.md          # Security guide
└── supabase/            # Database migrations
```

---

## Security Features

✅ **Implemented:**
- Rate limiting (100 req/min per IP)
- Input validation (Zod)
- Security headers (CSP, X-Frame-Options, etc.)
- SQL injection detection
- XSS pattern detection
- RLS database policies
- Environment variable protection

⏳ **Next Phase:**
- Admin authentication
- CSRF tokens
- 2FA support

See `SECURITY.md` for details.

---

## Common Tasks

### Add a Service
1. Go to Supabase dashboard
2. Insert row in `services` table
3. Data auto-loads on homepage

### Add a Blog Post
1. Insert in `blog_posts` table
2. Set `published = true`
3. Visit `/blog` to see it

### Approve Testimonial
1. Check `testimonials` table
2. Set `approved = true`
3. Shows on homepage

### Test Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Test",
    "message": "This is a test message.",
    "consent": true
  }'
```

### Test Chat API
```bash
curl -X POST http://localhost:3000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'
```

---

## Deployment

### Netlify
1. Connect GitHub repo
2. Build command: `npx next build`
3. Publish directory: `.next`
4. Deploy with environment variables set

### Production Checklist
- [ ] Use production Supabase project
- [ ] Set `ALLOWED_ORIGIN` to production domain
- [ ] Enable HTTPS
- [ ] Set up Redis for rate limiting
- [ ] Configure email service
- [ ] Run security audit
- [ ] Enable monitoring (Sentry, etc.)

See `SECURITY.md` for complete production checklist.

---

## Troubleshooting

### "Supabase connection error"
- Check `NEXT_PUBLIC_SUPABASE_URL` is correct
- Check `NEXT_PUBLIC_SUPABASE_ANON_KEY` is valid
- Verify Supabase project is active

### "Rate limiting blocking requests"
- Reset after 60 seconds
- Implement Redis in production

### "API returning 400 Bad Request"
- Check request body matches Zod schema
- See validation errors in console

### "TypeScript errors"
- Run `npm run typecheck`
- Check type in `lib/supabase.ts`

---

## Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Follow TypeScript strict mode
3. Run: `npm run lint && npm run typecheck`
4. Test security endpoints
5. Commit: `git commit -am "feat: describe your change"`
6. Push: `git push origin feature/your-feature`
7. Create pull request

---

## Support

For security issues: **DO NOT** open a public issue.
Contact: security@medicalexcellence.com

---

**Last Updated:** March 15, 2026
