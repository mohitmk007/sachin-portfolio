// import React from 'react'
import wedding from "../../assets/wedding.jpeg";
import prewedding from "../../assets/prewedding.jpeg";
import birthday from "../../assets/birthday3.jpg";
import photo from "../../assets/photo.jpg";

const Services = () => {
  return (
    <div className="service flex items-center justify-center mb-10  p-16 max-sm:p-8">
      <div className="">
        <div className="flex items-center max-md:flex-col justify-center gap-8 mb-4">
          <div className="relative">
            <img
              className="object-cover border-2 h-[500px] w-[500px] rounded-lg bg-cover"
              src={wedding}
              alt=""
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center backdrop-blur-md p-3">
              <h1 className="text-2xl font-bold text-white">
                Wedding ceremony
              </h1>
            </div>
          </div>
          <div className="relative">
            <img
              className="object-cover h-[500px] w-[500px] rounded-lg"
              src={prewedding}
              alt=""
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center  backdrop-blur-md p-3">
              <h1 className="text-2xl font-bold text-white">
                Pre-Wedding ceremony
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 max-md:flex-col">
          <div className="relative">
            <img
              className="object-cover h-[500px] w-[500px] rounded-lg"
              src={birthday}
              alt=""
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center  backdrop-blur-md p-3">
              <h1 className="text-2xl font-bold text-white  ">
                Birthday Party
              </h1>
            </div>
          </div>
          <div className="relative">
            <img
              className="object-cover h-[500px] w-[500px] rounded-lg"
              src={photo}
              alt=""
            />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center  backdrop-blur-md p-3">
              <h1 className="text-2xl font-bold text-white">Photo shoot</h1>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
