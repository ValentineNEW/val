# 🚀 Quick Start Guide

Get your Valentine's proposal website running in 5 minutes!

## 📋 What You Need

- Node.js 18 or higher ([Download here](https://nodejs.org/))
- A code editor (VS Code recommended)
- 5 minutes of your time

## ⚡ Super Quick Setup

### Option 1: Command Line (Fastest)

```bash
# 1. Create project folder
mkdir valentine-proposal && cd valentine-proposal

# 2. Create folder structure
mkdir -p src/components public

# 3. Download and place all files in their correct locations (see below)

# 4. Install dependencies
npm install

# 5. Start the dev server
npm run dev
```

Then open `http://localhost:5173` in your browser!

### Option 2: Manual Setup (Beginner-Friendly)

1. **Create a new folder** called `valentine-proposal` on your computer

2. **Inside that folder, create these folders:**
   - `src`
   - `src/components`
   - `public`

3. **Download all the files and place them here:**

   📁 **Root folder** (valentine-proposal/):
   - index.html
   - package.json
   - vite.config.ts
   - tsconfig.json
   - tsconfig.node.json
   - .gitignore
   - README.md

   📁 **src/** folder:
   - App.tsx
   - main.tsx
   - index.css

   📁 **src/components/** folder:
   - LandingPage.tsx
   - ApplicationForm.tsx
   - TransitionPage.tsx
   - QuestionPage.tsx
   - CelebrationReveal.tsx
   - GiftBoxAnimation.tsx

4. **Open Terminal/Command Prompt** in the `valentine-proposal` folder

5. **Run these commands:**
   ```bash
   npm install
   npm run dev
   ```

6. **Open your browser** to `http://localhost:5173`

## 🎉 You're Done!

Your website should now be running! You'll see the landing page for the "Student Support Initiative 2026".

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy Your Website

### Vercel (Easiest - Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your code
5. Click "Deploy"
6. Share the link with your Valentine! 💕

### Netlify (Also Easy - Free)

1. Run `npm run build` 
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder into Netlify
4. Get your link and share it!

## 📱 Testing the Flow

1. **Start** at the landing page
2. **Click** "Apply for Giveaway"
3. **Fill** out the form (any data works - it's not saved)
4. **Click** "Continue Application"
5. **Click** "Answer 1 More Question"
6. **Type** anything in the question box
7. **Click** "Submit"
8. **See** the Valentine's reveal! 💖
9. **Click** either "Yes" button
10. **Watch** the gift box open and flower rise! 🌹

## 🎨 Quick Customizations

Want to personalize it? Edit these files:

- **Change the Valentine's question:** `src/components/CelebrationReveal.tsx` line 100
- **Change final message:** `src/components/GiftBoxAnimation.tsx` lines 116-123
- **Change your name:** `src/components/CelebrationReveal.tsx` line 85

## ⚠️ Troubleshooting

**Problem:** "npm is not recognized"
- **Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

**Problem:** White screen after npm run dev
- **Solution:** Check that all files are in the correct folders (see above)

**Problem:** Styles not working
- **Solution:** Make sure `index.css` is in the `src/` folder

**Problem:** Import errors
- **Solution:** Run `npm install` again

## 💡 Pro Tips

1. **Test it yourself first!** Go through the entire flow before sharing
2. **Use incognito mode** to see it fresh like your Valentine will
3. **Share the link**, don't show it on your device (more surprise!)
4. **Mobile works great** - they can view it on their phone
5. **Screenshot reactions** - the surprise is priceless!

## 🎯 What Happens to the Form Data?

**Nothing!** The form data is:
- ✅ Only stored in the browser (temporary)
- ✅ Never sent to any server
- ✅ Deleted when they close the page
- ✅ Completely private and safe

It's just for the romantic reveal effect! 💝

## 📞 Need Help?

Common issues and solutions:

1. **Port 5173 already in use:** 
   - Kill the other process or Vite will auto-pick another port

2. **Can't install dependencies:**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

3. **Build failing:**
   - Make sure all TypeScript files have no errors
   - Check that all imports are correct

## 🎊 Ready to Share!

Once everything works:
1. Deploy to Vercel or Netlify
2. Copy the URL
3. Send it to your Valentine
4. Wait for the magic! ✨

---

Good luck with your proposal! 💕🌹💖
