// ── Profile ──────────────────────────────────────────────────────────────────
export const profile = {
  name: "Jeff Martin",
  title: "Full Stack Developer",
  taglines: [
    "Full Stack Developer",
    "Web App Builder",
    "Backend Architect",
    "Problem Solver",
  ],
  email: "jeffjmart@gmail.com",
  location: "Austin, TX",
  resumeUrl: "/Jeff-Martin-Resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/jsquarem/",
    github: "https://github.com/jsquarem",
  },
};

// ── About ────────────────────────────────────────────────────────────────────
export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a full stack developer with years of experience building production web applications, internal tools, and backend systems. My path into software started in the real world — building PHP data pipelines, CRUD apps, and HTML email systems at a fast-moving startup, long before I formalized my skills at General Assembly.",
    "That hands-on origin means I build with purpose: every line of code solves a real problem for a real user. Over the years I've shipped everything from recipe apps and pet adoption platforms to project management backends and client-facing business websites.",
    "Today I specialize in React frontends, Node.js backends, and end-to-end web solutions for businesses of all sizes. Whether you need a polished marketing site or a full-featured web application, I bring the same engineering rigor and attention to detail.",
  ],
};

// ── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    title: "Custom Websites",
    description:
      "Modern, responsive websites built to your exact specifications. From landing pages to full business sites — fast, accessible, and SEO-friendly.",
    icon: "globe",
  },
  {
    title: "Web Applications",
    description:
      "Full stack applications with databases, authentication, APIs, and real-time features. Built to scale with your business.",
    icon: "code",
  },
  {
    title: "Backend Development",
    description:
      "Robust APIs, admin dashboards, and project management systems. Reliable infrastructure that keeps your operations running smoothly.",
    icon: "server",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces designed around your users. I turn complex workflows into simple, beautiful experiences.",
    icon: "palette",
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string;
  image?: string;
  placeholderIcon?: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  isClient?: boolean;
}

export const projects: Project[] = [
  {
    id: "paesani-designs",
    title: "Paesani Designs",
    subtitle: "Client Website",
    description:
      "Artist portfolio and services site for Luciano Paesani (Austin, TX). Gallery by series, artwork pages with lightbox, and password-protected admin. Three.js 3D visuals, contact/newsletter forms, theme toggle, and per-page SEO.",
    details:
      "React SPA with Vite; Firebase Auth and Storage. Artwork/series from static JSON. Forms post to backend with reCAPTCHA. React Three Fiber for series polyhedron. Custom CSS, responsive layout, JSON/sitemap export.",
    tech: [
      "React",
      "Vite",
      "React Router",
      "Firebase (Auth, Storage)",
      "Three.js / React Three Fiber",
      "Custom CSS",
      "Responsive Design",
    ],
    liveUrl: "https://paesanidesigns.com/",
    image: "paesani-designs.png",
    featured: true,
    isClient: false,
  },
  {
    id: "construction-pm",
    title: "Construction Project Management",
    subtitle: "Multi-Application Platform",
    description:
      "Multiple Laravel apps for a medium-sized GC in Central Texas, powering hundreds of millions in active customer projects. Customer-facing portals and auth-only internal systems for projects, timelines, and operations.",
    details:
      "PHP/Laravel with separate codebases for public and internal. MySQL, REST APIs, shared auth. Ongoing feature work and maintenance.",
    tech: ["PHP", "Laravel", "MySQL", "REST APIs", "Authentication"],
    placeholderIcon: "terminal",
    featured: true,
  },
  {
    id: "clickapea",
    title: "Clickapea",
    subtitle: "Intelligent Recipe App",
    description:
      "Full-featured recipe platform: import recipes from the web into a clean, standardized layout. Add recipes to a personal recipe book, plan meals on a calendar, and generate shopping lists with one click. Built with the MERN stack. Undergoing refactoring and a UX overhaul before commercial launch.",
    details:
      "MongoDB for recipes and users; Express API; React front end. Future plans include paid tiers and mobile-friendly improvements.",
    tech: ["React", "Node.js", "Express", "MongoDB", "MERN Stack"],
    image: "clickapea-home.png",
    liveUrl: "https://clickapea.com/",
    githubUrl: "https://github.com/jsquarem/clickapea",
    featured: true,
  },
  {
    id: "petopia",
    title: "Petopia",
    subtitle: "Pet Adoption Platform",
    description:
      "Advanced pet adoption search with location-based and breed-specific filtering. Users can favorite animals, view adoption center details, and contact shelters directly. Group project built with Python and Django. I owned the backend, third-party API integrations, DevOps, and a large part of the frontend design and implementation.",
    details:
      "PostgreSQL for data; external adoption APIs; Heroku deployment. Team of three; I led backend and integration work.",
    tech: ["Python", "Django", "PostgreSQL", "REST APIs"],
    image: "petopia-search.png",
    liveUrl: "https://pet-opia.herokuapp.com/",
    githubUrl: "https://github.com/jsquarem/petopia",
    featured: true,
  },
  {
    id: "nice-package",
    title: "Nice Package, Manager",
    subtitle: "NPM Package Organizer",
    description:
      "Tool for organizing NPM packages with code snippets and collections for bootstrapping new projects. Create shareable public links and generate an API key for programmatic access. Built with Node.js, Express, and EJS. Helps developers keep track of dependencies and reuse configs across projects.",
    details:
      "MongoDB for users and collections; REST-style API for the public API key. Deployed on Heroku.",
    tech: ["Node.js", "Express", "EJS", "MongoDB"],
    image: "npm-package.png",
    liveUrl: "http://nice-package-man.herokuapp.com/",
    githubUrl: "https://github.com/jsquarem/nice-package-man",
    featured: true,
  },
  {
    id: "posture-check",
    title: "Posture Checker",
    subtitle: "Computer Vision App",
    description:
      "Lightweight Python app using OpenCV to calibrate good posture and monitor it via webcam. You set a reference pose; the app alerts you when you drift out of the good-posture zone. Runs locally with no cloud dependency.",
    tech: ["Python", "OpenCV"],
    githubUrl: "https://github.com/jsquarem/posture-check",
    featured: false,
  },
  {
    id: "video-poker",
    title: "Video Poker But Awesomer",
    subtitle: "Browser Game",
    description:
      "Fully functional video poker game that emulates a Las Vegas machine. Built with vanilla JavaScript and Bootstrap. My first bootcamp project — card logic, payout rules, and UI all from scratch. Play in the browser with no backend.",
    tech: ["JavaScript", "Bootstrap", "HTML/CSS"],
    liveUrl: "https://jsquarem.github.io/SEI-P1-Video-Poker/",
    githubUrl: "https://github.com/jsquarem/SEI-P1-Video-Poker",
    featured: false,
  },
];

