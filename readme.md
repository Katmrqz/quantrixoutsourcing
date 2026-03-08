# QUANTRIX OUTSOURCING — WEBSITE SYSTEM DOCUMENTATION

## 1. WEBSITE STRATEGY SUMMARY

### What the Website Must Achieve
- Establish Quantrix as a credible, professional outsourcing agency
- Clearly explain every service and its value proposition
- Guide visitors through a logical journey toward submitting an inquiry
- Build trust through structure, professional copy, and social proof

### Ideal Visitor Journey
1. **Discovery** — Visitor lands on Homepage from search, social, or referral
2. **Education** — Hero section communicates core value proposition immediately
3. **Trust** — Stats, process, testimonials, and professional design build confidence
4. **Exploration** — Visitor explores Services page or individual service pages
5. **Conviction** — Why Choose section and testimonials confirm the decision
6. **Action** — Visitor submits inquiry via Airtable form
7. **Conversion** — Quantrix team responds within 24 hours → discovery call booked

---

## 2. COMPLETE WEBSITE SITEMAP

```
quantrixoutsourcing.com/
├── index.html                          (Homepage)
├── about.html                          (About Us)
├── services.html                       (Services Overview)
│   ├── service-virtual-assistant.html
│   ├── service-admin-support.html
│   ├── service-social-media.html
│   ├── service-content-creation.html
│   ├── service-graphic-design.html
│   ├── service-customer-support.html
│   ├── service-lead-generation.html
│   ├── service-data-entry.html
│   ├── service-appointment-setting.html
│   └── service-executive-assistant.html
├── blog.html                           (Blog)
├── contact.html                        (Contact)
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── js/components.js
```

---

## 3. INTERNAL LINKING MAP

| From | Links To | Purpose |
|---|---|---|
| Homepage Hero | Airtable (CTA) | Direct conversion |
| Homepage About Preview | about.html | Deeper brand understanding |
| Homepage Services | services.html + individual pages | Service exploration |
| Homepage FAQ | contact.html | Inquiry conversion |
| Homepage Final CTA | Airtable + contact.html | Final conversion push |
| About Page | services.html, Airtable | Cross-sell to services |
| Services Page | All 10 service pages | Detailed exploration |
| Each Service Page | Airtable (multiple CTAs) | Direct conversion |
| Each Service Page | services.html | Back to overview |
| Blog Page | services.html, Airtable | Content → conversion |
| Footer | All pages | Global navigation |

---

## 4. BRAND MESSAGING

### Homepage Headline Options
1. "Scale Your Business Without Hiring In-House Staff" *(used)*
2. "Your Remote Operations Team — Built and Managed for You"
3. "Delegate the Work That's Holding Your Business Back"

### Subheadline Options
1. "Quantrix Outsourcing connects you with trained remote professionals who handle your operations — so you can focus entirely on growth." *(used)*
2. "Stop trading hours for tasks. Our skilled remote professionals manage your operations while you build the business you actually want."
3. "The most efficient businesses don't do everything themselves. They outsource smartly — and they choose Quantrix."

### CTA Options
1. "Get Started Now" *(primary)*
2. "Book a Consultation" *(secondary)*
3. "Hire a [Role] Today"
4. "Submit an Inquiry"
5. "Build My Remote Team"

---

## 5. DESIGN DIRECTION

### Design System
- **Aesthetic:** Corporate Precision / Dark Premium
- **Tone:** Confident, modern, trustworthy — not cold or corporate

### Color Palette
| Variable | Value | Usage |
|---|---|---|
| `--c-bg` | `#08090c` | Primary background |
| `--c-bg2` | `#0e1018` | Alternate section background |
| `--c-surface` | `#13151e` | Cards, panels |
| `--c-accent` | `#4f8ef7` | CTAs, links, highlights |
| `--c-gold` | `#e8c56b` | Stats, premium accents |
| `--c-text` | `#f0f2f8` | Primary text |
| `--c-muted` | `#8a90a8` | Body copy |

### Typography
- **Headings:** Syne (Google Fonts) — geometric, modern, distinctive
- **Body:** DM Sans — clean, readable, professional

### Spacing
- Section padding: 100px vertical
- Container max-width: 1200px
- Card padding: 32–48px

---

## 6. AIRTABLE INTEGRATION

### Setup Instructions
1. Create your Airtable form with fields: Name, Email, Company, Service Interest, Message
2. Copy the shareable form URL from Airtable
3. Find and replace `https://airtable.com/app600HJRzNCD6K1Q/pagP4Qf8fPA8zbu8m/form` in all HTML files

### Files containing the Airtable placeholder:
- `index.html` (3 instances)
- `about.html` (1 instance)
- `services.html` (2 instances)
- `contact.html` (2 instances)
- `blog.html` (1 instance — sidebar CTA)
- `assets/js/components.js` (1 instance — header CTA, footer links)
- All 10 service pages (2 instances each)

### Quick Replace Command (run from project root):
```bash
find . -name "*.html" -o -name "*.js" | xargs sed -i 's|\[PASTE YOUR AIRTABLE LINK HERE\]|YOUR_ACTUAL_URL|g'
```

---

## 7. DEVELOPMENT NOTES

### Tech Stack
- Pure HTML5 / CSS3 / Vanilla JavaScript
- No framework dependencies
- Google Fonts (Syne + DM Sans)
- Responsive down to 375px

### Browser Support
- Chrome, Firefox, Safari, Edge (all modern versions)
- iOS Safari, Android Chrome

### Performance
- Fonts loaded via Google Fonts with preconnect
- CSS uses custom properties for consistency
- JS uses IntersectionObserver for lazy animations
- No external JS libraries required

### Customization Checklist
- [ ] Replace all `https://airtable.com/app600HJRzNCD6K1Q/pagP4Qf8fPA8zbu8m/form` with actual URL
- [ ] Replace `hello@quantrixoutsourcing.com` with real email
- [ ] Add real logo image (or keep text-based logo mark)
- [ ] Add real social media profile URLs in components.js
- [ ] Add Google Analytics / tracking script before `</head>`
- [ ] Add Privacy Policy and Terms of Service pages
- [ ] Replace placeholder stats with real numbers
- [ ] Add real team/founder photos to About page
- [ ] Write and publish real blog articles

---

## 8. SEO BLOG TOPICS

1. "The Complete Guide to Outsourcing for Small Business Owners in 2025"
2. "10 Tasks You Should Delegate to a Virtual Assistant Today"
3. "How Much Does It Really Cost to Hire In-House vs. Outsourcing?"
4. "Why Social Media Management Is the First Thing Entrepreneurs Should Outsource"
5. "How to Manage a Remote Team Effectively: A Practical Framework"
6. "Outsourcing Lead Generation: What Works, What Doesn't, and What to Expect"
7. "How E-Commerce Brands Use Outsourcing to Scale Without Blowing Their Budget"
8. "Building Your First SOP: How to Document Processes for Remote Teams"
9. "The Delegation Mindset: Why High-Performing CEOs Outsource More, Not Less"
10. "Virtual Assistant vs. Executive Assistant: Which One Does Your Business Need?"

---

*Quantrix Outsourcing Website System — Built with structure, copy, and conversion in mind.*
