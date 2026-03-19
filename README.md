# 👁 IOL Navigator

**Evidence-based Intraocular Lens Decision Platform**

A comprehensive web application for eye care professionals and patients, featuring clinical decision algorithms, pre-operative screening tools, IOL power formula guidance, contraindication matrices, and patient education resources.

---

## 🚀 Quick Deploy to Vercel (Recommended)

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com) and sign up
2. Verify your email address

### Step 2: Upload This Project to GitHub
1. Log in to GitHub
2. Click the **+** button (top right) → **New repository**
3. Name it `iol-navigator`
4. Set it to **Public** or **Private** (your choice)
5. Click **Create repository**
6. On the next page, click **"uploading an existing file"** link
7. Drag and drop ALL files/folders from this project into the upload area
8. Click **Commit changes**

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and click **Sign Up**
2. Choose **Continue with GitHub** and authorize Vercel
3. Click **Add New Project**
4. Select the `iol-navigator` repository from the list
5. Vercel auto-detects Vite — leave all settings as default
6. Click **Deploy**
7. Wait 1-2 minutes — your site is live! 🎉

You'll get a URL like `iol-navigator.vercel.app`

### Step 4: Add a Custom Domain (Optional)
1. Purchase a domain (e.g., `iolnavigator.com`) from [Namecheap](https://namecheap.com) or [Google Domains](https://domains.google)
2. In Vercel dashboard → your project → **Settings** → **Domains**
3. Add your domain and follow the DNS instructions
4. SSL certificate is automatic — your site will be `https://`

---

## ✏️ How to Edit After Publishing

### Option A: Edit directly on GitHub (easiest for text changes)
1. Go to your repository on GitHub
2. Navigate to `src/App.jsx`
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Click **Commit changes**
6. Vercel auto-deploys in ~30 seconds

### Option B: Edit locally (recommended for larger changes)
1. Install [Node.js](https://nodejs.org) (LTS version)
2. Install [Git](https://git-scm.com)
3. Clone your repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/iol-navigator.git
   cd iol-navigator
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:5173` in your browser
7. Edit `src/App.jsx` — changes appear instantly
8. When done, push changes:
   ```bash
   git add .
   git commit -m "Updated IOL database"
   git push
   ```
9. Vercel auto-deploys the update

---

## 📁 Project Structure

```
iol-navigator/
├── index.html          ← Main HTML file (meta tags, fonts, SEO)
├── package.json        ← Project config and dependencies
├── vite.config.js      ← Build tool configuration
├── .gitignore          ← Files to exclude from Git
├── README.md           ← This file
├── public/
│   └── favicon.svg     ← Browser tab icon
└── src/
    ├── main.jsx        ← React entry point
    └── App.jsx         ← ⭐ THE MAIN APP (all components & data)
```

**The file you'll edit most is `src/App.jsx`** — it contains all the IOL data, algorithms, and UI components.

---

## 🔧 Common Edits You Might Want to Make

### Adding a New IOL to the Database
In `src/App.jsx`, find the `IOL_DATABASE` object near the top. Add a new entry:

```javascript
{ 
  name: "New Lens Name (Model)", 
  manufacturer: "Company", 
  type: "Trifocal",        // Monofocal, Enhanced Monofocal, EDOF, Trifocal, etc.
  material: "Hydrophobic Acrylic", 
  addPower: "+2.00D / +3.50D", 
  bestFor: "Description of ideal use case", 
  toric: true              // true if toric version exists
},
```

### Modifying Decision Tree Questions
Search for `const questions = [` inside the `ECPDecisionTree` function to modify or add clinical screening questions.

### Updating Contraindications
Modify the `COMORBIDITY_FLAGS` object to add/remove contraindication criteria.

### Updating Formula Recommendations
Modify the `FORMULA_GUIDE` object to change formula recommendations per axial length range.

### Adding Patient Education Content
Find the `PatientEducation` function and modify the `types` array to add or edit lens explanations.

---

## 🌐 Alternative Hosting Platforms

### Netlify
1. Go to [netlify.com](https://netlify.com) → Sign up with GitHub
2. Click **Add new site** → **Import an existing project**
3. Select your GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy**

### Cloudflare Pages
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub account
3. Select the repo
4. Framework preset: **Vite**
5. Deploy

---

## 📋 Features

### ECP Clinical Portal
- **IOL Decision Tree** — 8-step algorithm evaluating comorbidities, pupil, astigmatism, lifestyle, and dysphotopsia tolerance
- **Pre-Op Screening Checklist** — 26 items across 5 categories with critical flags
- **IOL Power Formula Selector** — Recommendations by axial length + post-refractive scenarios
- **Contraindications Matrix** — Absolute, relative, toric-specific, and caution flags
- **IOL Comparison Database** — Filterable database of 20+ IOLs

### Patient Portal
- **Lifestyle Vision Assessment** — 7-question personalized lens recommender
- **Lens Type Education** — Plain-language explanations of all IOL types
- **Surgery Journey Timeline** — Step-by-step from pre-op to 6-month follow-up
- **Questions to Ask Your Surgeon** — 30+ organized questions by category

---

## ⚕️ Disclaimer

This tool is intended for **educational and clinical decision-support purposes only**. It does not replace professional clinical judgment. Always consult with the surgical team for individual patient decisions.

---

## 📄 License

All rights reserved. © Charbel
