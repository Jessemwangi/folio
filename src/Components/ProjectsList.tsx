import { projects } from "../Data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsList: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;