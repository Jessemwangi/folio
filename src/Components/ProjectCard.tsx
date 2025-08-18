import type { IProject } from "../Interface/IProject";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }: ProjectCardProps) => {
  const hasSourceCode = project.sourceCode && Object.keys(project.sourceCode).length > 0;
  const hasSourceCodeUrl = project.sourceCodeUrl && project.sourceCodeUrl !== "#";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Laptop frame */}
      <div className="relative mx-auto w-full max-w-[90%] mt-8 bg-gray-900 rounded-t-lg p-2">
        {/* Screen */}
        <div className="relative bg-white rounded-sm overflow-hidden h-40">
          {/* Scrollable img */}
          <div className="overflow-y-scroll h-full">
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="w-full object-cover"
            />
          </div>
        </div>
        {/* keyboard */}
        <div className="relative h-3 bg-gray-800 rounded-b-lg">
          <div className="absolute left-1/2 top-0 w-16 h-1 -translate-x-1/2 bg-gray-700 rounded-b"></div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        {/* Call-to-action buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Live Site */}
          {project.liveSiteUrl && project.liveSiteUrl !== "#" && (
            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
            >
              View Live Site
            </a>
          )}
          {/* Specialized URLs */}
          {project.adminUrl && (
            <a
              href={project.adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
            >
              Admin Dashboard
            </a>
          )}
          {project.learnerUrl && (
            <a
              href={project.learnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
            >
              Learner Portal
            </a>
          )}
          {/* Source Code Links - now inline with other buttons */}
          {hasSourceCode && (
            Object.entries(project.sourceCode!).map(([repoName, repoUrl]) => (
              <a
                key={repoName}
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all
                           bg-gray-100 text-gray-800 hover:bg-gray-200
                           dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
                           border border-gray-200 dark:border-gray-600"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                {repoName.charAt(0).toUpperCase() + repoName.slice(1)}
              </a>
            ))
          )}
          {hasSourceCodeUrl && !hasSourceCode && (
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all
                         bg-gray-100 text-gray-800 hover:bg-gray-200
                         dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
                         border border-gray-200 dark:border-gray-600"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              View Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;