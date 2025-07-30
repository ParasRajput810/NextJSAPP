# Paras Rajput - Portfolio Website

A modern, professional portfolio website for Paras Rajput - DevOps Engineer, AI Engineer, Cloud Engineer, and Backend Developer. Built with Next.js, featuring 3D animations, elegant design, and comprehensive functionality.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually impressive
- **3D Animations**: Interactive Three.js animations and effects
- **2D Animations**: Smooth Framer Motion transitions and micro-interactions
- **Responsive**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Theme switching with next-themes
- **Contact Form**: Functional contact form with EmailJS integration
- **Blog Section**: Ready for markdown-based blog posts
- **Skills Showcase**: Animated progress bars and skill cards
- **Experience Timeline**: Professional experience with timeline layout
- **Projects Gallery**: Featured and additional projects showcase
- **Resume Download**: Direct resume download functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Theme**: next-themes for dark/light mode
- **Contact Form**: EmailJS for free email sending
- **Blog Support**: gray-matter + remark for markdown processing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Static Export
The project is configured for static export. Run:
```bash
npm run build
```
Then deploy the `out` folder to any static hosting service.

## ⚙️ Configuration

### Contact Form Setup (EmailJS)

1. **Create EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create a free account

2. **Setup Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create Email Template**
   - Create a new email template
   - Note your Template ID
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message

4. **Get Public Key**
   - Go to Account settings
   - Copy your Public Key

5. **Update Configuration**
   - Open `app/contact/page.tsx`
   - Replace the following placeholders:
     ```javascript
     emailjs.init('YOUR_PUBLIC_KEY'); // Your EmailJS public key
     
     await emailjs.send(
       'YOUR_SERVICE_ID',    // Your EmailJS service ID
       'YOUR_TEMPLATE_ID',   // Your EmailJS template ID
       // ...
     );
     ```

### Alternative: Formspree Setup

If you prefer Formspree over EmailJS:

1. Go to [Formspree](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Replace the EmailJS code in `app/contact/page.tsx` with Formspree integration

## 📝 Content Management

### Adding Blog Posts

1. **Create Blog Directory**
   ```bash
   mkdir -p content/blogs
   ```

2. **Add Markdown Files**
   Create `.md` files in `content/blogs/` with frontmatter:
   ```markdown
   ---
   title: "Your Blog Post Title"
   date: "2024-01-15"
   description: "Brief description of your post"
   tags: ["DevOps", "AI", "Cloud"]
   ---

   Your blog content here...
   ```

3. **Update Blog Page**
   Modify `app/blogs/page.tsx` to read from markdown files using gray-matter

### Updating Skills

Edit the `skillCategories` array in `components/skills.tsx`:

```javascript
const skillCategories = [
  {
    title: 'Your Skill Category',
    skills: [
      { name: 'Skill Name', level: 90 },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

### Updating Experience

Edit the `experiences` array in `components/experience.tsx`:

```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'Location',
    period: '2023 - Present',
    description: 'Job description...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
    technologies: ['Tech1', 'Tech2']
  },
  // Add more experiences...
];
```

### Updating Projects

Edit the `projects` array in `components/projects.tsx`:

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: 'https://images.pexels.com/...',
    technologies: ['Tech1', 'Tech2'],
    github: 'https://github.com/username/repo',
    demo: 'https://demo-url.com',
    featured: true // Set to true for featured projects
  },
  // Add more projects...
];
```

### Updating Resume

1. Replace `public/Paras_Resume (3).pdf` with your resume file
2. Update the filename in `components/navbar.tsx` and `components/hero.tsx`

### Updating Personal Information

1. **Contact Information**: Update in `app/contact/page.tsx`
2. **Social Links**: Update GitHub and LinkedIn URLs throughout the codebase
3. **Personal Details**: Update name, title, and bio in various components

## 🎨 Customization

### Colors and Themes

The project uses CSS variables for theming. Modify `app/globals.css` to change colors:

```css
:root {
  --primary: your-color-values;
  --secondary: your-color-values;
  /* ... other variables */
}
```

### Fonts

Change fonts in `app/layout.tsx`:

```javascript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({ subsets: ['latin'] });
```

### 3D Animations

Customize 3D elements in `components/scene-3d.tsx`. You can:
- Change colors and materials
- Add new 3D objects
- Modify animation speeds and patterns
- Add particle effects

## 🔧 Development

### Project Structure

```
├── app/                    # Next.js app directory
│   ├── blogs/             # Blog pages
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── skills.tsx        # Skills section
│   ├── experience.tsx    # Experience section
│   ├── projects.tsx      # Projects section
│   ├── navbar.tsx        # Navigation
│   ├── footer.tsx        # Footer
│   ├── loader.tsx        # Loading animation
│   └── scene-3d.tsx      # 3D animations
├── lib/                  # Utility functions
├── public/               # Static assets
└── content/              # Blog content (create as needed)
```

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/navbar.tsx` if needed

### Performance Optimization

- Images are optimized with Next.js Image component
- 3D animations use efficient rendering techniques
- Code splitting is handled automatically by Next.js
- Static generation for optimal performance

## 🐛 Troubleshooting

### Common Issues

1. **3D animations not working**: Ensure Three.js dependencies are properly installed
2. **Contact form not sending**: Check EmailJS configuration and API keys
3. **Build errors**: Ensure all dependencies are installed and TypeScript errors are resolved
4. **Styling issues**: Check Tailwind CSS configuration and component imports

### Performance Issues

- Reduce 3D animation complexity if needed
- Optimize images and use appropriate formats
- Enable compression in your hosting provider
- Use Next.js Image optimization features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Support

If you have any questions or need help with setup, feel free to reach out:

- **Email**: paras.rajput@example.com
- **LinkedIn**: [Paras Rajput](https://www.linkedin.com/in/paras-rajput-a4295823b/)
- **GitHub**: [ParasRajput810](https://github.com/ParasRajput810)

---

**Made with ❤️ by Paras Rajput**