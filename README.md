# Noman Al Said - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS. This portfolio showcases my work as a Product Designer and UX/UI Department Leader, featuring case studies, skills, and professional experience.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark/Light Mode**: Built-in theme switching with next-themes
- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: Built with accessibility in mind (ARIA labels, proper contrast)

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with modern features
- **TypeScript** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Tailwind CSS Animate** - Animation utilities
- **Radix UI** - Headless UI components
- **Lucide React** - Beautiful icons

### Development Tools
- **ESLint** - Code linting with Next.js config
- **Prettier** - Code formatting with Tailwind plugin
- **PostCSS** - CSS post-processing
- **Autoprefixer** - CSS vendor prefixing

### Additional Libraries
- **Next Themes** - Theme management
- **Sonner** - Toast notifications
- **Zod** - Schema validation
- **Class Variance Authority** - Component variant management
- **CLSX** - Conditional class names
- **Tailwind Merge** - Class name merging

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── case-study/        # Case study pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Experience timeline
│   ├── Footer.tsx        # Footer component
│   ├── FooterCTA.tsx     # Call-to-action footer
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── ProjectCard.tsx   # Project showcase cards
│   ├── ScheduleMeetingButton.tsx # Meeting scheduler
│   ├── SkillsTools.tsx   # Skills and tools section
│   ├── Testimonials.tsx  # Client testimonials
│   ├── theme-provider.tsx # Theme context
│   └── theme-toggle.tsx  # Theme switcher
├── lib/                   # Utility functions
│   ├── hooks.ts          # Custom React hooks
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   ├── images/           # Project images and photos
│   └── icons/            # SVG icons
├── styles/               # Additional styles
└── config files         # Various configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nomanalsayed/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run clean` - Clean build artifacts

## 🎨 Design System

The project uses a consistent design system with:
- **Color Palette**: Custom color scheme with dark/light mode support
- **Typography**: Modern font stack with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable UI components with consistent styling

## 📱 Sections

### Home Page
- **Hero**: Introduction with call-to-action
- **Featured Work**: Project showcase with case studies
- **Testimonials**: Client feedback and reviews
- **About**: Personal background and story
- **Skills & Tools**: Technical and soft skills
- **Experience**: Professional timeline
- **Footer CTA**: Final call-to-action

### Project Showcase
Each project card includes:
- Project category badge
- Project title and description
- Key statistics and metrics
- Project image
- Link to detailed case study

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific variables:
```env
# Add your environment variables here
```

### Tailwind CSS
- Configuration: `tailwind.config.mjs`
- CSS imports: `app/globals.css`

### TypeScript
- Configuration: `tsconfig.json`
- Strict mode enabled for type safety

## 📸 Screenshots

The portfolio includes various screenshots and images:
- Project screenshots in `/public/`
- Professional photos in `/public/`
- Icons and UI elements

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)

## 📞 Contact

- **Name**: Noman Al Said
- **Email**: [noman393@gmail.com](mailto:noman393@gmail.com)
- **LinkedIn**: [Your LinkedIn Profile](#)
- **Portfolio**: [Live Portfolio](#)

---

**Last Updated**: October 2025
**Version**: 1.0.0
