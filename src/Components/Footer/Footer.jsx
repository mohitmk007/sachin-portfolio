// import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="flex max-sm:flex-col max-sm:p-8  justify-between items-center p-16  bg-gray-300">
        <div className="max-sm:mb-8">
          <h2 className="text-gray-700 text-xl">Developed with love by Sachin © 2024</h2>
        </div>
        <div className="flex items-center  justify-center gap-10 text-gray-700 text-xl">
          <h2 className="cursor-pointer">Terms & Condition</h2>
          <h2 className="cursor-pointer">Privacy Policy</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
