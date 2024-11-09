import React, { useState } from "react";
import { Link } from "react-router-dom";

const Heading = ({ linkEle, setLinkEle }) => {
  const linkClickBtn = (id) => {
    setLinkEle(
      linkEle.map((ele) =>
        id === ele.id ? { ...ele, active: true } : { ...ele, active: false }
      )
    );
  };
  return (
    <div className="navbar flex justify-between pt-7 pb-3 items-center border-b-2 border-[#31241e]">
      <div className="titleSection flex items-center">
        <Link to={`/`} className="text-[35px] font-semibold text-gray-800">
          BORCELE
        </Link>
      </div>
      <div className="linkSection flex gap-16 items-center">
        {linkEle.map((ele) => (
          <Link
            to={`${ele.link}`}
            key={ele.id}
            onClick={() => linkClickBtn(ele.id)}
            className={`text-[17px] text-gray-700 font-semibold border-b-2 border-[#f6f4f3] hover:border-gray-700 transition-all ease-in-out duration-[100ms] ${
              ele.active === true ? "text-[#b98359] text-[19px]" : ""
            }`}
          >
            {ele.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Heading;
