# Modern Developer Portfolio

A beautiful, responsive developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🌙 Dark theme with vibrant blue/purple accents
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎨 Modern UI with gradient effects
- ⚡ Fast performance with Next.js
- 🔧 TypeScript for type safety
- 🎯 SEO optimized

## Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **About** - Personal bio and experience highlights
3. **Projects** - Featured projects with hover effects
4. **Skills** - Technology stack with progress bars
5. **Current Work** - What you're currently working on
6. **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Update name and tagline
- `src/components/About.tsx` - Update bio and experience
- `src/components/Projects.tsx` - Add your projects
- `src/components/Skills.tsx` - Update skills and technologies
- `src/components/CurrentWork.tsx` - Update current projects
- `src/components/Contact.tsx` - Update contact information and social links
- `src/components/Navigation.tsx` - Update logo/name

### Styling

- Colors and themes can be customized in `src/app/globals.css`
- Tailwind configuration in `tailwind.config.ts`
- Component-specific styles in each component file

### Images

Add your images to the `public` folder and update the image paths in the components.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or reach out!
