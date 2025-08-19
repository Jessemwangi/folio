export interface IProject {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string;
  
  //URLs
  liveSiteUrl?: string;
  adminUrl?: string;
  learnerUrl?: string;
  backendUrl?: string;
  sourceCodeUrl?: string; 
  sourceCode?: {        
    [repoName: string]: string;
  };
}