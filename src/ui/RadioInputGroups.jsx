import RadioInput from "./RadioInput";

function RadioInputGroups({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            watch={watch}
            validateSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors["role"] && (
        <span className="text-error block text-sm mt-2 flex-1  ">
          {errors["role"]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroups;
