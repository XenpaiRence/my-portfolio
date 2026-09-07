# Comprehensive Customization Guide

This guide will help you personalize your portfolio website with your own information, projects, and links.

## Table of Contents

1. [Update Personal Information](#update-personal-information)
2. [Add Your Projects](#add-your-projects)
3. [Update Skills](#update-skills)
4. [Update Experience & Education](#update-experience--education)
5. [Update Links](#update-links)
6. [Add Project Images](#add-project-images)
7. [Customize Colors](#customize-colors)
8. [Update Metadata](#update-metadata)

---

## Update Personal Information

### Step 1: Update Your Name

The name "Rence" appears in several places. Search and replace it with your name:

- **Navigation**: `components/Navbar.tsx` (line ~25)
- **Hero Section**: `components/Hero.tsx` (lines ~25-27)
- **Footer**: `components/Footer.tsx` (line ~46)

### Step 2: Update Your Bio

Edit the descriptive text in:

- **Hero Section**: `components/Hero.tsx`
  - Replace: "Hi, I'm Rence."
  - Replace: "BSIT Graduate & Aspiring Web Developer"
  - Replace: "I build functional and user-friendly web applications..."

- **About Section**: `components/About.tsx`
  - Update professional background
  - Update interests and focus areas

---

## Add Your Projects

Edit `data/projects.ts` to add your actual projects.

### Project Template

```typescript
{
  id: "unique-id",
  title: "Project Title",
  description: "Short description (one-line summary)",
  longDescription: "Longer description for the modal",
  problem: "What problem did it solve?",
  solution: "How did you solve it?",
  technologies: ["Tech1", "Tech2", "Tech3"],
  image: "/projects/project-name.jpg",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
  ],
  challenges: [
    "Challenge 1",
    "Challenge 2",
  ],
  learnings: [
    "Learning 1",
    "Learning 2",
  ],
  github: "https://github.com/yourusername/repo",
  demo: "https://project-demo.com",
}
```

### Example: Adding a New Project

```typescript
{
  id: "ecommerce-platform",
  title: "E-Commerce Platform",
  description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
  longDescription: "A complete e-commerce solution built with Next.js and Stripe, featuring product catalog, shopping cart, user authentication, and admin panel.",
  problem: "Businesses needed an easy way to set up online stores without extensive technical knowledge.",
  solution: "Built a scalable e-commerce platform with modern tech stack, Stripe payment integration, and intuitive admin interface.",
  technologies: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
  image: "/projects/ecommerce.jpg",
  features: [
    "Product catalog with search and filters",
    "Shopping cart and checkout process",
    "Secure Stripe payment integration",
    "User authentication and profiles",
    "Admin dashboard for inventory management",
    "Order tracking and history",
    "Responsive mobile design",
  ],
  challenges: [
    "Integrating Stripe payment processing securely",
    "Handling complex database queries for filtering",
    "Implementing real-time inventory updates",
    "Ensuring PCI compliance",
  ],
  learnings: [
    "Payment gateway integration best practices",
    "Database optimization for large product catalogs",
    "Security best practices for e-commerce",
    "Admin dashboard design patterns",
  ],
  github: "https://github.com/yourusername/ecommerce",
  demo: "https://yourecommerce.vercel.app",
}
```

---

## Update Skills

Edit `data/skills.ts` to list your actual technical skills.

### Current Structure

The skills are organized in categories with icons:

```typescript
{
  category: "Frontend",
  skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  icon: "Code2",
}
```

### Available Icons

- `Code2` - For Frontend
- `Server` - For Backend
- `Smartphone` - For Mobile
- `Wrench` - For Tools

### Example Custom Skills

```typescript
export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Material UI"],
    icon: "Code2",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Firebase"],
    icon: "Server",
  },
  {
    category: "Mobile",
    skills: ["React Native", "Flutter", "Swift"],
    icon: "Smartphone",
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "CI/CD"],
    icon: "Wrench",
  },
];

export const currentlyLearning = [
  "Machine Learning",
  "GraphQL",
  "Kubernetes",
  "AWS Solutions Architect",
  "Advanced TypeScript",
];
```

---

## Update Experience & Education

Edit `data/experience.ts` to add your work history and education.

### Work Experience Template

```typescript
{
  id: "1",
  title: "Senior Full Stack Developer",
  company: "Tech Company Inc.",
  period: "2022 - Present",
  description: [
    "Led development of customer-facing web applications",
    "Mentored junior developers and conducted code reviews",
    "Implemented CI/CD pipeline improving deployment speed by 40%",
  ],
  type: "work",
}
```

### Project Experience Template

```typescript
{
  id: "2",
  title: "E-Commerce Platform",
  company: "Personal Project",
  period: "2023 - 2024",
  description: [
    "Built complete e-commerce solution with React and Node.js",
    "Integrated Stripe payment processing",
    "Deployed to production on Vercel and AWS",
  ],
  type: "project",
}
```

### Achievement Template

```typescript
{
  id: "3",
  title: "Web Development Competition Winner",
  company: "University Tech Competition",
  period: "2023",
  description: [
    "Won first place in regional web development competition",
    "Built responsive web application in 24 hours",
    "Demonstrated proficiency in modern web technologies",
  ],
  type: "achievement",
}
```

### Education Template

```typescript
export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "State University",
  year: "2019 - 2023",
  achievements: [
    "Graduated with Honors (GPA: 3.8/4.0)",
    "Dean's List all semesters",
    "President of Computer Science Club",
  ],
};
```

---

## Update Links

Replace all placeholder links with your actual URLs.

### Links to Update

1. **GitHub Profile**
   - `components/Navbar.tsx` (line ~42)
   - `components/Hero.tsx` (line ~67)
   - `components/GitHubSection.tsx` (line ~XX)
   - `components/Contact.tsx` (line ~XX)
   - `components/Footer.tsx` (line ~XX)

2. **LinkedIn Profile**
   - `components/Hero.tsx` (line ~73)
   - `components/Contact.tsx` (line ~XX)
   - `components/Footer.tsx` (line ~XX)

3. **Email Address**
   - Search for "your.email@example.com" and replace with your actual email
   - `components/Hero.tsx`
   - `components/Contact.tsx`
   - `components/GitHubSection.tsx`
   - `components/Footer.tsx`

4. **Project Links**
   - Update in `data/projects.ts` for each project:
     - `github`: Your GitHub repo URL
     - `demo`: Your live demo/deployed project URL

### Example

```typescript
// Before
github: "https://github.com"
demo: "https://example.com"

// After
github: "https://github.com/yourusername/student-management-system"
demo: "https://student-management.vercel.app"
```

---

## Add Project Images

### Step 1: Create Images

Prepare project images in one of these formats:
- JPG/JPEG (recommended for photos)
- PNG (for graphics with transparency)
- WebP (for better compression)

**Recommended Size**: 1200 x 600 pixels

### Step 2: Add to Public Folder

1. Create folder: `public/projects/`
2. Add your images: `public/projects/project-name.jpg`

### Step 3: Update Project Data

Edit `data/projects.ts` and update the image path:

```typescript
{
  id: "student-management",
  title: "Student Management System",
  // ... other fields
  image: "/projects/student-management.jpg",  // Update this
  // ... other fields
}
```

### Image Naming Convention

Use descriptive names:
- ✅ `student-management-system.jpg`
- ✅ `ecommerce-platform.jpg`
- ✅ `inventory-system.jpg`
- ❌ `project1.jpg`
- ❌ `img.jpg`

---

## Customize Colors

The portfolio uses a dark theme with blue and cyan accents.

### Current Color Scheme

- **Primary**: `blue-600` (#2563eb)
- **Secondary**: `cyan-600` (#0891b2)
- **Background**: Black and dark gray
- **Text**: White and gray

### How to Change Colors

#### Option 1: Find and Replace in Components

Search for `blue-600` or `cyan-600` in component files and replace with your color.

**Common Tailwind Colors**:
- `purple-600` - Purple
- `pink-600` - Pink
- `green-600` - Green
- `orange-600` - Orange
- `indigo-600` - Indigo

#### Option 2: Update in Tailwind Config

Edit `tailwind.config.ts` (if you want to create custom colors):

```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#your-color-hex',
        },
      },
    },
  },
};
```

#### Option 3: Modify Global CSS

Edit `app/globals.css` to add CSS variables:

```css
:root {
  --primary: #your-color;
  --secondary: #your-color-2;
}
```

### Example Color Combinations

**Blue & Purple**:
- Primary: `blue-600`
- Secondary: `purple-600`

**Green & Teal**:
- Primary: `green-600`
- Secondary: `teal-600`

**Red & Orange**:
- Primary: `red-600`
- Secondary: `orange-600`

---

## Update Metadata

Edit `app/layout.tsx` to update SEO metadata and site information.

### What to Update

```typescript
export const metadata: Metadata = {
  title: "Your Name - Web Developer Portfolio",  // Update name
  description: "Your professional description...",  // Update description
  keywords: "your, skills, keywords, here",  // Add your keywords
  authors: [{ name: "Your Name" }],  // Update name
  openGraph: {
    title: "Your Name - Developer",
    description: "Your description",
    type: "website",
    url: "https://yourportfolio.com",  // Update with your domain
    images: [
      {
        url: "https://yourportfolio.com/og-image.png",  // Update URL
        width: 1200,
        height: 630,
        alt: "Your Name - Developer",
      },
    ],
  },
};
```

### Open Graph Image

Create an Open Graph image (1200 x 630 pixels):
1. Create an image that represents your portfolio
2. Save as `public/og-image.png`
3. Update the URL in the metadata

### Update Domain

When you deploy your portfolio:
1. Update all `https://yourportfolio.com` with your actual domain
2. Update `robots.txt` with your domain
3. Update `sitemap.xml` with your domain

---

## Before & After Checklist

- [ ] Updated your name in all components
- [ ] Added your own projects in `data/projects.ts`
- [ ] Updated skills in `data/skills.ts`
- [ ] Added work experience in `data/experience.ts`
- [ ] Replaced all placeholder emails with your email
- [ ] Updated GitHub, LinkedIn, and personal links
- [ ] Added project images to `public/projects/`
- [ ] Updated project image paths in project data
- [ ] Changed color scheme (if desired)
- [ ] Updated metadata in `app/layout.tsx`
- [ ] Reviewed all sections for accuracy
- [ ] Tested on mobile and desktop
- [ ] Deployed to Vercel or hosting platform

---

## Additional Customization

### Add More Sections

You can add new sections by creating components in `components/` and adding them to `app/page.tsx`.

### Modify Components

Feel free to modify existing components to match your style. They're designed to be flexible and easy to customize.

### Add More Projects

The projects grid will automatically scale to show all projects you add to `data/projects.ts`.

---

## Need Help?

- Check the README.md for deployment and setup instructions
- Review component files for specific styling details
- Refer to Tailwind CSS documentation: https://tailwindcss.com
- Refer to Next.js documentation: https://nextjs.org/docs
- Refer to Framer Motion documentation: https://www.framer.com/motion/

---

**Your portfolio is ready to be personalized!**

Take your time to fill in accurate information. A well-maintained portfolio is your best asset in the tech industry.

Good luck! 🚀
