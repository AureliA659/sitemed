# Security Implementation Guide

## Overview
This document outlines all security measures implemented in the Medical Center website.

---

## 1. Rate Limiting

**File:** `middleware.ts`

- **Implementation:** In-memory store (100 requests per 60 seconds per IP)
- **Production Recommendation:** Use Redis instead
  ```typescript
  import { Ratelimit } from "@upstash/ratelimit";
  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.fixedWindow(100, "60 s"),
  });
  ```

**Status:** ✅ Implemented

---

## 2. Security Headers

**Implemented:**
- `X-Content-Type-Options: nosniff` - Prevent MIME type sniffing
- `X-Frame-Options: DENY` - Disable iframe embedding
- `X-XSS-Protection: 1; mode=block` - Legacy browser XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Control referrer info
- `Permissions-Policy` - Restrict sensitive APIs
- `Content-Security-Policy (CSP)` - Prevent XSS, injection attacks

**CSP Policy:**
```
default-src 'self'
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
img-src 'self' data: https: blob:
connect-src 'self' https://eqjbewaqqkrfeekjwlsa.supabase.co https://images.pexels.com
```

**Status:** ✅ Implemented in middleware

**Recommendation:** Review and tighten CSP in production (remove 'unsafe-inline')

---

## 3. Input Validation

**File:** `lib/validation.ts`

Using **Zod** for runtime validation:

### Contact Form
```typescript
name: string (2-100 chars, letters/spaces/hyphens)
email: valid email format
phone: optional, phone format only
subject: 5-200 chars
message: 10-5000 chars
consent: must accept privacy policy
```

### Chat Messages
```typescript
message: 1-1000 chars, trimmed
userId: optional UUID
```

**Additional Security:**
- SQL injection pattern detection
- XSS pattern detection
- Script tag filtering

**Status:** ✅ Implemented

---

## 4. API Security

### Endpoints Secured:
- `POST /api/contact` - Contact form submission
- `POST /api/messages` - Chat message submission
- `GET /api/messages` - Chat message history

### Implementation:
1. **Zod validation** - Validate all inputs
2. **Regex filtering** - Detect suspicious SQL/XSS patterns
3. **Client IP tracking** - For suspicious activity logging
4. **Rate limiting** - Applied by middleware
5. **Error messages** - Generic to prevent information leakage

**Status:** ✅ Implemented

---

## 5. Database Security (Supabase)

### RLS (Row Level Security)

**Tables:**
- `contact_messages` - Public INSERT, Authenticated READ
- `chat_messages` - Public INSERT, Authenticated READ
- `doctors` - Public READ only
- `services` - Public READ only
- `blog_posts` - Public READ (published only)
- `testimonials` - Public READ (approved only)
- `*` for authenticated - Full access (REFINED in next phase)

**Migration File:**
`supabase/migrations/20260315_add_communication_tables.sql`

**Status:** ✅ Implemented

---

## 6. Environment Variables

### Public Variables (Safe)
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### Private Variables (Never commit)
```
SMTP_PASSWORD
SMTP_USER
DATABASE_URL (if used)
API_KEYS
```

**Files:**
- `.env` - ✅ FIXED - Now contains only placeholders
- `.env.example` - Template for public vars
- `.env.local` - ⚠️ User creates locally (in .gitignore)
- `.gitignore` - ✅ Configured to ignore `.env*`

**Status:** ✅ Fixed

---

## 7. Middleware Security

**File:** `middleware.ts`

Runs on every request to:
1. Check rate limiting
2. Add security headers
3. Validate origin
4. Log suspicious activity

**Routes Protected:**
All routes except:
- `_next/static`
- `_next/image`
- `favicon.ico`
- `robots.txt`
- `sitemap.xml`

**Status:** ✅ Implemented

---

## 8. Best Practices Applied

### ✅ Done
- TypeScript strict mode
- Input validation (Zod)
- Rate limiting
- Security headers (CSP, X-Frame-Options, etc.)
- CORS headers
- SQL injection detection
- XSS pattern detection
- Environment variable protection
- RLS database policies
- Error handling (no stack traces leaked)

### ⏳ TODO (Next Phase - Admin Implementation)

**Authentication:**
- [ ] Supabase Admin Auth
- [ ] JWT token validation
- [ ] Session management
- [ ] CSRF tokens

**Advanced:**
- [ ] 2FA support
- [ ] OAuth providers (Google, etc.)
- [ ] Audit logging
- [ ] Encryption for sensitive data
- [ ] DDoS protection (Cloudflare/AWS Shield)

---

## 9. Deployment Checklist

### Before Deploying to Production:

```
Security:
☐ Review CSP policy (remove 'unsafe-inline' from script-src)
☐ Update ALLOWED_ORIGIN to production domain
☐ Enable HTTPS only (Strict-Transport-Security header)
☐ Configure Redis for rate limiting (instead of in-memory)
☐ Set up email service for contact forms
☐ Enable CORS properly (specify exact origins)

Database:
☐ Run migration: 20260315_add_communication_tables.sql
☐ Test RLS policies with public/authenticated users
☐ Set up backups
☐ Enable audit logging

Monitoring:
☐ Set up error tracking (Sentry)
☐ Monitor rate limit hits
☐ Alert on failed contact form submissions
☐ Review contact_messages table regularly
```

---

## 10. Testing Security

### Manual Tests:
```bash
# Test rate limiting
for i in {1..150}; do curl http://localhost:3000/api/contact; done

# Test CSP headers
curl -I http://localhost:3000

# Test input validation
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name": "test<script>alert(1)</script>", "email": "test@test.com"}'
```

### Automated Tests (TODO):
- Jest + Supertest for API endpoints
- OWASP ZAP scan
- Snyk dependency check

---

## 11. Security References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/going-to-production/security-headers)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [CSP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Zod Validation](https://zod.dev/)

---

## 12. Incident Response

If security issue discovered:

1. **Assess impact** - Is sensitive data exposed?
2. **Stop the bleeding** - Disable affected feature/rotate keys
3. **Investigate** - Check logs, test reproduction
4. **Patch** - Fix the vulnerability
5. **Verify** - Test fix thoroughly
6. **Deploy** - To production ASAP
7. **Monitor** - Watch for exploitation attempts
8. **Communicate** - Notify affected users if needed

---

**Last Updated:** March 15, 2026
**Implemented By:** Security Audit
**Status:** ✅ Core Security Measures Deployed
