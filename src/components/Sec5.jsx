import React from "react";

import redMeat from "../assests/red-meat-of-raw-fish-e1634221518834.jpg";
import detailMacro from "../assests/detail-macro-of-aonori-dried-seaweed-flakes-e1634221848674.jpg";
import omega3 from "../assests/omega-3-softgels-fish-oil-capsules-yellow-pills-abstract-background-.jpg";
import hacu from "../assests/high-angle-close-up-of-barramundi-on-ice-ready-to-be-cut-into-portions--e1634221588904.jpg";

function Sec5() {
  return (
    <div
      className="sec5 sm:p-24 px-6 py-24 flex flex-col items-center text-white"
      style={{
        background: `linear-gradient(
          335deg,
          rgba(11, 11, 22, 1) 76%,
          rgba(64, 168, 190, 1) 100%
        )`,
      }}
    >
      <p className="font-bold text-lg text-[#6AC0E9]">Our Product</p>
      <p className="mt-4 sm:text-4xl text-2xl sm:w-[700px] text-center font-bold">
        THE PRODUCT THAT WE PROVIDE FOR YOU IS ALWAYS HIGH QUALITY
      </p>
      <p className="mt-4 text-center sm:w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae non
        perspiciatis consectetur consequatur, perferendis ea eni
      </p>
      <div className="flex sm:flex-row flex-col sm:gap-10 gap-20 sm:mt-11 mt-6 z-10 items-center">
        <img className="w-[380px] h-auto" src={redMeat} alt="" />
        <img className="w-[380px] h-auto" src={detailMacro} alt="" />
        <img className="w-[380px] h-auto" src={omega3} alt="" />
      </div>
      <div className="z-20 flex sm:flex-row flex-col gap-52 sm:gap-44 items-center sm:-mt-11 -mt-[630px]">
        <div className="bg-white text-black px-20 py-4">
          <p className="text-2xl font-bold min-w-max">Fresh Fish</p>
          <p className="text-[#6AC0E9] font-semibold">View Shop</p>
        </div>
        <div className="bg-white text-black px-20 py-4">
          <p className="text-2xl font-bold min-w-max">Sea Weed</p>
          <p className="text-[#6AC0E9] font-semibold">View Shop</p>
        </div>
        <div className="bg-white text-black px-20 py-4">
          <p className="text-2xl font-bold min-w-max">Fish Oil</p>
          <p className="text-[#6AC0E9] font-semibold">View Shop</p>
        </div>
      </div>
      <div className="-mt-40 hidden sm:block">
        <img src={hacu} alt="" className="z-0 h-[500px] w-[1300px]" />
      </div>
    </div>
  );
}

export default Sec5;
