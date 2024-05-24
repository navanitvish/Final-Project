import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../utility/data";
import image from "../assets/logo.png";
import { toast } from "react-toastify";
const Navbar = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-md w-full flex justify-between gap-4 items-center md:px-8 mx-auto h-22">
        <NavLink to="/home" className="text-xl font-bold text-gray-800">
          <img src={image} alt="Logo" className="w-50 h-20" />
        </NavLink>

        <button className="md:hidden focus:outline-none" onClick={toggleNav}>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <>
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>
        </button>

        {/* Desktop navigation links */}
        <ul
          className={`absolute md:static bg-[#16A34A] md:bg-transparent md:flex md:flex-row md:space-x-6 gap-6 top-[8rem] left-[30%] right-[30%] p-10  rounded-xl ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {isLoggedIn &&
            navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink
                  to={navLink.id}
                  className="text-gray-800 text-xl font-semibold hover:text-green-500 gap-4"
                >
                  {navLink.title}
                </NavLink>
              </li>
            ))}

          <div className="flex item-center gap-x-2">
            {!isLoggedIn && (
              <>
                <Link to="/SignUp">
                  <button className="text-xl font-semibold hover:text-black  bg-green-500 text-white py-3 px-6  rounded-full">
                    Sign Up
                  </button>
                </Link>
              </>
            )}

            {isLoggedIn && (
              <Link to="/login">
                <button
                  className="text-gray-800 text-xl font-semibold hover:text-green-500 rounded-[6px]"
                  onClick={() => {
                    setIsLoggedIn(false);
                    toast("Log Out !");
                  }}
                >
                  Log Out
                </button>
              </Link>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
