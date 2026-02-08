# Valentine's Day Proposal Website 💝

A beautiful, romantic multi-step website that cleverly disguises a Valentine's Day proposal as a student support giveaway application. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Multi-step flow** with smooth page transitions
- **Framer Motion animations** for romantic effects
- **Fully responsive** design for mobile and desktop
- **Client-side only** - no backend required
- **Beautiful animations** including:
  - Confetti hearts falling
  - Floating hearts background
  - Gift box opening animation
  - Flower rising from the gift box
  - Sparkle burst effects
  - Smooth page transitions

## 🎯 Website Flow

1. **Landing Page** - Professional-looking student support giveaway page
2. **Application Form** - Comprehensive form to collect information
3. **Transition Page** - "One more question" bridge page
4. **Question Page** - Asks "What would you do if Valentine's Day was today?"
5. **Celebration Page** - The big reveal: "Will you be my Valentine?"
6. **Gift Animation** - Animated gift box opens with a flower rising out

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn installed
- A modern web browser

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
pnpm build
# or
yarn build
```

The build output will be in the `dist` folder, ready to deploy to any static hosting service.

## 📁 Project Structure

```
valentine-proposal-website/
├── src/
│   ├── components/
│   │   ├── LandingPage.tsx          # Step 1: Student support landing
│   │   ├── ApplicationForm.tsx       # Step 2: Application form
│   │   ├── TransitionPage.tsx        # Step 3: Transition bridge
│   │   ├── QuestionPage.tsx          # Step 4: Valentine's question
│   │   ├── CelebrationReveal.tsx     # Step 5: The big reveal
│   │   └── GiftBoxAnimation.tsx      # Step 6: Gift box & flower
│   ├── App.tsx                       # Main app with state management
│   ├── main.tsx                      # Entry point
│   └── index.css                     # Global styles
├── index.html                        # HTML template
├── package.json                      # Dependencies
├── vite.config.ts                    # Vite configuration
├── tsconfig.json                     # TypeScript config
└── README.md                         # This file
```

## 🎨 Customization

### Change Colors

The website uses a gradient color scheme. To customize:

- **Blue theme** (Landing/Form): Edit classes with `blue-` prefix
- **Pink/Rose theme** (Reveal): Edit classes with `pink-`, `rose-`, `red-` prefixes
- **Gift box colors**: Edit the `GiftBoxAnimation.tsx` component

### Modify Text

- **Landing page stats**: Edit `LandingPage.tsx` (lines 81-94)
- **Valentine's question**: Edit `CelebrationReveal.tsx` (line 100)
- **Final message**: Edit `GiftBoxAnimation.tsx` (lines 116-123)

### Adjust Animations

All animations use Framer Motion. Key animation properties:

- `initial`: Starting state
- `animate`: Target state
- `transition`: Animation duration and easing
- `whileHover`: Hover effects
- `whileTap`: Click effects

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### GitHub Pages

1. Update `vite.config.ts` with `base: '/your-repo-name/'`
2. Build: `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## 🎭 How to Use

1. Share the website link with your Valentine
2. They'll think it's a legitimate student support application
3. As they progress through the form and questions
4. The romantic reveal happens at the end! 💕

## 📱 Mobile Responsive

The website is fully responsive and works beautifully on:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (375px+)

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## ⚡ Performance

- Fast page loads with Vite
- Optimized animations with Framer Motion
- Tree-shaking for minimal bundle size
- Lazy-loaded components

## 📝 Notes

- All form data is **client-side only** and not sent anywhere
- No backend or database required
- The "Yes" and "Yes 😌" buttons both do the same thing (advance to the gift animation)
- Perfect for a romantic Valentine's Day surprise!

## 💖 Credits

Created with love for a special someone. Feel free to customize and use for your own romantic proposals!

## 📄 License

MIT License - Feel free to use this for your own Valentine's Day proposal!

---

Made with ❤️ and lots of ☕
