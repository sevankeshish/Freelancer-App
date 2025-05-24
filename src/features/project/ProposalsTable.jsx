import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName="proposals" />;

  return (
    <Table>
      <Table.Header>
        <th className="text-left">#</th>
        <th className="text-left">Freelancer</th>
        <th className="text-left">Description</th>
        <th className="text-left">Deadline</th>
        <th className="text-left">Budget</th>
        <th className="text-left">Condition</th>
        <th className="text-left">Operation</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
