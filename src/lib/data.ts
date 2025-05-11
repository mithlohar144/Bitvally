import { Code, Edit3, Smartphone, BarChart2, Search, Server, Palette, Users, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  slug: string;
}

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Crafting responsive and high-performing websites.",
    longDescription: "We build custom websites tailored to your business needs, from simple landing pages to complex e-commerce platforms. Our focus is on responsive design, user experience, and cutting-edge technologies to ensure your online presence stands out.",
    icon: Code,
    slug: "website-development",
  },
  {
    id: "software-dev",
    title: "Software Development",
    description: "Building scalable and robust software solutions.",
    longDescription: "Our team develops custom software solutions, including enterprise applications, SaaS products, and APIs. We follow agile methodologies to deliver high-quality, scalable, and maintainable software that aligns with your strategic goals.",
    icon: Server,
    slug: "software-development",
  },
  {
    id: "mobile-app-dev",
    title: "Mobile App Development",
    description: "Creating intuitive and engaging mobile applications.",
    longDescription: "We design and develop native and cross-platform mobile apps for iOS and Android. Our apps are user-centric, feature-rich, and optimized for performance, helping you reach your audience on their favorite devices.",
    icon: Smartphone,
    slug: "mobile-app-development",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Designing user-friendly and aesthetically pleasing interfaces.",
    longDescription: "Our UI/UX design services focus on creating seamless and engaging user experiences. We conduct user research, create wireframes and prototypes, and design visually appealing interfaces that enhance usability and drive conversions.",
    icon: Palette,
    slug: "ui-ux-design",
  },
  {
    id: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    description: "Boosting your online visibility and driving growth.",
    longDescription: "We offer comprehensive SEO and digital marketing services to improve your search engine rankings, increase organic traffic, and enhance your online presence. Our strategies include keyword research, content optimization, link building, and social media marketing.",
    icon: Search,
    slug: "seo-digital-marketing",
  },
  {
    id: "ai-ml-solutions",
    title: "AI/ML Solutions",
    description: "Integrating intelligence into your applications.",
    longDescription: "Leverage the power of Artificial Intelligence and Machine Learning to gain insights, automate processes, and create innovative products. We help businesses implement AI/ML models for data analysis, predictive modeling, natural language processing, and more.",
    icon: Bot,
    slug: "ai-ml-solutions",
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  dataAiHint?: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  caseStudyLink?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "project-alpha",
    title: "E-commerce Platform 'ShopSphere'",
    category: "Web Development",
    imageUrl: "https://picsum.photos/seed/shopsphere/600/400",
    dataAiHint: "ecommerce website",
    description: "A full-featured e-commerce platform with advanced product management, secure payments, and a personalized user experience.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveLink: "#",
  },
  {
    id: "project-beta",
    title: "Mobile Banking App 'FinMobile'",
    category: "Mobile App Development",
    imageUrl: "https://picsum.photos/seed/finmobile/600/400",
    dataAiHint: "mobile banking",
    description: "A secure and intuitive mobile banking application offering seamless transactions, account management, and financial planning tools.",
    techStack: ["Flutter", "Firebase", "REST APIs"],
    liveLink: "#",
  },
  {
    id: "project-gamma",
    title: "SaaS Analytics Dashboard 'DataViz'",
    category: "Software Development",
    imageUrl: "https://picsum.photos/seed/dataviz/600/400",
    dataAiHint: "analytics dashboard",
    description: "A powerful SaaS dashboard for data visualization and business intelligence, helping companies make data-driven decisions.",
    techStack: ["Angular", "Django", "Python", "D3.js"],
    liveLink: "#",
  },
  {
    id: "project-delta",
    title: "Healthcare Portal 'WellConnect'",
    category: "UI/UX Design",
    imageUrl: "https://picsum.photos/seed/wellconnect/600/400",
    dataAiHint: "healthcare portal",
    description: "A user-centric UI/UX redesign for a healthcare portal, improving patient engagement and accessibility.",
    techStack: ["Figma", "Adobe XD", "User Research"],
    caseStudyLink: "#",
  },
  {
    id: "project-epsilon",
    title: "Corporate Website 'InnovateCorp'",
    category: "Web Development",
    imageUrl: "https://picsum.photos/seed/innovatecorp/600/400",
    dataAiHint: "corporate website",
    description: "A modern and responsive corporate website showcasing brand identity and services, optimized for SEO.",
    techStack: ["Next.js", "Tailwind CSS", "Contentful"],
    liveLink: "#",
  },
  {
    id: "project-zeta",
    title: "AI Chatbot 'AssistAI'",
    category: "AI/ML Solutions",
    imageUrl: "https://picsum.photos/seed/assistai/600/400",
    dataAiHint: "AI chatbot",
    description: "An intelligent AI chatbot for customer support, providing instant responses and personalized assistance.",
    techStack: ["Python", "TensorFlow", "Dialogflow", "Flask"],
    liveLink: "#",
  },
];

