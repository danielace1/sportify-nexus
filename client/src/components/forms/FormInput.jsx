import Proptypes from "prop-types";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  error,
  register,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 ">
        {label} :
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="bg-green-100 outline-none px-4 py-2 w-full rounded"
        {...register}
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

FormInput.propTypes = {
  label: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  type: Proptypes.string,
  placeholder: Proptypes.string,
  error: Proptypes.object,
  register: Proptypes.object.isRequired,
};

export default FormInput;
