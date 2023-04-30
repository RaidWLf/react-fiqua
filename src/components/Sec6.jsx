import React from "react";

import fishBoat from "../assests/fishing-boats-and-fishing-net-in-port-e1634221604258-pek290cxvd0ys8ilr5immnh1fh0ky57hwmgy36a0vs.jpg";
import catchinFish from "../assests/catching-a-big-fish-e1634221627405-pekuylo0yzxpbz60axg1etu0yikn0ehvcfg1qpreuw.jpg";

function Sec6() {
  return (
    <div className="sec6 sm:px-24 px-6 py-11 bg-[#0B0B16] flex sm:flex-row flex-col gap-10 pb-24">
      <div className="sm:w-[75%] pr-8 basis-1/2">
        <p className="text-[#6AC0E9] font-semibold">Why Choose Us</p>
        <p className="text-white mt-4 font-bold sm:text-4xl text-2xl">
          MEASURE THE BEST QUALITY FROM THE LAND & SEA
        </p>
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          maiores sit dolores tempora nesciunt excepturi reiciendis illum veniam
          eum rerum, architecto necessitatibus optio molestias nisi quisquam
          dolore explicabo soluta rem.
        </p>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="sm:mt-3">
        <img src={fishBoat} alt="" className="z-0 sm:ml-28 sm:w-[500px]" />
        <img
          src={catchinFish}
          alt=""
          className="z-10 sm:-mt-[420px] sm:w-[350px] w-52 mx-auto sm:mx-0 -mt-[220px]"
        />
      </div>
    </div>
  );
}

export default Sec6;
