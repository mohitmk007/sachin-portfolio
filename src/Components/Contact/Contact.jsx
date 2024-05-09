// import React from 'react'
import emailjs from "emailjs-com";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  function sendmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_bbjdm5l",
      "template_wwscmvu",
      e.target,
      "v4VQMD_G0yeWp64Ka"
    ).then(res=>{
    }).catch(err=>console.log(err))
  }
  return (
    <>
      <div className="contact flex items-center max-lg:flex-col justify-between px-16 max-sm:px-8 mb-9 gap-5 ">
        <div className="w-1/2   max-lg:w-full">
          <div className="flex items-center gap-5 mb-9 w-full  ">
            <div className="w-[90px] h-[90px] max-sm:w-[80px] max-sm:h-[80px] flex items-center justify-center  rounded-full bg-orange-200">
              <HiLocationMarker className=" text-3xl max-sm:text-2xl text-red-500" />
            </div>
            <div>
              <h1 className="text-3xl max-sm:text-2xl font-bold">Address</h1>
              <p className="text-xl max-sm:text-lg">Shamli UP (247776)</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mb-9">
            <div className="w-[90px] h-[90px] max-sm:w-[80px] max-sm:h-[80px] flex items-center justify-center  rounded-full bg-green-200">
              <MdOutlineEmail className=" text-3xl " />
            </div>
            <div>
              <h1 className="text-3xl max-sm:text-2xl font-bold">Email</h1>
              <p className="text-xl max-sm:text-lg">sachin983@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-[90px] h-[90px] max-sm:w-[80px] max-sm:h-[80px] flex items-center justify-center  rounded-full bg-blue-200">
              <FiPhoneCall className="text-3xl " />
            </div>
            <div>
              <h1 className="text-3xl max-sm:text-2xl font-bold">Phone</h1>
              <p className="text-xl max-sm:text-lg">+91 9837716511</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full  ">
          <form onSubmit={sendmail}>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3 mb-5">
              <input
                className="w-full h-16 px-7 max-[500px]:h-14 max-[500px]:px-5 rounded-xl text-lg border-2"
                type="text"
                name="name"
                placeholder="Yout Name"
              />
              <input
                className="w-full h-16 px-7 rounded-xl text-lg border-2 max-[500px]:h-14 max-[500px]:px-5"
                type="email"
                name="user_email"
                placeholder="Your Email"
              />
              <input
                className="w-full h-16 px-7 rounded-xl text-lg border-2 max-[500px]:h-14 max-[500px]:px-5"
                type="text"
                name="number"
                placeholder="Your Phone"
              />
              <input
                className="w-full h-16 px-7 rounded-xl text-lg border-2 max-[500px]:h-14 max-[500px]:px-5"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <textarea
              id="message"
              name="message"
              className="w-full h-52 p-5 border-2 text-lg rounded-xl max-[500px]:h-40 max-[500px]:p-1 max-[500px]:text-base"
            ></textarea>
            <input
              type="submit"
              value="send"
              className="w-full hover:bg-orange-500 px-8 py-3 rounded-full transition duration-500 hover:text-white border-2 border-orange-500 mt-5"
            ></input>
          </form>
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
