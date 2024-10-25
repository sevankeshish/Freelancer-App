import Empty from "../../ui/Empty";
import Loading from "../../ui/Empty";
import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  //   console.log(projects, "projects");

  if (isLoading) return <Loading />;

  if (!projects || projects.length === 0)
    return <Empty resourceName="any project" />;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row ">
            <th className=" text-left ">#</th>
            <th className=" text-left ">Project Title</th>
            <th className=" text-left ">Category</th>
            <th className=" text-left ">Budget</th>
            <th className=" text-left ">Deadline</th>
            <th className=" text-left ">Tags</th>
            <th className=" text-left ">Freelancer</th>
            <th className=" text-left ">Condition</th>
            <th className=" text-left ">Function</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td className=" text-left ">{index + 1}</td>
              <td className=" text-left ">{project.title}</td>
              <td className=" text-left ">{project.category.title}</td>
              <td className=" text-left ">{project.budget}</td>
              <td className=" text-left ">{project.deadline}</td>
              <td>
                <div className="flex flex-wrap justify-start items-center gap-2 max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span className="badge badge--secondary" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className=" text-left ">{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success flex justify-start ">
                    open
                  </span>
                ) : (
                  <span className="badge badge--danger flex justify-start ">
                    close
                  </span>
                )}
              </td>
              <td className=" text-left ">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
