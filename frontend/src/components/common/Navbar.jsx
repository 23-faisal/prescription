import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImage from "../../../public/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isMenuOpen) {
      closeMenu();
    }
  };

  // Single account creation button component
  const CreateAccountButton = ({ mobile = false, onClick }) => (
    <button
      className={`${
        mobile ? "w-full mb-8" : ""
      } bg-[#5f6fff] hover:bg-[#4a5bef] text-white font-medium py-2 px-6 rounded-md transition duration-300`}
      onClick={onClick}
    >
      Create an account
    </button>
  );

  // Popover content component
  const PopoverContentItems = () => (
    <div className="w-auto md:w-48 flex flex-col gap-4">
      <div
        className="bg-slate-50 px-2 py-2 rounded-md font-medium cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100"
        onClick={() => {
          navigate("/profile");
          setIsPopoverOpen(false);
        }}
      >
        My Profile
      </div>
      <div
        className="bg-slate-50 px-2 py-2 rounded-md font-medium cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100"
        onClick={() => {
          navigate("/my-appointment");
          setIsPopoverOpen(false);
        }}
      >
        My Appointment
      </div>
      <Button
        className="bg-red-500 hover:bg-red-600 active:bg-red-700 font-medium text-lg"
        onClick={() => {
          setToken(false);
          setIsPopoverOpen(false);
        }}
      >
        Logout
      </Button>
    </div>
  );

  return (
    <nav className="bg-white border-b">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src={logoImage} alt="prescription" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-semibold uppercase">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md ${
                  isActive
                    ? "text-[#5f6fff] font-medium"
                    : "text-gray-600 hover:text-[#5f6fff]"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md ${
                  isActive
                    ? "text-[#5f6fff] font-medium"
                    : "text-gray-600 hover:text-[#5f6fff]"
                }`
              }
            >
              All Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md ${
                  isActive
                    ? "text-[#5f6fff] font-medium"
                    : "text-gray-600 hover:text-[#5f6fff]"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 px-3 rounded-md ${
                  isActive
                    ? "text-[#5f6fff] font-medium"
                    : "text-gray-600 hover:text-[#5f6fff]"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop - Show avatar if token exists, otherwise show sign up button */}
        <div className="hidden md:block">
          {token ? (
            <div className="flex items-center">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <CgProfile className="w-6 h-6 text-slate-950 cursor-pointer" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="max-w-56  ">
                  <PopoverContentItems />
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <CreateAccountButton onClick={() => navigate("/login")} />
          )}
        </div>

        {/* Mobile Controls - Avatar and Menu Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          {/* Show avatar only when menu is closed AND token exists */}
          {token && !isMenuOpen && (
            <div className="flex items-center">
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger>
                  <CgProfile
                    className="w-6 h-6 text-slate-950 cursor-pointer"
                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverContentItems />
                </PopoverContent>
              </Popover>
            </div>
          )}

          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen */}
      <div
        className={`md:hidden fixed inset-0 w-full h-screen bg-white z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" onClick={handleLogoClick} className="mx-auto">
              <img src={logoImage} alt="prescription" className="h-10 w-auto" />
            </Link>

            <button
              className="text-gray-600 focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <IoClose size={24} />
            </button>
          </div>

          <ul className="space-y-4 flex-grow">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-md ${
                    isActive
                      ? "bg-[#5f6fff] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctors"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-md ${
                    isActive
                      ? "bg-[#5f6fff] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                All Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-md ${
                    isActive
                      ? "bg-[#5f6fff] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-md ${
                    isActive
                      ? "bg-[#5f6fff] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Show create account button only if no token */}
          {!token && (
            <CreateAccountButton
              mobile
              onClick={() => {
                navigate("/login");
                closeMenu();
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
