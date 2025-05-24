import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";

function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  const color = status === 2 ? "primary" : "danger";

  return (
    <Table.Row>
      <td className="text-left">{index + 1}</td>
      <td className="text-left">{proposal.user.name}</td>
      <td className="text-left">{truncateText(proposal.description, 50)}</td>
      <td className="text-left">{proposal.duration} day</td>
      <td className="text-left">{proposal.price}</td>
      <td className="text-left">
        <span className={`badge bg--${color}`}>{proposal.status}</span>
      </td>
      <td className="text-left">++</td>
    </Table.Row>
  );
}

export default ProposalRow;
