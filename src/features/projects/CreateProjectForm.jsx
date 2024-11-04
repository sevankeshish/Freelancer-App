import { useForm } from "react-hook-form";

import TextField from "../../ui/TextField";

function CreateProjectForm() {
  //useForm ==> managing states , submit form , validation

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="project title"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "please enter the title",
          minLength: {
            value: 8,
            message: "the title must include at least 8 characters",
          },
        }}
        errors={errors}
      />
      <TextField
        label="description"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "Description is required.",
          minLength: {
            value: 15,
            message: "Minimum 15 characters required.",
          },
        }}
        errors={errors}
      />
      <TextField
        label="budget"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          requierd: "Budget is required.",
        }}
        errors={errors}
      />
      <button type="submit" className="btn btn--primary w-full">
        Confirm
      </button>
    </form>
  );
}

export default CreateProjectForm;
