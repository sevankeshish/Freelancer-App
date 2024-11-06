import { useState } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

import { completeProfile } from "../../services/authService";

import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import { useForm } from "react-hook-form";
import RadioInputGroups from "../../ui/RadioInputGroups";

function CompleteProfileForm() {
  const { handleSubmit, register } = useForm();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");

  const { mutateAsync, isPending, watch } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
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
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="first and last name"
            name="name"
            register={register}
            validationSchema={{
              required: "the name and last name   is reuired.",
            }}
            errors={errors}
          />
          <TextField
            label="email"
            name="email"
            register={register}
            validationSchema={{
              required: "the e-maile is reuired.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "the email is invalid",
              },
            }}
            errors={errors}
          />
          <RadioInputGroups
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "the role is required" },
              options: [
                {
                  value: "OWNER",
                  label: "OWNER",
                },
                { value: "FREELANCER", label: "FREELANCER" },
              ],
            }}
          />
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
