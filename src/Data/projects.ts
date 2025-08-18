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
  sourceCodeUrl: `${gitUrl}/hillrock_new`
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
  name: "Ujuzi STEMEX - Design Thinking in STEM Education",
  description: "A multi-platform web application revolutionizing STEM education by integrating design thinking and hands-on learning kits. The system includes a guardian/agent platform for managing subscriptions and students, a learner platform for accessing interactive STEM courses and device documentation, an admin dashboard for managing content, and a Strapi-powered headless CMS backend.",
  stack: ["React", "Redux", "TypeScript", "Vite", "Tailwind CSS", "Material UI", "SCSS", "Strapi", "PostgreSQL"],
  image: "/assets/ujuzi_wide.png",
  liveSiteUrl: "https://ujuzi.io",
  learnerUrl: "https://learn.ujuzi.io/",
  adminUrl: "https://admin.ujuzi.io/",
  backendUrl: "https://api.ujuzi.io/",
  sourceCode: {
    guardian: `${gitUrl}/UjuziSchool`,
    learner: `${gitUrl}/ujuziLearn`,
    admin: `${gitUrl}/ujuziAdmin`,
    backend: `${gitUrl}/ujuziapi`,
  }
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