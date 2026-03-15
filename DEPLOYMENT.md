# Production Deployment Checklist

## Pre-Deployment Security Audit

### 1. Environment Variables
- [ ] Review all `NEXT_PUBLIC_*` variables (these are PUBLIC)
- [ ] Ensure no secrets in `.env.example`
- [ ] `.env` file is in `.gitignore`
- [ ] Production variables set in hosting platform (Netlify env vars)
- [ ] `ALLOWED_ORIGIN` updated to production domain

### 2. Security Headers
- [ ] CSP policy reviewed and tightened
  - [ ] Remove `'unsafe-inline'` from script-src
  - [ ] Remove `'unsafe-eval'`
  - [ ] Whitelist only necessary external origins
- [ ] HSTS header enabled (Strict-Transport-Security)
- [ ] Custom security headers verified

**Current CSP (REVIEW):**
```
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com
```

**Recommended Production CSP:**
```
script-src 'self' https://cdn.jsdelivr.net
```

### 3. Database Security
- [ ] All migrations applied successfully
- [ ] RLS policies tested with public/authenticated users
- [ ] Backup enabled on Supabase
- [ ] Audit logging enabled
- [ ] Connection pooling configured
- [ ] Database encryption at rest verified

### 4. API Security
- [ ] Rate limiting configured (Redis for production)
- [ ] CORS properly configured
  - [ ] Only allow production domain
  - [ ] Remove wildcard CORS
- [ ] Input validation tested
- [ ] Error messages reviewed (no stack traces leaked)

### 5. Authentication & Authorization
- [ ] Admin authentication implemented
- [ ] JWT tokens verified
- [ ] Session timeout configured
- [ ] CSRF protection enabled if applicable
- [ ] 2FA considered for admin accounts

### 6. Data Protection
- [ ] SSL/TLS enabled (HTTPS only)
- [ ] Sensitive data encrypted in database
- [ ] PII data handling documented
- [ ] GDPR compliance reviewed
- [ ] Data retention policy set

### 7. Monitoring & Logging
- [ ] Error tracking set up (Sentry, etc.)
- [ ] Application logging configured
- [ ] Database query logging enabled
- [ ] Rate limit hit monitoring
- [ ] Failed authentication attempts logged
- [ ] Alert system configured

### 8. Performance & Optimization
- [ ] Images optimized (not hotlinked from Pexels)
- [ ] Caching headers configured
- [ ] CDN enabled (Netlify Edge)
- [ ] Load testing completed
- [ ] Database indexes verified

### 9. Compliance & Legal
- [ ] Privacy policy published
- [ ] Terms of service reviewed
- [ ] Consent forms proper (contact form consent)
- [ ] Data processing agreement with Supabase
- [ ] CCPA/GDPR compliance verified

### 10. Testing
- [ ] Manual security testing completed
- [ ] Automated security scanning (OWASP ZAP)
- [ ] Dependency vulnerability check (npm audit, Snyk)
- [ ] Load testing completed
- [ ] Cross-browser testing passed
- [ ] Mobile testing passed

### 11. Documentation
- [ ] README updated with production info
- [ ] API documentation complete
- [ ] Deployment runbook created
- [ ] Incident response plan documented
- [ ] Security policy documented (SECURITY.md)

### 12. Hosting Platform
- [ ] Netlify environment variables set
- [ ] Build environment configured
- [ ] Deploy previews disabled for sensitive branches
- [ ] Site password removed (unless intentional)
- [ ] Custom domain verified (HTTPS certificate)
- [ ] Analytics configured

### 13. Backup & Recovery
- [ ] Database backup schedule verified
- [ ] Backup tested for restoration
- [ ] Disaster recovery plan documented
- [ ] Failover mechanism tested

### 14. Final Checks
- [ ] Code review completed
- [ ] No console.errors in production build
- [ ] All tests passing
- [ ] No warnings in build output
- [ ] Bundle size analyzed
- [ ] Performance metrics baseline established

---

## Deployment Steps

### 1. Create Production Branch
```bash
git checkout -b prod-release-v1.0.0
git push origin prod-release-v1.0.0
```

### 2. Deploy to Staging First
- Test all functionality
- Monitor for errors
- Verify security headers

### 3. Deploy to Production
```bash
# Via Netlify Dashboard or CLI
netlify deploy --prod
```

### 4. Post-Deployment Verification
- [ ] Website loads without errors
- [ ] All pages accessible
- [ ] API endpoints responding
- [ ] Database connected
- [ ] Security headers present
- [ ] SSL certificate valid
- [ ] Monitoring systems reporting

### 5. Monitoring First Week
- [ ] Check error logs daily
- [ ] Monitor API response times
- [ ] Review rate limit hits
- [ ] Check for failed requests
- [ ] Monitor database performance

---

## Rollback Plan

If issues arise:

```bash
# Rollback to previous deployment
netlify deploy --prod (select previous build)

# Or manually redeploy from specific commit
git checkout <stable-commit>
git checkout -b hotfix
# Make fixes
netlify deploy --prod
```

---

## Security Incident Response

If security issue discovered:

1. **Immediate Actions**
   - Disable affected feature
   - Rotate any exposed credentials
   - Collect evidence/logs
   - Assess user impact

2. **Containment**
   - Apply patch/hotfix
   - Test thoroughly
   - Deploy to production ASAP
   - Monitor for exploitation

3. **Communication**
   - Notify affected users (if applicable)
   - Publish security advisory
   - Update incident log

4. **Post-Incident**
   - Root cause analysis
   - Implement preventive measures
   - Update security documentation
   - Learn & improve

---

## Useful Commands

### Check Netlify Deployment
```bash
netlify status
netlify deploy:list
```

### View Production Logs
```bash
tail -f ~/.netlify/cli/debug.log
```

### Test Security Headers
```bash
curl -I https://yoursite.com
```

### Check SSL Certificate
```bash
curl -v https://yoursite.com 2>&1 | grep -A 5 "subject="
```

### Check HTTPS Configuration
```bash
https://www.ssllabs.com/ssltest/
```

---

## Emergency Contacts

- **Hosting Support:** Netlify Dashboard
- **Database Support:** Supabase Support Portal
- **Security Issues:** security@medicalexcellence.com

---

**Deployment Date:** _____________
**Deployed By:** _____________
**Approved By:** _____________
**Notes:** _____________

---

Last Updated: March 15, 2026
