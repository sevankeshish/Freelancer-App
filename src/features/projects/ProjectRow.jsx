import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";

import useRemoveProject from "./useRemoveProject";

import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import toNumbersWithComma from "../../utils/toNumbersWithComma";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { removeProject } = useRemoveProject();

  return (
    <Table.Row>
      <td className="text-left">{index + 1}</td>
      <td className="text-left">{truncateText(project.title, 30)}</td>
      <td className="text-left">{project.category.title}</td>
      <td className="text-left">{toNumbersWithComma(project.budget)}</td>
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
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center  gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`edit ${project.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`delete ${project.title}`}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                disabled={false}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
