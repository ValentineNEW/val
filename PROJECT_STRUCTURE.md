# Project Structure Guide

## 📂 How to Organize Your Files

After downloading all the files, organize them in this structure:

```
valentine-proposal-website/
│
├── public/                          # Public assets (create this folder)
│   └── heart.svg                    # (Optional) Favicon
│
├── src/                             # Source files (create this folder)
│   ├── components/                  # React components (create this folder)
│   │   ├── LandingPage.tsx
│   │   ├── ApplicationForm.tsx
│   │   ├── TransitionPage.tsx
│   │   ├── QuestionPage.tsx
│   │   ├── CelebrationReveal.tsx
│   │   └── GiftBoxAnimation.tsx
│   │
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles
│
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript config
├── tsconfig.node.json               # TypeScript node config
├── .gitignore                       # Git ignore file
└── README.md                        # Documentation
```

## 🔧 Step-by-Step Setup

1. **Create the project folder:**
   ```bash
   mkdir valentine-proposal-website
   cd valentine-proposal-website
   ```

2. **Create the folder structure:**
   ```bash
   mkdir -p src/components public
   ```

3. **Move the downloaded files to their locations:**
   
   **Root level files:**
   - `index.html` → root
   - `package.json` → root
   - `vite.config.ts` → root
   - `tsconfig.json` → root
   - `tsconfig.node.json` → root
   - `.gitignore` → root
   - `README.md` → root

   **src/ folder:**
   - `App.tsx` → `src/`
   - `main.tsx` → `src/`
   - `index.css` → `src/`

   **src/components/ folder:**
   - `LandingPage.tsx` → `src/components/`
   - `ApplicationForm.tsx` → `src/components/`
   - `TransitionPage.tsx` → `src/components/`
   - `QuestionPage.tsx` → `src/components/`
   - `CelebrationReveal.tsx` → `src/components/`
   - `GiftBoxAnimation.tsx` → `src/components/`

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

## 🎯 Quick Setup (Copy-Paste Commands)

```bash
# Create project structure
mkdir -p valentine-proposal-website/src/components
mkdir -p valentine-proposal-website/public
cd valentine-proposal-website

# After placing all files in their correct locations, install and run:
npm install
npm run dev
```

## ✅ Verification Checklist

Make sure you have:
- [ ] All `.tsx` component files in `src/components/`
- [ ] `App.tsx`, `main.tsx`, `index.css` in `src/`
- [ ] `index.html` in root
- [ ] All config files (`package.json`, `vite.config.ts`, etc.) in root
- [ ] Ran `npm install` successfully
- [ ] Can start dev server with `npm run dev`

## 🚨 Common Issues

**Issue:** "Cannot find module './App'"
- **Solution:** Make sure `App.tsx` is in the `src/` folder

**Issue:** "Cannot find module './components/LandingPage'"
- **Solution:** Make sure all component files are in `src/components/`

**Issue:** Tailwind styles not working
- **Solution:** Make sure `index.css` is in `src/` and imported in `main.tsx`

## 📦 Alternative: Quick Start Archive

If you want to create a ready-to-use ZIP file:

1. Organize all files as shown above
2. Run `npm install` to generate `node_modules`
3. Zip the entire folder
4. Share with others - they just need to unzip and run `npm run dev`

## 🎨 Customization Locations

- **Colors & Styling:** `src/components/*.tsx` (Tailwind classes)
- **Animation Timings:** Look for `transition` props in components
- **Text Content:** Each component file contains its own text
- **Global Styles:** `src/index.css`

---

Happy coding! 💝
