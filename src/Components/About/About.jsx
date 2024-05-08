/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";
import imgSvg from "../../assets/1.png";
const Page = () => {
  return (
    <div className="about bg-cover bg-center min-h-screen flex flex-col md:flex-row">
      {/* Left Section (User Image) */}
      <div className="md:w-1/2  p-8 flex justify-center items-center relative">
        <img
          src="https://marketifythemes.net/html/dizme/img/about/1.jpg"
          alt="User"
          className=" w-[70vh]"
        />
        <div className=" flex items-center absolute top-48 left-24 max-md:top-32 max-md:left-8 text-2xl text-black bg-white p-5 rounded-xl">
          <div className="text-7xl max-lg:text-5xl text-orange-500 pr-5 ">15 </div>
          <div className="leading-6 font-semibold">
            Years of <br /> success
          </div>
        </div>
        <div className=" flex items-center absolute bottom-48 max-md:bottom-16 right-24  text-xl text-black bg-white p-3 rounded-xl">
          <div className="text-5xl max-lg:text-3xl text-green-500 pr-5 ">10K</div>
          <div className="leading-6 font-semibold text-md">
            Total <br />
            Projects
          </div>
        </div>
        <div className=" absolute h-[1px] top-16 left-0 max-md:top-0 text-xl text-black bg-white p-3 rounded-xl">
          <img src={imgSvg} alt="" />
        </div>
      </div>

      {/* Right Section (Text, Button) */}
      <div className="md:w-1/2 bg-white flex flex-col justify-center ">
        <div className="w-[500px] max-md:w-full max-md:p-7 max-xl:w-[400px] mr-16 max-md:text-center">
        <h2 className="text-2xl text-orange-500 md:text-3xl font-semibold mb-4 ">
          I'm Photo & Videographer
        </h2>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 mt-4">
          I Can Click photo and Videos Anything occations you Want
        </h1>
        <p className="text-gray-700 mb-6 text-xl">
          Hello there! I'm a PhotoGrapher, and I'm very passionate and dedicated
          to my work. With 14 years experience as a professional Photo and Video
          Grapher, I have acquired the skills and knowledge necessary to make
          your occations special a success. I enjoy every step of the process,
          from discussion and collaboration.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-100}
          className=" text-black hover:text-gray-700 text-xl cursor-pointer"
        >
          <button className="hover:bg-orange-500 px-8 py-3 max-sm:px-6 max-sm:py-2 rounded-full transition duration-400 hover:text-white border-2 border-orange-500">
            Hire Me
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Page;
