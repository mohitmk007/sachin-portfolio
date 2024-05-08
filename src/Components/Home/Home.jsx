/* eslint-disable react/no-unescaped-entities */
import background from "../../assets/background.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      className="home flex max-sm:flex-col justify-between items-center h-screen px-32 max-lg:px-20 gap-5 max-md:px-14   "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Adjust as needed
        backgroundPosition: "center", // Adjust as needed
      }}
    >
      <div className="left-Section w-1/2 max-sm:w-full max-sm:pt-64">
        <h2 className="text-4xl max-md:text-3xl text-orange-600 mb-5">Hello, I'm</h2>
        <h1 className="text-7xl max-lg:text-6xl font-semibold mb-3">Sachin Kumar</h1>
        <h3 className="text-2xl max-md:text-xl my-6">
          A <span className="text-orange-600"> Photo and Videographer</span>{" "}
          From <span className="text-green-600"> Shamli </span>
        </h3>
        <p className="text-gray-600">
          I'm make Photo & Videos based in client work, and I'm very passionate
          and dedicated to my work.
        </p>
        <div className="flex justify-start items-center gap-5 mt-7">
        <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >

          <button className="hover:bg-orange-500 px-8 py-3 max-md:px-6 max-md:py-2 rounded-full transition duration-400 hover:text-white border-2 border-orange-500">
            About Me
          </button>
                </Link>
          <li className="list-none text-3xl hover:text-blue-600">
            <a href="https://www.facebook.com/sachinmalendi" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li className="list-none text-3xl hover:text-orange-500">
            <a
              href="https://www.instagram.com/sachinmalendi07/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="list-none text-3xl hover:text-green-600">
            <a href="">
              <FaWhatsapp />
            </a>
          </li>
        </div>
      </div>
      <div className="right-Section w-1/2 max-sm:hidden max-sm:justify-center flex items-center justify-end">
        <img
          src="https://images.unsplash.com/photo-1568819107248-c5ebc8b62fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="h-[70vh] w-[400px] rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
