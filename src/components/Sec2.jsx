import React from "react";
import fishOn from "../assests/fish-on-a-fish-market-e1634221404337.jpg";

function Sec2() {
  return (
    <div
      className="sec2 flex sm:flex-row flex-col sm:px-24 px-6 sm:gap-x-10 text-white sm:py-24 py-12"
      style={{
        background: `linear-gradient(
          335deg,
          rgba(11, 11, 22, 1) 76%,
          rgba(64, 168, 190, 1) 100%
        )`,
      }}
    >
      <div>
        <p className="text-4xl font-bold">WELCOME TO FIQUA</p>
        <button className="text-sm border rounded-3xl border-[#6AC0E9] bg-[#6ac0e9] my-6 px-11 py-4">
          Learn More
        </button>

        <img src={fishOn} className="h-[200px] w-[1800px]" alt="" />
      </div>
      <div className="mt-4 sm:mt-0">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          impedit molestias numquam autem tempora fuga pariatur aliquid facilis
          temporibus maxime mollitia harum quaerat nulla, quis accusamus
          architecto sapiente ut beatae.
        </p>
        <div className="flex sm:flex-row flex-col gap-8 mt-12">
          <div className="bg-[#6AC0E9] py-10 px-7 pr-20">
            <img src="" alt="" />
            <p className="text-7xl">1200</p>
            <p className="px-4 py-2">Fish Per Month</p>
          </div>
          <div className="bg-[#6AC0E9] py-10 px-7 pr-20">
            <img src="" alt="" />
            <p className="text-7xl">1200</p>
            <p className="px-4 py-2">Fish Per Month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec2;
