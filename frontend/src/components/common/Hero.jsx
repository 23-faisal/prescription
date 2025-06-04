import { assets } from "@/assets/assets_frontend/assets";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[#1591EA] rounded-lg px-6 md:px-10 lg:px-20  ">
      {/* left section */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <p className="capitalize text-3xl md:text-4xl lg:text-5xl text-white font-semibold  leading-tight  ">
          Book appointment <br /> with trusted doctors.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm  ">
          <img className="w-28" src={assets.group_profiles} alt="doctor" />
          <p>
            Simply browse through your extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment for free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-2 rounded-full text-slate-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 font-bold   "
        >
          Book Appointment
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      {/* right section */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="doctor image"
        />
      </div>
    </div>
  );
};

export default Hero;
