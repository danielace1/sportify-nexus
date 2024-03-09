const Home = () => {
  return (
    <section className="bg-green-600 bg-opacity-5 min-h-screen px-8 sm:px-16 py-10  rounded-3xl mx-3 sm:mx-5 pt-20 md:pt-24 lg:pt-40">
      {/* Content */}
      <div className="grid lg:grid-cols-2">
        <div className="">
          <h1 className="text-primary-col1 text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 sm:mb-5">
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

        <div>
          <img
            src="/home-page-banner.png"
            alt="sportify-nexus"
            className="w-full lg:ml-10 mt-5"
          />
        </div>
      </div>

      {/* Sign up Form */}
      <div className="mt-36">
        <h1 className="text-4xl text-primary-col1 text-center font-semibold">
          Sign up Here !
        </h1>
        <form className="bg-green-50 border rounded px-10 py-14 mt-10 max-w-xl mx-auto space-y-10">
          <div>
            <label htmlFor="email" className="block mb-2">
              Email :{" "}
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@awesome.com"
              className="bg-green-100 outline-none px-4 py-2 w-full rounded"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2">
              Password :{" "}
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-green-100 outline-none px-4 py-2 w-full rounded"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-green-500 hover:bg-green-600 hover:cursor-pointer w-full py-2.5 rounded text-white font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Home;
