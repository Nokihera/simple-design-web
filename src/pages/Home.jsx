import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pb-7">
      <div className="py-6">
        <div
          className="imgDiv h-[350px] bg-cover bg-center p-8 flex justify-start items-end"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613697281142-aa38c90fc8dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div>
            <p className="text-[25px] text-[#31241e] font-bold">Clean.</p>
            <p className="text-[25px] text-[#31241e] font-bold">Moisture.</p>
            <p className="text-[25px] text-[#31241e] font-bold">Care.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-full mt-3 flex flex-col items-start gap-3 lg:order-first order-last ">
          <p className="text-justify text-[#31241e] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Link to={`/shop`} className="bg-[#d1c8c1] rounded-full px-10 py-2 text-white text-[20px] font-bold">SHOP NOW</Link>
        </div>
        <div className="grid items-center grid-cols-3 gap-1 w-full ">
            <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMGN1cCUyMGxhbmRzY2FwZSUyMHZpZXd8ZW58MHx8MHx8fDA%3D" alt="" className="h-[190px] w-[190px] object-cover object-center"/>
            <img src="https://images.unsplash.com/photo-1501492673258-2bcfc17241fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZSUyMGN1cCUyMGxhbmRzY2FwZSUyMHZpZXd8ZW58MHx8MHx8fDA%3D" alt="" className="h-[190px] w-[190px] object-cover object-center"/>
            <img src="https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-[190px] w-[190px] object-cover object-center"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
