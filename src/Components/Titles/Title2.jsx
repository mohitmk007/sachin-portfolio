// import React from 'react'

const Title2 = ({ subtitle, title, desc }) => {
  return (
    <>
      <div className="p-10 ">
        <div className=" max-w-[600px] m-auto">
          <h2 className="text-2xl text-orange-600 text-center mb-2 font-semibold">
            {subtitle}
          </h2>
          <h1 className="text-3xl text-center mb-3">{title}</h1>
          <p className="text-lg text-center mb-2 text-gray-700">{desc}</p>
        </div>
      
      </div>
    </>
  );
};

export default Title2;
