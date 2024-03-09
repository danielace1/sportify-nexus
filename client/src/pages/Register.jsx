import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import FormInput from "../components/forms/FormInput";
import FormAgeSelectTag from "../components/forms/FormSelectTag";
import { useState } from "react";

const schema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Name must be atleast 3 characters long" }),

  mobile: z
    .string()
    .min(10, { message: "Mobile Number must be atleast 10 digits" })
    .max(10, { message: "Mobile Number must be atmost 10 digits" }),

  age: z.string().min(1, { message: "Select Age" }),
  gender: z.string().min(1, { message: "Select Gender" }),

  interestedSports: z
    .string()
    .min(1, { message: "Interested Sports must atleast 4 characters" }),
  location: z.string().min(2, { message: "Location is required" }),
});

const Register = () => {
  const [location, setLocation] = useState([]);

  const getLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Construct the search query
        const searchQuery = `at=${latitude},${longitude}`;

        const location_api = await fetch(
          `https://revgeocode.search.hereapi.com/v1/revgeocode?${searchQuery}&lang=en-US&apiKey=POeJtzbmR7m2S4m1ayfzoOGU0Q-LzzjQ6cqlUbbRoaM`
        );

        const data = await location_api.json();

        const state = data.items[0].address.state;
        const county = data.items[0].address.county;

        // Set the state and county into the input field
        const locationValue = `${county}, ${state}`;
        setLocation(locationValue);

        // Set the value in the form data
        setValue("location", locationValue);

        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const sendInfoToServer = (data) => {
    console.log(data);
    alert(
      `Hey, ${data.fullName} your details has been submitted successfully!`
    );
    reset();
  };

  return (
    <section className="bg-green-600 bg-opacity-5 min-h-screen px-3 lg:px-36 py-10  rounded-3xl mx-3 sm:mx-5">
      <h1 className="text-primary-col1 text-center font-semibold text-2xl sm:text-3xl">
        Fill up your Details
      </h1>

      {/* Register Form */}
      <form
        className="bg-green-50 border rounded-md px-5 lg:px-10 py-14 mt-7 mx-auto space-y-5 sm:space-y-10"
        onSubmit={handleSubmit(sendInfoToServer)}
      >
        {/* Fullname and number */}
        <div className="sm:flex sm:space-x-10 space-y-5 sm:space-y-0">
          <div className="w-full">
            <FormInput
              label="Full Name"
              name="fullName"
              placeholder="Your Full Name"
              register={register("fullName")}
              error={errors.fullName}
            />
          </div>
          <div className="w-full">
            <FormInput
              label="Mobile"
              type="number"
              name="mobile"
              placeholder="Your Mobile Number"
              register={register("mobile")}
              error={errors.mobile}
            />
          </div>
        </div>

        {/* age and gender */}
        <div className="sm:flex sm:space-x-10 space-y-5 sm:space-y-0">
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
        <div className="sm:flex sm:space-x-10 space-y-5 sm:space-y-0 items-center">
          <div className="w-full">
            <FormInput
              label="Interested Sports"
              name="interestedSports"
              placeholder="Football, Cricket, Tennis"
              register={register("interestedSports")}
              error={errors.interestedSports}
            />
          </div>
          <div className="w-full sm:space-x-4 sm:flex sm:items-center">
            <div className="w-full">
              <label htmlFor="location" className="block mb-2">
                Location :{" "}
              </label>
              <input
                disabled
                type="text"
                name="location"
                placeholder="Location"
                className="bg-green-100 outline-none px-4 py-2 w-full rounded"
                {...register("location")}
              />
              {errors.location && (
                <small className="text-red-500">
                  {errors.location.message}
                </small>
              )}
            </div>

            <button
              type="button"
              onClick={getLocation}
              className="mt-4 sm:mt-7 w-40 md:w-52 lg:w-56 text-sm text-orange-500 bg-amber-100 py-3 rounded  hover:cursor-pointer hover:bg-amber-200"
            >
              Get my Location
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="mt-5 bg-green-500 hover:bg-green-600 hover:cursor-pointer px-10 py-2.5 rounded text-white font-semibold">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
