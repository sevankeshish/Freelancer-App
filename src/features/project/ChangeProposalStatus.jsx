import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";

const options = [
  {
    label: "Rejected",
    value: 0,
  },
  {
    label: "Pending",
    value: 1,
  },
  {
    label: "Approved",
    value: 2,
  },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label=" change status"
          register={register}
          required
          options={options}
        />
        <div className="!mt-8">
          <button className="btn btn--primary w-full" type="submit">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
