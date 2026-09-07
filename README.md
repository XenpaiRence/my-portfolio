# My Developer Portfolio

A modern, premium-looking developer portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Built with Next.js 16** - Fast, server-rendered web application
- 🎨 **Tailwind CSS** - Utility-first CSS framework for styling
- ✨ **Framer Motion** - Smooth animations and micro-interactions
- 🎯 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔍 **SEO Optimized** - Proper meta tags, sitemap, and robots.txt
- ♿ **Accessible** - WCAG compliant with keyboard navigation support
- 📱 **Mobile Optimized** - Smooth scrolling and touch-friendly interfaces
- 🚀 **Production Ready** - Can be deployed directly to Vercel

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Navigate to the project directory
cd "c:\xampp\htdocs\MY PORFOLIO"

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Featured projects
│   ├── ProjectCard.tsx     # Project card component
│   ├── ProjectModal.tsx    # Project details modal
│   ├── Experience.tsx      # Experience & education
│   ├── GitHubSection.tsx   # GitHub call-to-action
│   ├── Contact.tsx         # Contact form section
│   └── Footer.tsx          # Footer
├── data/
│   ├── projects.ts         # Projects data
│   ├── skills.ts           # Skills data
│   └── experience.ts       # Experience & education data
├── public/
│   ├── favicon.ico         # Website favicon
│   └── projects/           # Project images
└── package.json
```

## Customization

### Update Personal Information

Edit the files in the `data/` directory to add your own:

- **Projects**: `data/projects.ts` - Add your portfolio projects
- **Skills**: `data/skills.ts` - Update your technical skills
- **Experience**: `data/experience.ts` - Add your work experience and education

### Update Links

Replace placeholder links throughout the components:
- GitHub profile URL
- LinkedIn profile URL
- Email address
- Project GitHub repositories
- Project demo links

### Update Images

Add your project images in `public/projects/` and update the image paths in `data/projects.ts`.

### Customize Colors

The site uses Tailwind CSS classes. Primary colors are `blue-600` and `cyan-600`. To change:
1. Find and replace in component files
2. Or modify `tailwind.config.ts` for global changes

### Update Metadata

Edit `app/layout.tsx` to update:
- Page title
- Meta description
- Keywords
- OpenGraph image
- Replace URLs with your actual portfolio URL

## Features Overview

### Navigation
- Sticky navigation bar with smooth transitions
- Mobile-responsive hamburger menu
- Smooth scroll anchors to all sections

### Hero Section
- Professional greeting with your name
- Career title and description
- Social media links (GitHub, LinkedIn, Email)
- Call-to-action buttons
- Code window visual element

### About Section
- Profile image placeholder
- Professional background
- Current learning technologies
- Interactive skill tags

### Skills Section
- Skills organized by category (Frontend, Backend, Mobile, Tools)
- Icon-based card layout
- Hover animations
- No fake skill percentages

### Projects Section
- Featured project cards with images
- Technology tags for each project
- GitHub and demo links
- Detailed project modal with:
  - Problem statement
  - Solution description
  - Key features
  - Challenges faced
  - What you learned
  - Full technology stack
  - Links to GitHub and live demo

### Experience & Education
- Timeline-style experience display
- Work history with descriptions
- Education details with achievements
- Organized by experience type (work, project, achievement)

### GitHub Section
- Direct link to your GitHub profile
- Encourages exploring more projects

### Contact Section
- Contact form (frontend - ready for email service integration)
- Email, GitHub, and LinkedIn links
- Contact information card

### Footer
- Quick navigation links
- Social media links
- Copyright information with current year

## Email Integration Setup

The contact form is currently frontend-only. To make it functional, integrate with one of these services:

### Option 1: EmailJS (Recommended)

```bash
npm install @emailjs/browser
```

Update `components/Contact.tsx` to include:
```typescript
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY');

// In handleSubmit:
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData);
```

### Option 2: Formspree

No installation needed. Update the form to POST to Formspree endpoint.

### Option 3: Custom Backend

Create `app/api/contact/route.ts` for a custom email API.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your repository
4. Click "Deploy"

Vercel will automatically detect Next.js and configure everything.

### Other Deployment Options

- **AWS Amplify**: Connect your GitHub repo
- **Netlify**: Drag and drop or connect your repo
- **Heroku**: Use buildpack for Next.js
- **Railway.app**: Connect GitHub and deploy
- **Render**: Create new Web Service from repo

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Performance Optimization

- ✅ Next.js Image Component
- ✅ Lazy loading with Framer Motion
- ✅ CSS optimization with Tailwind
- ✅ Server Components by default
- ✅ Minimal client-side JavaScript
- ✅ Fast Core Web Vitals

## SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags and descriptions
- ✅ Open Graph metadata
- ✅ Schema.org structured data ready
- ✅ Robots.txt configuration
- ✅ Sitemap support
- ✅ Mobile responsive
- ✅ Fast page load times

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Code Quality

- ✅ Full TypeScript support
- ✅ ESLint configured
- ✅ Component-based architecture
- ✅ Reusable components
- ✅ Proper type safety

## Accessibility

- ✅ ARIA labels
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ Color contrast compliance
- ✅ Reduced motion support

## Next Steps

1. **Personalize Content**: Fill in your actual information in the data files
2. **Add Project Images**: Replace placeholders with your screenshots
3. **Update Links**: Add your real GitHub, LinkedIn, and portfolio URLs
4. **Setup Email**: Integrate an email service for the contact form
5. **Custom Domain**: Add your domain in Vercel
6. **Analytics**: Add Google Analytics or similar
7. **Deploy**: Push to production

## Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run lint
npm run build
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide React Icons](https://lucide.dev)

## License

This portfolio template is free to use for your personal portfolio.

---

**Built with ❤️ using Next.js**
