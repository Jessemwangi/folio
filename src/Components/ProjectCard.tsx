import type { IProject } from "../Interface/IProject";


// Define the props type for type safety
interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        {/* Laptop frame */}
        <div className="relative mx-auto w-full max-w-[90%] mt-8 bg-gray-900 rounded-t-lg p-2">
            {/* Screen */}
            <div className="relative bg-white rounded-sm overflow-hidden h-40">
                {/* Scrollable content */}
                <div className="overflow-y-scroll h-full">
                    <img 
                        src={project.image} 
                        alt={`${project.name} screenshot`}
                        className="w-full object-cover"
                    />
                </div>
            </div>
            {/* Laptop bottom */}
            <div className="relative h-3 bg-gray-800 rounded-b-lg">
                <div className="absolute left-1/2 top-0 w-16 h-1 -translate-x-1/2 bg-gray-700 rounded-b"></div>
            </div>
        </div>
          
        <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            
            {/* Technology Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
                {project.description}
            </p>

            {/* Call-to-action buttons */}
            <div className="flex items-center space-x-4">
                <a
                    href={project.liveSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
                >
                    View Live Site
                </a>
                <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:underline"
                >
                    Source Code
                </a>
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;