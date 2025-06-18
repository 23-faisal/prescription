import { doctors } from "@/assets/assets_frontend/assets";
import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const TopDoctors = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col items-center gap-4 py-16 text-gray-800 md:mx-10">
      <h1 className="text-3xl font-medium ">Top Doctors To Book</h1>
      <p className="  text-center text-sm ">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 12).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
            key={index}
          >
            <img className="bg-blue-50 " src={item.image} alt={item.name} />
            <div className="p-4 ">
              <div className="flex items-center gap-2  text-sm text-center text-green-500   ">
                <p className="h-2 w-2 rounded-full bg-green-500"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium  ">
                {" "}
                {item.name}
              </p>
              <p className="text-gray-600 text-sm ">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={() => navigate("/doctors")}
        className="text-slate-800 font-medium bg-blue-50 hover:bg-blue-100 mt-12"
      >
        More
      </Button>
    </div>
  );
};

export default TopDoctors;