export const portfolioCategories = ["All", ...new Set(portfolioItems.map(item => item.category))];


export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  imageUrl?: string;
  dataAiHint?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Bitvalley transformed our online presence with a stunning website and an effective SEO strategy. Our traffic has increased by 200%!",
    author: "Jane Doe",
    company: "CEO, Innovate Solutions",
    imageUrl: "https://picsum.photos/seed/jane-doe/100/100",
    dataAiHint: "business person"
  },
  {
    id: "testimonial-2",
    quote: "The mobile app developed by Bitvalley exceeded our expectations. It's intuitive, fast, and our users love it.",
    author: "John Smith",
    company: "CTO, MobileFirst Corp",
    imageUrl: "https://picsum.photos/seed/john-smith/100/100",
    dataAiHint: "tech person"
  },
  {
    id: "testimonial-3",
    quote: "Working with Bitvalley was a breeze. Their team is professional, responsive, and delivered a high-quality software product on time.",
    author: "Alice Brown",
    company: "Product Manager, TechGrow Inc.",
    imageUrl: "https://picsum.photos/seed/alice-brown/100/100",
    dataAiHint: "professional woman"
  },
  {
    id: "testimonial-4",
    quote: "The UI/UX design for our platform was exceptional. Bitvalley truly understands user-centric design principles.",
    author: "Robert Green",
    company: "Founder, UserJoy Ltd.",
    imageUrl: "https://picsum.photos/seed/robert-green/100/100",
    dataAiHint: "creative man"
  },
];

export interface Technology {
  id: string;
  name: string;
  iconUrl?: string; // URL to an SVG icon or similar
  description: string;
  category: "Frontend" | "Backend" | "Mobile" | "Database" | "DevOps" | "AI/ML";
}

export const technologies: Technology[] = [
  { id: "react", name: "React", description: "A JavaScript library for building user interfaces.", category: "Frontend" },
  { id: "nextjs", name: "Next.js", description: "The React framework for production.", category: "Frontend" },
  { id: "angular", name: "Angular", description: "A platform for building mobile and desktop web applications.", category: "Frontend" },
  { id: "vuejs", name: "Vue.js", description: "The progressive JavaScript framework.", category: "Frontend" },
  { id: "nodejs", name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.", category: "Backend" },
  { id: "django", name: "Django", description: "A high-level Python web framework.", category: "Backend" },
  { id: "laravel", name: "Laravel", description: "A PHP web application framework with expressive, elegant syntax.", category: "Backend" },
  { id: "springboot", name: "Spring Boot", description: "An open-source Java-based framework used to create microservices.", category: "Backend" },
  { id: "flutter", name: "Flutter", description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop.", category: "Mobile" },
  { id: "react-native", name: "React Native", description: "Build native mobile apps using JavaScript and React.", category: "Mobile" },
  { id: "swift", name: "Swift", description: "A powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.", category: "Mobile" },
  { id: "kotlin", name: "Kotlin", description: "A modern programming language that makes developers happier.", category: "Mobile" },
  { id: "postgresql", name: "PostgreSQL", description: "A powerful, open source object-relational database system.", category: "Database" },
  { id: "mongodb", name: "MongoDB", description: "A source-available cross-platform document-oriented database program.", category: "Database" },
  { id: "mysql", name: "MySQL", description: "An open-source relational database management system.", category: "Database" },
  { id: "docker", name: "Docker", description: "A set of platform-as-a-service products that use OS-level virtualization.", category: "DevOps" },
  { id: "kubernetes", name: "Kubernetes", description: "An open-source system for automating deployment, scaling, and management of containerized applications.", category: "DevOps" },
  { id: "aws", name: "AWS", description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.", category: "DevOps" },
  { id: "gcp", name: "Google Cloud", description: "Google Cloud Platform, offered by Google, is a suite of cloud computing services.", category: "DevOps" },
  { id: "python", name: "Python", description: "A versatile language for web development, data science, AI/ML.", category: "AI/ML" },
  { id: "tensorflow", name: "TensorFlow", description: "An end-to-end open source platform for machine learning.", category: "AI/ML" },
  { id: "pytorch", name: "PyTorch", description: "An open source machine learning framework based on the Torch library.", category: "AI/ML" },
];

// Helper to get specific technology icons - you might want to use actual SVG icons or a library like simple-icons
// For now, we'll just return a placeholder Lucide icon.
export const getTechIcon = (techId: string): LucideIcon => {
  // This is a placeholder. In a real app, you'd map techId to specific icons.
  // You could extend this with a switch statement or a map for actual icons.
  // e.g. 
  // switch(techId) {
  //   case 'react': return ReactIcon; // Assuming you have a ReactIcon component or SVG
  //   default: return Code;
  // }
  return Code;
};