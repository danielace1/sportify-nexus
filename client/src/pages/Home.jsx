import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Link, useNavigate } from "react-router-dom";

import FormInput from "../components/forms/FormInput";

const schema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const navigate = useNavigate();
  const sendtoServer = async (data) => {
    const login = await fetch(
      "https://sportify-nexus.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const player = await login.json();

    console.log(player);
    if (player.status === "success") {
      navigate("/feed/" + player.user._id);
    }

    reset();
  };

  return (
    <section className="bg-green-600 bg-opacity-5 p-4 md:p-8 mx-2 md:mx-6 rounded-3xl ">
      <div className="container">
        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row justify-around items-center h-[65dvh] lg:h-[75dvh] w-full">
          <div className="md:w-6/12">
            <h1 className="text-primary-col1 text-3xl md:text-5xl lg:text-6xl font-semibold mb-3 sm:mb-5">
              Sports is Important for Good Health
            </h1>
            <p className="text-gray-500 text-sm sm:text-lg mb-8">
              Discover the power of sports for a healthier lifestyle with{" "}
              <span className="text-primary-col1">Sportify Nexus</span>. Connect
              with fellow enthusiasts, find local activities, and elevate your
              fitness journey. Join us and embrace the joy of staying active
              together!
            </p>

            <button className="flex items-center bg-green-500 px-6 lg:px-10 py-3 lg:py-4 rounded text-white lg:text-lg font-semibold hover:bg-green-600 transition-all hover:transition-all">
              Find your team mates ahead !
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                className="fill-current ml-1"
              >
                <path d="M9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3q-.275-.275-.275-.7t.275-.7zm6.6 0L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3q-.275-.275-.275-.7t.275-.7z"></path>
              </svg>
            </button>
          </div>

          <div className="md:w-5/12">
            <img
              src="/home-page-banner.png"
              alt="sportify-nexus"
              className="w-full"
            />
          </div>
        </div>

        {/* Sign up Form */}
        <div className="">
          <h1 className="text-4xl text-primary-col1 text-center font-semibold">
            Login Here !
          </h1>
          <form
            className="bg-green-50 border shadow-lg rounded-md px-10 py-14 mt-10 max-w-xl mx-auto space-y-10"
            onSubmit={handleSubmit(sendtoServer)}
          >
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="you@awesome.com"
              register={register("email")}
              error={errors.email}
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="you@awesome.com"
              register={register("password")}
              error={errors.password}
            />
            <div className="">
              <button className="bg-green-500 hover:bg-green-600 hover:cursor-pointer w-full py-2.5 rounded text-white font-semibold">
                Login
              </button>
              <div className="mt-5">
                <p className="text-center text-gray-500 text-sm">
                  Don&apos;t have an account?{" "}
                  <Link to={"/register"}>
                    <span className="text-primary-col1 underline font-semibold hover:cursor-pointer">
                      Sign Up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home;
