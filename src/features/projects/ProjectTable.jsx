import useOwnerProjects from "./useOwnerProjects";

import ProjectRow from "./ProjectRow";

import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Loading from "../../ui/Empty";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects || projects.length === 0)
    return <Empty resourceName="any project" />;

  return (
    <Table>
      <Table.Header>
        <th className="text-left">#</th>
        <th className="text-left">Project Title</th>
        <th className="text-left">Category</th>
        <th className="text-left">Budget</th>
        <th className="text-left">Deadline</th>
        <th className="text-left">Tags</th>
        <th className="text-left">Freelancer</th>
        <th className="text-left">Condition</th>
        <th className="text-left">Function</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
