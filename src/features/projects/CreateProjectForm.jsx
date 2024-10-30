import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";

function CreateProjectForm() {
  //useForm ==> managing states , submit form , validation

  const { register } = useForm();

  return (
    <form>
      <TextField
        label="project title"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "please enter the title",
          minLength: {
            value: 8,
            message: "the title must include minimum 8 characters",
          },
        }}
      />
    </form>
  );
}

export default CreateProjectForm;
