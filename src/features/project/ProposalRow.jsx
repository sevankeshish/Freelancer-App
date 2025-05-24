import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";

function ProposalRow({ propsal, index }) {
  const { status } = propsal;
  const color = status === 2 ? "primary" : "danger";

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{propsal.user.name}</td>
      <td>{truncateText(propsal.description, 50)}</td>
      <td>{propsal.duration} day</td>
      <td>{propsal.price}</td>
      <td>
        <span className={`badge bg--${color}`}>{propsal.status}</span>
      </td>
      <td>++</td>
    </Table.Row>
  );
}

export default ProposalRow;
