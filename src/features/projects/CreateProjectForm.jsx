import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

import RHFSelect from "../../ui/RHFSelect";

import TextField from "../../ui/TextField";

function CreateProjectForm() {
  //useForm ==> managing states , submit form , validation

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);

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
          required: "Budget is required.",
        }}
        errors={errors}
      />
      <RHFSelect
        label="category"
        required
        name="category"
        register={register}
        options={[]}
      />
      <div>
        <label className="mb-2 block text-secondary-700">Tag</label>
        <TagsInput value={tags} onChange={setTags} name={tags} />
      </div>
      <button type="submit" className="btn btn--primary w-full">
        Confirm
      </button>
    </form>
  );
}

export default CreateProjectForm;
