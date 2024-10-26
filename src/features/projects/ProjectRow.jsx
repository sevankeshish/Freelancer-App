import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import truncateText from "../../utils/truncateText";

function ProjectRow({ project, index }) {
  return (
    <Table.Row>
      <td className=" text-left ">{index + 1}</td>
      <td className=" text-left ">{truncateText(project.title, 30)}</td>
      <td className=" text-left ">{project.category.title}</td>
      <td className=" text-left ">{project.budget}</td>
      <td className=" text-left ">{toLocalDateShort(project.deadline)}</td>
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
          <span className="badge badge--success flex justify-start ">open</span>
        ) : (
          <span className="badge badge--danger flex justify-start ">close</span>
        )}
      </td>
      <td className=" text-left ">...</td>
    </Table.Row>
  );
}

export default ProjectRow;
