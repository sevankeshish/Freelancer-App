import useOwnerProjects from "./useOwnerProjects";

import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import toNumbersWithComma from "../../utils/toNumbersWithComma";

import Empty from "../../ui/Empty";
import Loading from "../../ui/Empty";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects || projects.length === 0)
    return <Empty resourceName="any project" />;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th className="text-left">#</th>
            <th className="text-left">Project Title</th>
            <th className="text-left">Category</th>
            <th className="text-left">Budget</th>
            <th className="text-left">Deadline</th>
            <th className="text-left">Tags</th>
            <th className="text-left">Freelancer</th>
            <th className="text-left">Condition</th>
            <th className="text-left">Function</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td> {project.category.title}</td>
              <td>{toNumbersWithComma(project.budget)}</td>
              <td>{toLocalDateShort(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span className="badge badge--secondary" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success">open</span>
                ) : (
                  <span className="badge badge--danger">close</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
