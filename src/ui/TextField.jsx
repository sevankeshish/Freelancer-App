function TextField({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
}) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        className="textField__input"
        type={type}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
