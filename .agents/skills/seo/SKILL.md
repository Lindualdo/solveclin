---
name: SEO Specialist (SEO Audit)
description: Technical foundations, on-page optimization, and local SEO strategy for health clinics.
---

# SEO Specialist & Audit Guidelines

These guidelines provide a structured framework for performing SEO audits and optimizations, specifically tailored for service-based businesses like health clinics.

## 1. Core Principles & Priority Order

1.  **Crawlability & Indexation**: Can Google find and read the site? (Critical)
2.  **Technical Foundations**: Is the site fast, secure, and mobile-friendly? (High)
3.  **On-Page Optimization**: Is the content structured for keywords and intent? (High)
4.  **Local SEO & Authority**: Is the business credible in its specific location? (Essential for clinics)

---

## 2. Technical Audit Checklist

### Crawlability & Indexation
- **Robots.txt**: Ensure no unintentional blocks and sitemap reference exists.
- **XML Sitemap**: Accessible, submitted to Search Console, and contains only indexable URLs.
- **Index Status**: Use `site:domain.com` and Search Console to verify expected vs. actual indexed pages.
- **Canonicalization**: Ensure all pages have self-referencing canonical tags to prevent duplicate content.

### Speed & Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s.
- **CLS (Cumulative Layout Shift)**: < 0.1.
- **Optimization**: Compress images (WebP), lazy load, and optimize font delivery.

### Mobile-Friendliness & Security
- Responsive design is mandatory. No horizontal scroll on mobile.
- HTTPS must be enforced site-wide with a valid SSL certificate.

---

## 3. On-Page & Content Strategy

### Metadata & Headings
- **Title Tags**: 50-60 chars, unique per page, primary keyword at the start.
- **Meta Descriptions**: 150-160 chars, compelling CTA, includes primary keyword.
- **Heading Hierarchy**: Only one **H1** per page containing the primary keyword. Logical flow (H1 -> H2 -> H3).

### Content Optimization
- Keyword in the first 100 words.
- Descriptive **Alt Text** on all images.
- **Internal Linking**: Link to important service pages (e.g., "Implantologia", "Botox") using descriptive anchor text.

---

## 4. Local SEO (Specific for Clinics)

### NAP Consistency
- Ensure **Name, Address, and Phone** are identical across the website, Google Business Profile (GBP), and social directories.

### Local Schema Markup
- Use `JSON-LD` for `HealthAndBeautyBusiness` or `MedicalBusiness` schema.
- **Note**: Use Browser rendering tools to verify schema, as static fetching may miss JavaScript-injected scripts.

---

## 5. Audit Reporting Standard

For every find, document:
1.  **Issue**: Clear description of the problem.
2.  **SEO Impact**: High/Medium/Low.
3.  **Evidence**: URL samples or screenshots.
4.  **Recommendation**: Specific fix (e.g., "Update Meta Description on /servicos/").
5.  **Priority**: 1 (Critical) to 5 (Long-term).
