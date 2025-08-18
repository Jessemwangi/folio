import type { IProject } from "../Interface/IProject";
const gitUrl = "https://github.com/Jessemwangi";

export const projects: IProject[] = [
  {
  id: 1,
  name: "Hillrock Resource Ltd - HR & Consulting Platform",
  description: "A full-stack HR and business consulting platform with a public-facing website and an admin dashboard. Built with Next.js, MongoDB, and Tailwind CSS to provide scalable, secure, and modern HR solutions.",
  stack: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
  image: "/assets/hillrock_wide.png",
  liveSiteUrl: "https://hillrock-new.vercel.app/",
  adminUrl: "https://hillrock-new.vercel.app/Admin",
  sourceCodeUrl: "${gitUrl}/hillrock_new"
},
  {
    id: 2,
    name: "Government Job & Recruitment System",
    description: "A comprehensive full-stack system for a county government to manage job applications, selection, and recruitment processes. Built with a .NET backend, SQL Server, and SQL Reporting Server.",
    stack: [".NET", "VB.NET", "SQL Server", "SSRS", "JavaScript"],
    image: "/assets/jobs.png",
    liveSiteUrl: "https://jobs.uasingishu.go.ke/",
    sourceCodeUrl: "#", 
  },
  {
    id: 3,
    name: "SOS - Emergency Messaging App",
    description: "A mobile-first web app that sends a distress signal via SMS and email to predefined contacts. Built with TypeScript and a Firebase Firestore backend for real-time, reliable data handling.",
    stack: ["TypeScript", "React", "Firebase", "PWA", "Mobile-First"],
    image: "/assets/sos_wide.gif",
    liveSiteUrl: "https://sos-service.netlify.app/",
    sourceCodeUrl: `${gitUrl}/sos`,
  },
  {
    id: 4,
    name: "BeInformed - News Platform",
    description: "A full-stack platform for publishing and sharing news articles across categories. Features include user authentication, content creation/editing, and image uploads.",
    stack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    image: "/assets/beinformed.png",
    liveSiteUrl: "https://beinformed.onrender.com/",
    sourceCodeUrl: `${gitUrl}/beinformed`,
  },
  {
    id: 5,
    name: "BOOKMARK API",
    description: "A robust C# and .NET API for managing bookmarks and categories. Designed with a repository pattern and uses an in-memory database for testing and easy deployment.",
    stack: ["C#", ".NET", "REST API", "Entity Framework", "Swagger"],
    image: "/assets/endpoints.jpg",
    liveSiteUrl: "#",
    sourceCodeUrl: `${gitUrl}/Bookmark`,
  },
  {
    id: 6,
    name: "TasteIT - Recipe Sharing App",
    description: "A full-stack React application allowing users to share, review, and rate recipes. Includes features for commenting and user-generated content.",
    stack: ["React", "Node.js", "Firebase", "CSS-in-JS"],
    image: "/assets/recipe.png",
    liveSiteUrl: "https://recipe-bqpt.onrender.com/",
    sourceCodeUrl: `${gitUrl}/tasteit`,
  },
];