# Portfolio Customization Guide

## Quick Start

Your modern developer portfolio is ready! Here's how to customize it with your information:

## 1. Personal Information Updates

### Hero Section (`src/components/Hero.tsx`)
- Line 25: Update "Your Name" with your actual name
- Line 30: Update the tagline/description
- Line 40: Update the "Get In Touch" button link
- Line 47: Update the "Download CV" button link

### About Section (`src/components/About.tsx`)
- Lines 35-40: Update your bio text
- Lines 42-46: Update your second paragraph
- Lines 48-54: Update experience numbers and labels

### Projects Section (`src/components/Projects.tsx`)
- Lines 7-60: Replace the sample projects with your actual projects
- Update project titles, descriptions, technologies, and links
- Add your project images to the `public` folder

### Skills Section (`src/components/Skills.tsx`)
- Lines 7-35: Update skills and proficiency levels
- Lines 37-48: Update skill icons and categories
- Customize the progress bars and colors

### Current Work Section (`src/components/CurrentWork.tsx`)
- Lines 7-35: Update with your current projects
- Update progress percentages and status
- Add your actual technologies and descriptions

### Contact Section (`src/components/Contact.tsx`)
- Lines 7-25: Update social media links
- Line 30: Update your email address
- Line 35: Update response time if needed

### Navigation (`src/components/Navigation.tsx`)
- Line 25: Update "YourName" with your name/logo

## 2. Styling Customization

### Colors and Theme
- Edit `src/app/globals.css` for global color schemes
- Update gradient colors in the `.gradient-text` class
- Modify the dark theme colors in the `:root` and `.dark` sections

### Animations
- Customize Framer Motion animations in each component
- Adjust timing and easing in the `transition` props
- Modify hover effects and scroll animations

## 3. Adding Images

1. Create a `public/images` folder
2. Add your project images, profile photo, etc.
3. Update image paths in components:
   ```tsx
   <img src="/images/your-image.jpg" alt="Description" />
   ```

## 4. SEO and Meta Tags

Update `src/app/layout.tsx`:
- Line 12: Update title
- Line 13: Update description
- Line 14: Update keywords
- Line 15: Update author name

## 5. Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## 6. Performance Optimization

- Optimize images using Next.js Image component
- Lazy load components if needed
- Compress assets before deployment

## 7. Additional Features

Consider adding:
- Blog section
- Testimonials
- Downloadable resume
- Contact form functionality
- Analytics tracking
- Dark/light mode toggle

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Main layout and meta tags
│   ├── page.tsx           # Home page with all sections
│   └── globals.css        # Global styles and theme
├── components/
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills and technologies
│   ├── CurrentWork.tsx    # Current projects
│   ├── Contact.tsx        # Contact form and info
│   ├── Navigation.tsx     # Navigation bar
│   ├── Footer.tsx         # Footer
│   └── PlaceholderImage.tsx # Image placeholder
```

## Support

If you need help with customization, check the component files for detailed comments and examples.
