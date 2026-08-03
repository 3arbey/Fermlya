# 🩺 Fermlya (فَرْمْلِيَة) - In-Home Healthcare & Caregiver Marketplace Landing Page

A high-converting, warm, and trustworthy marketplace landing page tailored for the **Moroccan market** to connect social and healthcare workers (nurses, home caregivers, elderly care specialists) with clients and families needing care.

Built with **Static Pug JS templates**, compiled into pure, SEO-optimized static HTML for maximum search engine indexability and Netlify form submissions.

---

## 🌟 Key Features

1. **Static HTML + Pug Template Architecture**:
   - **No React overhead**: 100% fast, accessible, lightweight pre-rendered HTML for maximum Lighthouse performance and instant SEO indexing.
   - **Structured Pug Templates**: Organized under `src/pug/` into modular layouts, mixins, and includes (`header.pug`, `hero.pug`, `services.pug`, `lead-forms.pug`, `trust-safety.pug`, `city-coverage.pug`, `faq.pug`, `footer.pug`).

2. **Multilingual & Native RTL Support**:
   - **French (`index.html`)**: Primary healthcare & formal communication language in Morocco.
   - **Arabic / Darija (`ar.html`)**: Native RTL (`dir="rtl"`) with **Cairo** font family and warm Moroccan phrasing.
   - **English (`en.html`)**: For expats and international family members arranging care for relatives in Morocco.
   - Dynamic client-side language switcher with instant text updates.

3. **Netlify Native Form Submissions**:
   - Integrated dual lead forms:
     - `client-leads`: For families requesting a nurse/caregiver.
     - `caregiver-leads`: For healthcare workers applying to join the network.
   - Configured with `data-netlify="true"`, bot honeypot protection, and seamless AJAX submission with instant WhatsApp backup redirect option.

4. **Warm & Reassuring Moroccan Design System**:
   - **Color Palette**: Deep Moroccan Emerald (`#0D5C46`), Warm Terracotta Amber (`#D96B43`), Soft Silk Beige (`#FAF7F2`).
   - **Trust Indicators**: Verified CIN badges, State diploma checks, 24/7 hotline badge, guarantee replacement policy box.
   - **City Coverage Grid**: Casablanca, Rabat-Salé, Marrakech, Tangier, Agadir, Fez, Meknes, Oujda.

---

## 📁 Directory Structure

```
c:/Git/Fermlya/
├── assets/
│   ├── css/
│   │   └── main.css            # Complete design system & custom CSS variables
│   └── js/
│       └── main.js             # Interactive handlers, language switcher & Netlify Form logic
├── src/
│   └── pug/
│       ├── layouts/
│       │   └── layout.pug      # Base Pug layout template
│       ├── mixins/
│       │   ├── service-card.pug
│       │   ├── trust-badge.pug
│       │   ├── city-pill.pug
│       │   └── faq-item.pug
│       ├── includes/
│       │   ├── header.pug
│       │   ├── hero.pug
│       │   ├── services.pug
│       │   ├── how-it-works.pug
│       │   ├── trust-safety.pug
│       │   ├── city-coverage.pug
│       │   ├── lead-forms.pug
│       │   ├── faq.pug
│       │   └── footer.pug
│       ├── index.pug           # French entry template
│       ├── index-ar.pug        # Arabic RTL entry template
│       └── index-en.pug        # English entry template
├── index.html                  # Pre-compiled French production static page (Default)
├── ar.html                     # Pre-compiled Arabic RTL production static page
├── en.html                     # Pre-compiled English production static page
├── netlify.toml                # Netlify deployment configuration & security headers
├── package.json                # Project build scripts
└── README.md
```

---

## 🚀 How to Deploy to Netlify

### Option 1: Netlify Git Integration (Recommended)
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Connect the repo on [Netlify Dashboard](https://app.netlify.com/).
3. Build command: *(leave empty or set `npm run build:pug`)*
4. Publish directory: `.` (Root directory).
5. Done! Netlify will automatically detect forms `client-leads` and `caregiver-leads`.

### Option 2: Netlify Drag & Drop
1. Go to Netlify -> Sites -> Drag and drop the `Fermlya` directory.
2. Form submissions will automatically appear in your Netlify Forms panel!

---

## 🛠️ Modifying & Recompiling Pug Templates

If you wish to edit the Pug templates in `src/pug/` and recompile:

```bash
# Install dependencies
npm install

# Recompile Pug templates into static HTML
npm run build:pug
```

---

## 📞 Support & Branding
- **Brand**: Fermlya (فَرْمْلِيَة)
- **Concept**: Care & Nursing at Home in Morocco
