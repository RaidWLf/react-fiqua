import React from "react";

import underWater from "../assests/underwater-view-of-ocean-wave-e1634221665264.jpg";
import pcx from "../assests/PCXJHSB.jpg";

function Sec7() {
  return (
    <div
      className="sec7 sm:p-24 px-6 py-16 bg-fixed text-white flex flex-col items-center"
      style={{
        backgroundImage: `url(${underWater})`,
      }}
    >
      <p className="text-[#6AC0E9] font-semibold text-lg">Testiomonial</p>
      <p className="text-white mt-4 font-bold sm:text-4xl text-2xl">
        WHAT OUR CUSTOMER SAY
      </p>
      <p className="text-white mt-4 text-center sm:w-[550px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, in
        dolores saepe magnam nulla tempora soluta nostrum necessitat
      </p>
      <div className="flex flex-row mt-14 gap-6 overflow-x-auto w-[320px] sm:w-auto h-[350px]">
        <div className="bg-white text-black px-14 py-8 flex flex-col items-center w-[320px] sm:w-auto h-[350px]">
          <img src={pcx} alt="" className="rounded-full w-[100px]" />
          <p className="text-xl font-bold mt-4 min-w-max">Aron Scott</p>
          <p className="mt-1 text-">Customer</p>
          <p className="text-center mt-4 w-[280px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vitae
            placeat aut, enim nobis,
          </p>
        </div>
        <div className="bg-white text-black px-14 py-8 flex flex-col items-center w-[320px] sm:w-auto h-[350px]">
          <img src={pcx} alt="" className="rounded-full w-[100px]" />
          <p className="text-xl font-bold mt-4 min-w-max">Aron Scott</p>
          <p className="mt-1 text-">Customer</p>
          <p className="text-center mt-4 w-[280px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vitae
            placeat aut, enim nobis,
          </p>
        </div>
        <div className="bg-white text-black px-14 py-8 flex flex-col items-center w-[320px] sm:w-auto h-[350px]">
          <img src={pcx} alt="" className="rounded-full w-[100px]" />
          <p className="text-xl font-bold mt-4 min-w-max">Aron Scott</p>
          <p className="mt-1 text-">Customer</p>
          <p className="text-center mt-4 w-[280px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vitae
            placeat aut, enim nobis,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sec7;
