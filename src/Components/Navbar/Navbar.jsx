import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../../assets/logo1.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      // Scrolling down, hide the navbar
      setShowNavbar(false);
    } else {
      // Scrolling up, show the navbar
      setShowNavbar(true);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full   ${
        showNavbar ? "translate-y-0" : "-translate-y-full "
      }transition-transform duration-300 ease-in-out fixed top-0 left-0 w-full text-black p-4 bg-gray-100 z-10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-black font-semibold text-lg">
              <Link to="home" smooth={true} duration={500} offset={-100}>
                <img
                  src={logo1}
                  alt="Camera logo"
                  className="h-[78px] rounded-full cursor-pointer"
                />
              </Link>
            </span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-9">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className=" text-black hover:text-gray-700 text-xl cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className=" text-black hover:text-gray-700 text-xl cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  offset={-300}
                  className=" text-black hover:text-gray-700 text-xl cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="service"
                  smooth={true}
                  duration={500}
                  offset={-300}
                  className=" text-black hover:text-gray-700 text-xl cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-200}
                  className=" text-black hover:text-gray-700 text-xl cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpenNav(!openNav)}
              className=" text-black hover:text-gray-700"
            >
              {openNav ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile navigation */}
      {openNav && (
        <div className="md:hidden bg-gray-700">
          <ul className="flex flex-col space-y-2 p-4">
            <li className="">
              <a
                href="#"
                className=" text-black hover:text-gray-700 hover:  p-3 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-black hover:text-gray-700 hover:  p-3 rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-black hover:text-gray-700 hover:  p-3 rounded-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-black hover:text-gray-700 hover:  p-3 rounded-md"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-black hover:text-gray-700 hover:  p-3 rounded-md"
              >
                Contact
              </a>
            </li>
            {/* Add more mobile menu items as needed */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
