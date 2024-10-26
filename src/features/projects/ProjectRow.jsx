import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import { useState } from "react";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState("false");
  return (
    <Table.Row>
      <td className="text-left">{index + 1}</td>
      <td className="text-left">{truncateText(project.title, 30)}</td>
      <td className="text-left">{project.category.title}</td>
      <td className="text-left">{project.budget}</td>
      <td className="text-left">{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap justify-start items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="text-left">{project.freelancer?.name || "-"}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success flex justify-start ">open</span>
        ) : (
          <span className="badge badge--danger flex justify-start ">close</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <button onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          <Modal
            title="modal title"
            open={isEditOpen}
            onClose={() => setIsEditOpen(false)}
          >
            this is modal ...
          </Modal>
          <button>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
