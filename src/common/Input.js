const Input = ({ label, name, formik, type, disabled}) => {
  return (
    <div className="">
      <label className="" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...formik.getFieldProps({ name })}
        name={name}
        disabled={disabled}
        className=""
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Input;
