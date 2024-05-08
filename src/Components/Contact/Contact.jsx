// import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className="contact flex items-center justify-between px-20 mb-9">
        <div className="w-1/2">
          <div className="flex items-center gap-5 mb-9">
            <div className="w-[90px] h-[90px] flex items-center justify-center  rounded-full bg-orange-200">
              <HiLocationMarker className=" text-3xl text-red-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Address</h1>
              <p className="text-xl">Shamli UP (247776)</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <div className="w-[90px] h-[90px] flex items-center justify-center  rounded-full bg-green-200">
              <MdOutlineEmail className=" text-3xl text-green-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Email</h1>
              <p className="text-xl">sachinmalendi983@gmaol.com</p>
            </div>
          </div>{" "}
          <div className="flex items-center gap-5">
            <div className="w-[90px] h-[90px] flex items-center justify-center  rounded-full bg-blue-200">
              <FiPhoneCall className=" text-3xl text-blue-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Phone</h1>
              <p className="text-xl">+91 9837716511</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-3 mb-5">
            <input
              className="w-full h-16 px-7 rounded-xl text-lg border-2"
              type="text"
              placeholder="Yout Name"
            />
            <input
              className="w-full h-16 px-7 rounded-xl text-lg border-2"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="w-full h-16 px-7 rounded-xl text-lg border-2"
              type="text"
              placeholder="Your Phone"
            />
            <input
              className="w-full h-16 px-7 rounded-xl text-lg border-2"
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea
            id="message"
            className="w-full h-52 p-5 border-2 text-lg rounded-xl "
          ></textarea>
          <button className="w-full hover:bg-orange-500 px-8 py-3 rounded-full transition duration-500 hover:text-white border-2 border-orange-500 mt-5">
            Hire Me
          </button>
        </div>
      </div>
      <div className="">
        <iframe
          className="w-full h-[450px] rounded-xl my-32 border-2 border-orange-500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429.3210372798652!2d77.28707699883647!3d29.507903551755298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c29877bec54db%3A0x65dc5830e918a505!2sNew%20Sunrise%20Public%20School!5e0!3m2!1sen!2sin!4v1715106033969!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
