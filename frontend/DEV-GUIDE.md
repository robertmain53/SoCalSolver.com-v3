# 🧠 Calchub – World-Class Calculator Publisher

Welcome to **Calchub**, an open-source system for creating, reviewing, improving, and publishing interactive calculators.

---

## 🚀 Setup Instructions

### Frontend (Nuxt 3) – Netlify
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for Netlify
npm run build
```

> Ensure `.env` contains:
```
NUXT_PUBLIC_API_BASE=https://your-backend.onrender.com/api
```

### Backend (Nitro API) – Render.com
```bash
# Install dependencies (if applicable)
npm install

# Build
npm run build

# Start
npm run start
```

> Ensure `.env` contains:
```
PORT=3000
JWT_SECRET=your-secret
ADMIN_API_SECRET=secure-token
NETLIFY_BUILD_HOOK=https://api.netlify.com/build_hooks/...
```

---

## 🛠 Folder Structure Overview

```
/calcbundles/         ← JSON input → AI calculator generator
/content/calculators/ ← Markdown files (.md)
/components/calculators/ ← Vue components (.vue)
/logs/                ← Review & improve logs
/reports/             ← SEO, A11y, UX validation outputs
/server/api/          ← Endpoints: review, improve, approve, publish
/utils/ai/            ← Prompt builders, linter tools
```

---

## ✨ How to Create a Calculator

1. Create a file in `/calcbundles/`, e.g.:
```json
{
  "slug": "bmi-calculator",
  "title": "BMI Calculator",
  "description": "Calculate your Body Mass Index",
  "tags": ["health", "bmi"],
  "inputs": [
    { "label": "Height", "unit": "cm", "name": "height" },
    { "label": "Weight", "unit": "kg", "name": "weight" }
  ],
  "formula": "weight / ((height / 100) ** 2)",
  "output": { "label": "BMI", "unit": "" }
}
```

2. The system will generate:
   - `/components/calculators/bmi-calculator.vue`
   - `/content/calculators/bmi-calculator.en.md`
   - `/tests/bmi-calculator.test.js`

---

## ✅ Review, Approve & Publish Flow

- **/api/review**: Validates markdown + frontmatter
- **/api/improve**: Applies AI/UX/SEO improvements
- **/api/approve**: Marks calculator as approved
- **/api/publish**: Moves to live `/calchub` section

Each step logs a file to `/logs/` like:
```json
{
  "timestamp": "2025-06-14T18:14:44.006Z",
  "event": "Review completed",
  "actions": [
    "Validated frontmatter",
    "Ran UX Linter: Passed",
    "Ran SEO Checks: 2 issues found"
  ],
  "status": "completed",
  "calculator": "bmi-calculator.en.md"
}
```

---

## 📦 Embed & Preview

Each calculator supports:
- Live preview
- Embed via `pages/embed/[slug].vue`
- Versioning and rollback

> Iframe:  
```html
<iframe src="https://yourdomain.com/embed/bmi-calculator" width="100%" height="500"></iframe>
```

---

## 🧪 Dev Scripts

- `npm run lint` → Lint all files
- `npm run test:visual` → Run Playwright snapshot tests
- `npm run lhci` → Run Lighthouse CI (if configured)

---

## 🧠 Prompt System (Planned)

Prompt builders will auto-generate:
- Diff-enhanced improvement prompts
- Multilingual rewrites
- Metadata-enriched suggestions

---

Enjoy building the future of calculators 🧮✨