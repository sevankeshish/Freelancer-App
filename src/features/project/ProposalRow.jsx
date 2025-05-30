import { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusStyle = [
  {
    label: "Rejected",
    className: "badge--danger",
  },
  {
    label: "Pending",
    className: "badge--secondary",
  },
  {
    label: "Approved",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td className="text-left">{index + 1}</td>
      <td className="text-left">{proposal.user.name}</td>
      <td className="text-left">{truncateText(proposal.description, 50)}</td>
      <td className="text-left">{proposal.duration} day</td>
      <td className="text-left">{proposal.price}</td>
      <td className="text-left">
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          title="change proposal status"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)} className="text-left">
          change the status
        </button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
