import Proptypes from "prop-types";

const FormAgeSelectTag = ({ name, error, register }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 ">
        Age :
      </label>

      <select
        name={name}
        id={name}
        className="bg-green-100 outline-none px-4 py-2 w-full rounded"
        {...register}
      >
        <option value="">-- Select Age --</option>
        <option value="5 - 10 years">5 - 10 years</option>
        <option value="10 - 18 years">10 - 18 years</option>
        <option value="18 - 25 years">18 - 25 years</option>
        <option value="25 - 30 years">25 - 30 years</option>
        <option value="30 - 40 years">30 - 40 years</option>
        <option value="Above 40 years">Above 40 years</option>
      </select>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};

FormAgeSelectTag.propTypes = {
  name: Proptypes.string.isRequired,
  error: Proptypes.object,
  register: Proptypes.object.isRequired,
};

export default FormAgeSelectTag;
