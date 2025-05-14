import ProjectHeader from "../features/project/ProjectHeader";
import useProject from "../features/project/useProject";
import ProjectTable from "../features/projects/ProjectTable";
import Loading from "../ui/Loading";

function Project() {
  const { isLoading, project } = useProject();

  if (isLoading) return <Loading />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProjectTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
