export interface IProject {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string;
  
  // Main URLs
  liveSiteUrl?: string;
  adminUrl?: string;
  learnerUrl?: string;
  backendUrl?: string;
  
  // Source code can be either:
  sourceCodeUrl?: string; // For single-repo projects
  sourceCode?: {         // For multi-repo projects
    [repoName: string]: string;
  };
}