// ── Skills ───────────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  category: string;
}

export const skillCategories = [
  "All",
  "Languages",
  "Frameworks",
  "Databases",
  "Testing",
  "DevOps",
  "Tools",
  "APIs",
  "AI & ML",
  "Creative",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "PHP", category: "Languages" },
  { name: "HTML", category: "Languages" },
  { name: "CSS", category: "Languages" },
  { name: "Rust", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "Bash", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "GraphQL", category: "Languages" },
  { name: "YAML", category: "Languages" },
  { name: "JSON", category: "Languages" },
  { name: "Markdown", category: "Languages" },
  { name: "Regex", category: "Languages" },

  // Frameworks & Libraries
  { name: "React", category: "Frameworks" },
  { name: "Next.js", category: "Frameworks" },
  { name: "Vue.js", category: "Frameworks" },
  { name: "Angular", category: "Frameworks" },
  { name: "Svelte", category: "Frameworks" },
  { name: "Express.js", category: "Frameworks" },
  { name: "Django", category: "Frameworks" },
  { name: "Flask", category: "Frameworks" },
  { name: "FastAPI", category: "Frameworks" },
  { name: "Laravel", category: "Frameworks" },
  { name: "Tailwind CSS", category: "Frameworks" },
  { name: "Bootstrap", category: "Frameworks" },
  { name: "Sass/SCSS", category: "Frameworks" },
  { name: "Material UI", category: "Frameworks" },
  { name: "Framer Motion", category: "Frameworks" },
  { name: "jQuery", category: "Frameworks" },
  { name: "Three.js", category: "Frameworks" },
  { name: "D3.js", category: "Frameworks" },
  { name: "Chart.js", category: "Frameworks" },
  { name: "Socket.io", category: "Frameworks" },
  { name: "Mongoose", category: "Frameworks" },
  { name: "Prisma", category: "Frameworks" },
  { name: "TypeORM", category: "Frameworks" },
  { name: "Passport.js", category: "Frameworks" },
  { name: "JWT", category: "Frameworks" },
  { name: "Electron", category: "Frameworks" },
  { name: "React Native", category: "Frameworks" },
  { name: "Axios", category: "Frameworks" },
  { name: "Puppeteer", category: "Frameworks" },
  { name: "Multer", category: "Frameworks" },
  { name: "Nodemailer", category: "Frameworks" },
  { name: "CORS", category: "Frameworks" },
  { name: "bcrypt", category: "Frameworks" },

  // Databases
  { name: "MongoDB", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "SQLite", category: "Databases" },
  { name: "Firebase Firestore", category: "Databases" },

  // Testing
  { name: "Jest", category: "Testing" },
  { name: "Mocha", category: "Testing" },
  { name: "Chai", category: "Testing" },
  { name: "Selenium", category: "Testing" },
  { name: "React Testing Library", category: "Testing" },

  // DevOps & Infrastructure
  { name: "Node.js", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Docker Compose", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "Ansible", category: "DevOps" },
  { name: "Nginx", category: "DevOps" },
  { name: "Apache", category: "DevOps" },
  { name: "Cloudflare", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "AWS S3", category: "DevOps" },
  { name: "AWS EC2", category: "DevOps" },
  { name: "AWS Lambda", category: "DevOps" },
  { name: "Google Cloud", category: "DevOps" },
  { name: "Azure", category: "DevOps" },
  { name: "Vercel", category: "DevOps" },
  { name: "Netlify", category: "DevOps" },
  { name: "Heroku", category: "DevOps" },
  { name: "Linux", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "Vite", category: "Tools" },
  { name: "Webpack", category: "Tools" },
  { name: "npm", category: "Tools" },
  { name: "Yarn", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Redis", category: "Tools" },
  { name: "REST APIs", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Stripe API", category: "Tools" },

  // APIs & Services
  { name: "OAuth 2.0", category: "APIs" },
  { name: "Twilio", category: "APIs" },
  { name: "SendGrid", category: "APIs" },
  { name: "WebSockets", category: "APIs" },

  // AI & ML
  { name: "OpenAI API", category: "AI & ML" },
  { name: "Anthropic/Claude", category: "AI & ML" },
  { name: "TensorFlow", category: "AI & ML" },
  { name: "PyTorch", category: "AI & ML" },
  { name: "Pandas", category: "AI & ML" },
  { name: "NumPy", category: "AI & ML" },

  // Creative
  { name: "Photoshop", category: "Creative" },
  { name: "Illustrator", category: "Creative" },
  { name: "InDesign", category: "Creative" },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "Jeff is remarkably talented at web development and was well and beyond the star pupil of our cohort. He was consistently a resource among his peers and pushed the group's standard of excellence to higher levels. He would be a solid asset to any organization.",
    name: "Jason Shprintz",
    title: "Senior Front End Developer",
  },
  {
    quote:
      "Developing an application using Python, Django, and PostgreSQL in the timeframe of a week. Jeff was a complete professional when disseminating the structure of the API itself, task management within the group, and  accountability with management of personal responsibilities. Working together, we accomplished an app exceeding the expectations of the project requirements and outshining the base inspiration, petfinder.com. Jeff took the brunt of programming labor to extend and push what the app itself was capable of providing, working countless hours on his own portions and aiding in the troubleshooting of my own work and others in the group.",
    name: "Elijah Silvereagle",
    title: "Software Engineer",
  },
  {
    quote:
      "Jeff was one of my students in the General Assembly Software Engineering Immersive. He was, in all my years of teaching (6), one of my best students. He absolutely went above and beyond on all of his unit projects. He was able to take the things we learned in class and really build on top of them, which is what we all hope for in all students and in the workplace. I don't think there are many challenges you could give Jeff that he wouldn't be able to eventually figure out, because he has a tremendous work ethic. The other thing that really made him shine as a student was his ability and willingness to help out his classmates. He would make a tremendous asset on any team, not only for his lightheartedness, but also in his seriousness about solving problems. I would choose to work with him in an instant. Hire him, you won't regret it.",
    name: "Jim Haff",
    title: "Global Lead Web Development at General Assembly",
  }
];

// ── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "Full Stack Software Engineering",
    institution: "General Assembly",
  },
  {
    degree: "Web Development with HTML, CSS, & Bootstrap",
    institution: "Montclair State University",
  },
  {
    degree: "Business Management",
    institution: "Indiana University of Pennsylvania",
  },
];

// ── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
