# Diogenes of Sinope | The Dog Philosopher

A beautiful, dark-themed, minimalist philosophical website dedicated to the ancient Greek philosopher Diogenes of Sinope and the original Cynic philosophy. This immersive digital shrine captures the raw lifestyle and confrontational wisdom of one of history's most radical thinkers.

## 🔥 Live Preview

**Visit the shrine:** [Deploy on Vercel](https://vercel.com) or [Deploy on Netlify](https://netlify.com)

## 🧠 About the Project

This website transforms the ancient wisdom of Diogenes into a modern, interactive experience that challenges visitors to confront their own assumptions about happiness, freedom, and authentic living. Through dark aesthetics, philosophical content, and interactive elements, users are guided through a journey of self-examination.

### Design Philosophy

- **Dark & Minimalist**: Black/dark gray backgrounds with sand-colored serif typography
- **Confrontational**: Bold design choices that mirror Diogenes' uncompromising philosophy  
- **Atmospheric**: Grain textures, lantern flickers, and subtle animations create an ancient, mystical feel
- **Immersive**: Scroll-based animations and parallax effects enhance the philosophical journey

## ✨ Features

### 🏛️ Six Core Pages

1. **Homepage - "The Dog Philosopher"**
   - Full-screen introduction with animated lantern
   - Interactive quote reveal system
   - Atmospheric particle effects

2. **About - "Who Was Diogenes?"**
   - Timeline of key life events  
   - Animated sections with scroll triggers
   - Historical context and significance

3. **Philosophy - "The Cynical Lens"**
   - Six pillars of Cynicism explained
   - Modern vs. ancient worldview comparisons
   - Scroll-driven parallax sections

4. **Acts of Defiance - "Against the World"**
   - Interactive anecdote cards
   - Expandable story format
   - Categorized by philosophical purpose

5. **Diogenes Speaks - "Bark of the Wise"**
   - Oracle-like quote engine
   - Category filtering system
   - 20+ authentic historical quotes

6. **Reflection - "Would You Dare?"**
   - Interactive self-examination questions
   - Daily philosophical challenges
   - Personal reflection prompts

### 🎨 Visual Elements

- **Custom Animations**: Lantern flicker, parallax scrolling, fade-in reveals
- **Typography**: Google Fonts (Playfair Display, Lora, Fira Code)
- **Color Palette**: Dark backgrounds, gold accents, blood-red highlights
- **Responsive Design**: Mobile-first approach with elegant breakpoints
- **Grain Texture**: SVG-based film grain overlay for atmosphere

### 🔧 Technical Features

- **Next.js 15**: Modern React framework with App Router
- **TypeScript**: Full type safety and developer experience
- **TailwindCSS v4**: Latest utility-first CSS framework
- **Framer Motion**: Smooth animations and scroll-triggered effects
- **Quote System**: Randomized wisdom delivery with category filtering
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd diogenes-shrine
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # Biography timeline
│   ├── philosophy/page.tsx # Cynicism principles
│   ├── defiance/page.tsx  # Famous anecdotes
│   ├── quotes/page.tsx    # Quote oracle
│   ├── reflection/page.tsx # Self-examination
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Custom styles & theme
├── components/            # Reusable components
│   └── Navigation.tsx     # Main navigation
├── data/                  # Content and data
│   └── quotes.ts          # Diogenes quotes & anecdotes
└── lib/                   # Utility functions
```

## 🎯 Key Components

### Quote Engine
- Randomized quote delivery with anti-repetition logic
- Category-based filtering (wisdom, defiance, virtue, materialism, society)
- Oracle-like reveal animations

### Navigation System
- Smooth page transitions
- Mobile-responsive burger menu
- Active page indicators

### Animation Framework
- Scroll-triggered reveals with Intersection Observer
- Parallax scrolling effects
- Custom CSS animations (flicker, fade-in, slide-in)

## 🎨 Customization

### Color Scheme
Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #f5f2e8;
  --accent-blood: #8b2635;
  --accent-gold: #d4af37;
  /* ... */
}
```

### Content
- **Quotes**: Add/edit in `src/data/quotes.ts`
- **Anecdotes**: Modify stories in the same file
- **Philosophy**: Update principles and modern comparisons

### Animations
- **Speed**: Adjust duration values in Framer Motion components
- **Effects**: Customize easing and timing in individual page components

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub/GitLab
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `out/` directory to Netlify
3. Configure redirects if needed

### Other Platforms
The project builds to static files and can be deployed anywhere that serves static content.

## 📚 Content Sources

All quotes and anecdotes are historically attributed to Diogenes of Sinope, sourced from:
- Diogenes Laërtius' "Lives of Eminent Philosophers"
- Surviving fragments and testimonies
- Historical accounts by ancient Greek and Roman authors

## 🤝 Contributing

This is a philosophical art project celebrating ancient wisdom. Contributions should maintain the serious, contemplative tone while enhancing the user experience.

### Guidelines
- Preserve the dark, minimalist aesthetic
- Ensure historical accuracy of quotes and anecdotes
- Maintain accessibility standards
- Test across devices and browsers

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Diogenes of Sinope** (c. 412-323 BCE) - The philosophical inspiration
- **Ancient Greek Sources** - For preserving his wisdom across millennia
- **Modern Cynics** - Who continue to live authentically in an inauthentic world

---

*"I am looking for an honest man."* - Diogenes

---

**Built with:** Next.js, TypeScript, TailwindCSS, Framer Motion
**Deployed on:** Vercel/Netlify
**Philosophy:** Authentic, confrontational, liberating
