import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

import RHFSelect from "../../ui/RHFSelect";

import TextField from "../../ui/TextField";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  //useForm ==> managing states , submit form , validation
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));

  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
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
        options={categories}
      />
      <div>
        <label className="mb-2 flex text-secondary-700">Tag</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="Deadline" />
      <div className="!mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            Confirm
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
