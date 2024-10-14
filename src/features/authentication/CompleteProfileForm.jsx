import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";
import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);
      if (user.status !== 2) {
        Navigate("/");
        toast.error("Your profile is being reviewed for confirmation.", {
          icon: "👏",
        });
        return;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            label="first and last name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex item-center justify-center gap-x-8">
            <RadioInput
              name="role"
              id="OWNER"
              value="OWNER"
              label="Employer"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              label="Freelancer"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                confirm
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
