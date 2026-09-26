// ============================================================
// VASEENA LABS — CENTRAL SITE CONFIGURATION
// Edit this file to update company details site-wide
// ============================================================

export const siteConfig = {
  name: 'Vaseena Labs',
  tagline: 'Build Digital. Automate Intelligently.',
  description:
    'Vaseena Labs builds modern websites, custom software and AI-powered automation systems that help businesses grow and operate smarter.',
  url: 'https://vaseenalabs.com',

  contact: {
    email: 'vaseenalabs@gmail.com',
    phone: '+91 97381 76663',
    phoneRaw: '+919738176663',
    instagram: 'https://www.instagram.com/vaseena_labs/',
    instagramHandle: '@vaseena_labs',
    whatsapp: 'https://wa.me/919738176663',
    whatsappMessage: 'Hello Vaseena Labs, I would like to discuss a project.',
  },

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Work', href: '#work' },
    { label: 'Clients', href: '#testimonials' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],

  services: [
    {
      id: '01',
      title: 'Web Development',
      shortTitle: 'Web Dev',
      description:
        'Modern, responsive and conversion-focused websites engineered for performance, scalability and exceptional user experience.',
      icon: 'Globe',
      color: 'blue',
      features: [
        'Business Websites',
        'Corporate Websites',
        'Landing Pages',
        'E-commerce',
        'Web Applications',
        'Custom Platforms',
      ],
    },
    {
      id: '02',
      title: 'AI Automation',
      shortTitle: 'AI Auto',
      description:
        'Automate repetitive business processes with intelligent AI-powered workflows that reduce manual effort and improve operational efficiency.',
      icon: 'Cpu',
      color: 'purple',
      features: [
        'Workflow Automation',
        'AI Agents',
        'Lead Automation',
        'Customer Support Automation',
        'Document Processing',
        'Business Intelligence',
      ],
    },
    {
      id: '03',
      title: 'Custom Software',
      shortTitle: 'Software',
      description:
        'Purpose-built software designed around your exact business requirements.',
      icon: 'Code2',
      color: 'cyan',
      features: [
        'SaaS Applications',
        'Admin Dashboards',
        'Management Systems',
        'Internal Tools',
        'APIs',
        'Database Systems',
      ],
    },
    {
      id: '04',
      title: 'AI-Powered Solutions',
      shortTitle: 'AI Solutions',
      description:
        'Integrate modern AI capabilities into your existing products, operations and customer experiences.',
      icon: 'Brain',
      color: 'violet',
      features: [
        'AI Chatbots',
        'RAG Systems',
        'AI Assistants',
        'Intelligent Search',
        'Recommendation Systems',
        'AI Integrations',
      ],
    },
    {
      id: '05',
      title: 'E-Commerce Development',
      shortTitle: 'E-Commerce',
      description:
        'High-converting e-commerce experiences built for modern businesses.',
      icon: 'ShoppingBag',
      color: 'blue',
      features: [
        'Product Catalogs',
        'Shopping Cart',
        'Payments',
        'Order Management',
        'Inventory',
        'Admin Dashboard',
      ],
    },
    {
      id: '06',
      title: 'System Integration',
      shortTitle: 'Integrations',
      description:
        'Connect your business tools, APIs and data into one intelligent digital ecosystem.',
      icon: 'Network',
      color: 'purple',
      features: [
        'API Integration',
        'CRM Integration',
        'Payment Integration',
        'WhatsApp Integration',
        'Third-party Services',
        'Cloud Systems',
      ],
    },
  ],

  technologies: {
    frontend: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'FastAPI'],
    ai: ['OpenAI', 'Google Gemini', 'LangChain', 'LangGraph', 'RAG', 'AI Agents'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
    infrastructure: ['Docker', 'Cloud', 'REST APIs', 'Git', 'CI/CD'],
  },

  process: [
    {
      step: '01',
      title: 'Discover',
      description: 'Understand the business, users and requirements.',
      detail:
        'Deep-dive into your business goals, target audience, existing systems and pain points to define a clear project foundation.',
    },
    {
      step: '02',
      title: 'Strategize',
      description: 'Define architecture, technology and product strategy.',
      detail:
        'Choose the right technology stack, plan the system architecture, and map out a product strategy aligned with business objectives.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Create the experience, interfaces and user journeys.',
      detail:
        'Design premium user interfaces, define user journeys, and create a consistent visual design system.',
    },
    {
      step: '04',
      title: 'Build',
      description: 'Develop, integrate, test and optimize the product.',
      detail:
        'Engineer the product with clean code, integrate all systems, run comprehensive testing and optimize for performance.',
    },
    {
      step: '05',
      title: 'Launch & Automate',
      description: 'Deploy the system and introduce intelligent automation.',
      detail:
        'Deploy the product and implement AI automation workflows where they create measurable business value.',
    },
  ],

  whyUs: [
    { title: 'Business-First Technology', description: 'Every technical decision serves a business outcome.' },
    { title: 'Modern Engineering', description: 'Built with the latest, production-proven technology stack.' },
    { title: 'AI-First Mindset', description: 'Automation and AI are integrated from day one, not bolted on.' },
    { title: 'Scalable Architecture', description: 'Systems designed to grow with your business.' },
    { title: 'Custom Solutions', description: 'No templates. Everything is built specifically for you.' },
    { title: 'Clean User Experience', description: 'Interfaces that are intuitive, fast and beautiful.' },
    { title: 'Automation-Focused', description: 'We identify and eliminate manual bottlenecks in your operations.' },
    { title: 'Long-Term Support', description: 'Ongoing technical partnership after launch.' },
  ],

  automationExamples: [
    {
      title: 'Lead Management',
      icon: 'UserCheck',
      steps: [
        { label: 'Website Lead', type: 'trigger' },
        { label: 'AI Qualification', type: 'ai' },
        { label: 'CRM Entry', type: 'action' },
        { label: 'Sales Notification', type: 'result' },
      ],
    },
    {
      title: 'Customer Support',
      icon: 'MessageSquare',
      steps: [
        { label: 'Customer Message', type: 'trigger' },
        { label: 'AI Agent', type: 'ai' },
        { label: 'Knowledge Base', type: 'action' },
        { label: 'Instant Response', type: 'result' },
      ],
    },
    {
      title: 'Document Processing',
      icon: 'FileText',
      steps: [
        { label: 'Document Upload', type: 'trigger' },
        { label: 'AI Extraction', type: 'ai' },
        { label: 'Validation', type: 'action' },
        { label: 'Database Entry', type: 'result' },
      ],
    },
    {
      title: 'Appointment Booking',
      icon: 'Calendar',
      steps: [
        { label: 'Customer Request', type: 'trigger' },
        { label: 'AI Assistant', type: 'ai' },
        { label: 'Check Availability', type: 'action' },
        { label: 'Auto Booking', type: 'result' },
      ],
    },
    {
      title: 'Business Reporting',
      icon: 'BarChart3',
      steps: [
        { label: 'Business Data', type: 'trigger' },
        { label: 'AI Analysis', type: 'ai' },
        { label: 'Generate Insights', type: 'action' },
        { label: 'Automated Report', type: 'result' },
      ],
    },
  ],

  // Placeholder projects — replace with real work when available
  projects: [
    {
      id: 'proj-01',
      title: 'Enterprise SaaS Dashboard',
      industry: 'Software & Technology',
      services: ['Custom Software', 'Web Development'],
      technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
      description: 'A full-featured management dashboard with real-time analytics, user roles and automated reporting.',
      placeholder: true,
    },
    {
      id: 'proj-02',
      title: 'AI Customer Support System',
      industry: 'E-Commerce',
      services: ['AI Automation', 'AI Agent'],
      technologies: ['OpenAI', 'LangChain', 'FastAPI'],
      description: 'Intelligent support automation that handles 80% of customer queries without human intervention.',
      placeholder: true,
    },
    {
      id: 'proj-03',
      title: 'High-Performance E-Commerce Platform',
      industry: 'Retail',
      services: ['E-Commerce Development', 'Web Development'],
      technologies: ['Next.js', 'Stripe', 'MongoDB'],
      description: 'A scalable product catalog and checkout system with real-time inventory management.',
      placeholder: true,
    },
  ],

  seo: {
    title: 'Vaseena Labs | Web Development & AI Automation',
    description:
      'Vaseena Labs builds modern websites, custom software and AI-powered automation systems that help businesses grow and operate smarter.',
    keywords: [
      'web development',
      'AI automation',
      'custom software',
      'AI agents',
      'business automation',
      'e-commerce development',
      'Next.js development',
      'AI-powered solutions',
      'Vaseena Labs',
    ],
  },
} as const

export type SiteConfig = typeof siteConfig
