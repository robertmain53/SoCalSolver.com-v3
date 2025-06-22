# 🧮 Calchub – AI-Powered Calculator Publishing Platform

Welcome to **Calchub**: a full-stack, AI-enhanced system for creating, reviewing, and publishing world-class online calculators.

> Built to outperform OmniCalculator and similar tools with accessibility, multilingual content, CI automation, and full AI workflows.

---

## 📦 Monorepo Structure

```
/frontend       ← Nuxt 3 app (Netlify SSR)
/backend        ← Node/Nitro API (Render)
/calcbundles    ← JSON inputs for calculators
/tests          ← Playwright/logic tests
/logs           ← Review & AI logs
/.github        ← CI Workflows
```

---

## 🚀 Getting Started

### ⬇️ Install (both apps)

```bash
cd frontend
npm install

cd ../backend
npm install
```

### ▶️ Run Dev Mode

```bash
# Frontend
npm run dev

# Backend
npm run start
```

---

## ⚙️ Key Features

- ✅ Auto-generate calculators from `.calcbundle.json`
- 🧠 Run AI review from Git diffs
- ✍️ Apply & commit auto-improvements
- 📄 Publish step-by-step calculators
- 🌍 Fully multilingual & SEO-rich
- 🧪 Lighthouse, A11y, and test coverage

---

## 🧪 Run AI Review

```bash
node tools/ai-review-from-diff.js components/calculators/bmi.vue
node tools/apply-ai-fixes.js
```

## 🔄 GitHub Actions

- `ci.yml`: Lint + test on every push
- `ai-code-review.yml`: Posts AI suggestions as PR comments
- `ai-auto-commit.yml`: Applies and commits suggested code

---

## 🤖 Example Calcbundle

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

Generate with:
```bash
node tools/generate-calculator.js calcbundles/bmi.calcbundle.json
```

---

## 🧠 Built-In AI Prompts

- Located in `utils/ai/`
- Used to validate `.vue`, `.md`, formulas, and logic

---

## 📬 Contributing

PRs are welcome! Add calculators via `calcbundles/`, run tests, and submit your improvements.

---
MIT License © Calchub Team