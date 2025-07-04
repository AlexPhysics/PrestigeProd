# Prestige Production

Premium video production and photography services website built with React, Vite, and modern web technologies.

## 🎥 About

Prestige Production is a boutique video production and photography studio based in Zurich, Switzerland. We specialize in creating cinematic content for luxury real estate, corporate events, and brand storytelling.

## ✨ Features

- **Modern React Architecture** - Built with React 18 and Vite for optimal performance
- **Responsive Design** - Fully responsive across all devices using Tailwind CSS
- **Smooth Animations** - GSAP-powered animations and transitions
- **Multilingual Support** - i18next integration for English, French, German, and Italian
- **Portfolio Showcase** - Dynamic project gallery with video content
- **Contact Integration** - Professional contact forms and communication channels
- **SEO Optimized** - React Helmet for meta tags and search optimization

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **Framer Motion** - React animation library
- **React Router** - Client-side routing

### Internationalization

- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Deployment

- **AWS Amplify** - Hosting and CI/CD
- **Route 53** - DNS management

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/dorianushka/PrestigeProd.git
cd PrestigeProd/main
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
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
main/
├── public/
│   ├── locales/           # Translation files
│   │   ├── en/
│   │   ├── fr/
│   │   ├── de/
│   │   └── it/
│   └── assets/            # Static assets
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── constants/        # App constants
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── amplify.yml           # AWS Amplify build settings
```

## 🎨 Key Components

### Core Pages

- **Home** - Landing page with hero section and services overview
- **Portfolio** - Project showcase with video galleries
- **Services** - Detailed service offerings and packages
- **About** - Team introduction and company values
- **Contact** - Contact form and business information

### Reusable Components

- **Navbar** - Responsive navigation with language switching
- **Hero** - Animated landing section
- **VideoCarousel** - Portfolio video player
- **ContactForm** - Lead generation forms
- **Footer** - Site-wide footer with links

## 🌍 Internationalization

The site supports four languages:

- 🇺🇸 English (default)
- 🇫🇷 French
- 🇩🇪 German
- 🇮🇹 Italian

Translation files are located in `public/locales/[lang]/translation.json`

## 🎬 Animation System

### GSAP Integration

- **ScrollTrigger** - Scroll-based animations
- **Timeline animations** - Complex sequences
- **Performance optimized** - Hardware acceleration

### Framer Motion

- **Page transitions** - Smooth route changes
- **Component animations** - Interactive elements
- **Layout animations** - Dynamic layouts

## 📱 Responsive Design

Built mobile-first with Tailwind CSS breakpoints:

- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+
- **2xl**: 1536px+

## 🚢 Deployment

### AWS Amplify Setup

1. **Connect GitHub repository**
2. **Configure build settings** (uses `amplify.yml`)
3. **Set up custom domain** with Route 53
4. **Enable automatic deployments** on push to main branch

### Build Configuration (`amplify.yml`)

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
```

## 🔧 Environment Variables

Create a `.env` file for local development:

```bash
# Add any environment variables here
VITE_APP_TITLE=Prestige Production
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite code splitting
- **Image Optimization**: WebP format with fallbacks
- **CDN Delivery**: AWS CloudFront global distribution

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Prestige Production.

## 📞 Contact

**Prestige Production**

- Website: [prestigeproduction.ch](https://prestigeproduction.ch)
- Email: info@prestigeproduction.ch
- Phone: +41 76 202 19 59
- Location: Zurich, Switzerland

---

**Built with ❤️ in Switzerland**
