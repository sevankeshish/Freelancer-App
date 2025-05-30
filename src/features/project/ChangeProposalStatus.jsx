import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStaus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

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
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isUpdating } = useChangeProposalStaus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
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
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              Confirm
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
