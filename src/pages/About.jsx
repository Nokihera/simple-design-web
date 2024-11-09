import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-2 pt-7 items-start">
      <img
        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-[470px] w-[470px] object-cover"
      />
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-[17px] font-semibold text-[#31241e]">CEO</h2>
          <h2 className="text-[30px] font-bold text-[#31241e]">
            Olivia Wilson
          </h2>
        </div>
        <p className="text-[15px] text-[#31241e]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-[16px] text-[#31241e]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex justify-end">
          <button className="bg-[#d1c8c1] rounded-full px-10 py-2 text-white text-[17px] font-bold">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
