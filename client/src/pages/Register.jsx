import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import FormInput from "../components/forms/FormInput";
import FormAgeSelectTag from "../components/forms/FormSelectTag";

const schema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Name must be atleast 3 characters long" }),

  age: z.string().min(1, { message: "Select Age" }),
  gender: z.string().min(1, { message: "Select Gender" }),

  interestedSports: z
    .string()
    .min(1, { message: "Interested Sports must atleast 4 characters" }),

  location: z
    .string()
    .min(1, { message: "Location must be atleast 5 characters" }),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const sendInfoToServer = (e) => {
    console.log(e);
    reset();
  };

  return (
    <section className="bg-green-600 bg-opacity-5 min-h-screen px-8 sm:px-36 py-10  rounded-3xl mx-3 sm:mx-5">
      <h1 className="text-primary-col1 text-center font-semibold text-3xl">
        Fill up your Details
      </h1>

      {/* Register Form */}
      <form
        className="bg-green-50 border rounded-md px-10 py-14 mt-7 mx-auto space-y-10"
        onSubmit={handleSubmit(sendInfoToServer)}
      >
        {/* Fullname */}
        <FormInput
          label="Full Name"
          name="fullName"
          placeholder="Your Full Name"
          register={register("fullName")}
          error={errors.fullName}
        />

        {/* age and gender */}
        <div className="flex space-x-10">
          <div className="w-full">
            <FormAgeSelectTag
              name="age"
              register={register("age")}
              error={errors.age}
            />
          </div>

          <div className="w-full">
            <label htmlFor="gender" className="block mb-2">
              Gender :{" "}
            </label>
            <select
              name="gender"
              id="gender"
              className="bg-green-100 outline-none px-4 py-2 w-full rounded"
              {...register("gender")}
            >
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>

            {errors.gender && (
              <small className="text-red-500">{errors.gender.message}</small>
            )}
          </div>
        </div>

        {/* preferred sports and location */}
        <div className="flex space-x-10">
          <div className="w-full">
            <FormInput
              label="Interested Sports"
              name="interestedSports"
              placeholder="Football, Cricket, Tennis"
              register={register("interestedSports")}
              error={errors.interestedSports}
            />
          </div>
          <div className="w-full">
            <FormInput
              label="Location"
              name="location"
              placeholder="Location"
              register={register("location")}
              error={errors.location}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 hover:cursor-pointer px-5 py-2.5 rounded text-white font-semibold">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
