import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";

function ProposalRow({ propsal, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{propsal.user.name}</td>
      <td>{truncateText(propsal.description, 50)}</td>
      <td>{propsal.duration}</td>
      <td>{propsal.price}</td>
      <td>
        <span>{propsal.status}</span>
      </td>
      <td>++</td>
    </Table.Row>
  );
}

export default ProposalRow;
