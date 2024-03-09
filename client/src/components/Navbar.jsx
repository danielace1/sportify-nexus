import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-white lg:px-12 px-3 py-2 w-full z-10">
      <Link to="/">
        <div className="flex items-center">
          <img
            className="md:w-24 h-16 object-cover"
            src="/sport-Animation.gif"
            alt="sportify - nexus"
          />
          <h1 className="font-semibold md:text-3xl text-2xl text-primary-col1">
            Sportify Nexus
          </h1>
        </div>
      </Link>

      {/* Hamburger Button and close button */}
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          type="button"
          className={`inline-flex items-center p-2 size-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400  transition-all duration-300 ${
            isOpen ? "transform rotate-90" : ""
          }`}
          aria-controls="dropdown"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="size-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Nav links */}
      <div
        id="dropdown"
        className={`${
          isOpen
            ? "block absolute right-0 mt-2 top-12 sm:top-0 z-10 "
            : "hidden"
        } md:block bg-white divide-y sm:divide-y-0 divide-gray-100 rounded-lg sm:shadow-none shadow w-56 px-5 md:px-0 py-3 sm:w-auto `}
      >
        <ul
          className="grid sm:flex items-centers space-y-2 sm:space-y-0 md:text-lg text-sm sm:space-x-6 "
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <NavLink
              to="/"
              className="active-nav"
              aria-current="page"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          {location.pathname !== "/" && (
            <div className="flex">
              <li>
                <NavLink
                  to="/search"
                  className="active-nav"
                  aria-current="page"
                  onClick={() => setIsOpen(false)}
                >
                  Find Team mate
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/feed"
                  className="active-nav"
                  aria-current="page"
                  onClick={() => setIsOpen(false)}
                >
                  Explore
                </NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
