export interface IProject {
  id: number;
  name: string;
  description: string;
  stack: string[]; // Essential for showing skills at a glance
  image: string;
  liveSiteUrl: string;
  adminUrl?: string; 
  sourceCodeUrl: string; // Recruiters LOVE seeing the source code
}