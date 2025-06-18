import React from "react";
import logoImage from "../../../public/logo.png";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className=" ">
      <div className="flex  md:mx-10 flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm   ">
        <div className=" ">
          <div className="flex   items-center  mb-5 gap-2  ">
            <img
              className="h-12 sm:h-16  w-auto"
              src={logoImage}
              alt="bookMyDoc"
            />
            {/* <span className="text-2xl sm:text-3xl font-bold  text-blue-600 ">BookMyDoc</span> */}
          </div>
          <p className="w-2/3  text-base text-slate-600 ">
            BookMyDoc is a convenient online platform for scheduling doctor
            appointments. It offers quick access to specialists, real-time
            availability, and instant confirmations. Simplify your healthcare
            visits with just a few clicks!
          </p>
        </div>
        <div className=" ">
          <p className="font-semibold text-xl uppercase">company</p>
          <ul className="flex flex-col items-start gap-3 mt-5 text-base  text-md text-slate-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className=" ">
          <p className="font-semibold text-xl uppercase">Get in touch</p>
          <ul className="flex flex-col items-start gap-3 mt-5 text-base  text-md text-slate-600">
            <li>+123456789</li>
            <li>bookmydoc@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center flex flex-col gap-2 bg-teal-50 py-4 mb-10">
        <p className="text-slate-600">Copyright ©{year}. All rights reserved.</p>
        <p className="font-semibold ">
          <a
            href="https://www.linkedin.com/in/faisalahmed23/"
            className="text-blue-700"
          >
            Connect with developer
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
