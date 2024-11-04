import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

import Modal from "../../ui/Modal";

import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-xl">your projects</h1>
      <Modal title="add new project" open={open} onClose={() => setOpen(false)}>
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        className="btn btn--primary flex items-center gap-x-2"
        onClick={() => setOpen(true)}
      >
        <HiOutlinePlus />
        <span>add project</span>
      </button>
    </div>
  );
}

export default ProjectsHeader;
