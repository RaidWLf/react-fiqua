import React from "react";
import farmSalmon from "../assests/farm-salmon-fishing-aerial-fpv-drone-photography--e1634221501867.png";

function Sec4() {
  return (
    <div
      className="sec4 bg-cover bg-center text-white sm:px-24 px-6 py-32 bg-fixed flex flex-col items-center"
      style={{
        backgroundImage: `url(${farmSalmon})`,
      }}
    >
      <p className="font-bold text-lg">Contact Us</p>
      <p className="mt-5 font-bold sm:text-5xl text-2xl sm:w-[800px] text-center">
        BECOME OUR CUSTOMER AND GET OFFER EVERYDAY
      </p>
      <p className="mt-5 sm:w-[500px] text-center mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem minima
        officiis, qui quae ducimus repellendus aspernatur m
      </p>
      <button className="text-sm border rounded-3xl border-white bg-transparent mt-4 px-11 py-4 text-white">
        Contact Us
      </button>
    </div>
  );
}

export default Sec4;
