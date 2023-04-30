import React from "react";

import Fishfresh from "../assests/fish-fresh-sea-bream-raw-dorado-fish-e1634221443191.jpg";
import highAngleMan from "../assests/high-angle-view-of-man-wearing-waders-standing-in-a-river-holding-large-fish-net-with-trout--e1634221477445.jpg";

function Sec3() {
  return (
    <div
      className="sec3 text-white sm:px-24 px-6 sm:py-28 py-16 relative sm:h-[980px]"
      style={{
        background: `linear-gradient(
          90deg,
          rgba(11, 11, 22, 1) 86%,
          rgba(64, 168, 190, 1) 100%
        )`,
      }}
    >
      <img
        src={Fishfresh}
        alt=""
        className="z-0 absolute sm:w-[650px] sm:h-[650px] w-[330px] h-[370px]"
      />
      <div className="z-10 sm:top-[400px] top-[247px] absolute bg-sky w-[320px] h-[450px]">
        <img
          src={highAngleMan}
          alt=""
          className="mt-4 object-fill sm:h-[450px] w-64 sm:w-auto"
        />
      </div>

      <div className="sm:z-20 sm:absolute bg-white text-black sm:p-16 px-6 py-8 sm:w-[650px] sm:top-44 sm:right-32 w-[330px] mt-96 sm:mt-0">
        <p className="text-[#6AC0E9] font-bold text-xl">About Us</p>
        <p className="font-bold text-4xl mt-4">
          WE PRODUCE THE BEST QUALITY PRODUCT
        </p>
        <p className="mt-4 text-[#464848]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim
          laborum necessitatibus inventore, voluptatem placeat ratione. Eos
          obcaecati placeat ad. Culpa officia cumque sit laudantium,
          voluptatibus doloremque numquam commodi dicta.
        </p>
        <div className="flex flex-row sm:ap-x-60 gap-x-32 mt-4 text-[#464848] text-lg">
          <div className="flex flex-col gap-y-1">
            <p>jakjflakj</p>
            <p>jalffjlka</p>
            <p>lakjfl</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p>jakjflakj</p>
            <p>jalffjlka</p>
            <p>lakjfl</p>
          </div>
        </div>
        <button className="text-sm border rounded-3xl border-[#6AC0E9] bg-[#6ac0e9] mt-4 px-11 py-4 text-white">
          About Us
        </button>
      </div>
    </div>
  );
}

export default Sec3;
