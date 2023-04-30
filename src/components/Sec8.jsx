import React from "react";

import highPerson from "../assests/high-angle-close-up-of-person-holding-freshly-caught-trout-at-a-fish-farm-raising-trout-1-1.jpg";

function Sec8() {
  return (
    <div className="sec8 flex flex-col sm:p-24 px-6 py-16 bg-black text-white">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center items-start">
        <div>
          <p className="text-[#6AC0E9] font-semibold text-lg">Our News</p>
          <p className="text-white mt-4 font-bold sm:text-4xl text-2xl">
            NEWS & ARTICLES
          </p>
        </div>
        <button className="text-sm border rounded-3xl border-[#6AC0E9] bg-[#6ac0e9] sm:mt-4 mt-6 px-11 py-4 text-white">
          View More
        </button>
      </div>
      <div className="mt-8 flex sm:flex-row flex-col flex-wrap gap-y-7">
        <div className="sm:w-[50%] flex sm:flex-row flex-col gap-x-6">
          <div>
            <img src={highPerson} alt="" className="w-[300px]" />
          </div>
          <div className="w-[250px] mt-4 sm:mt-0">
            <p className="text-xl font-bold">
              Alaska salmon smashes records to end season on a high note
            </p>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantiu
              skalfjsl aoguwof lsjlfasa
            </p>
            <p className="text-[#6AC0E9] font-semibold mt-2">Read More</p>
          </div>
        </div>
        <div className="sm:w-[50%] flex sm:flex-row flex-col gap-x-6">
          <div>
            <img src={highPerson} alt="" className="w-[300px]" />
          </div>
          <div className="w-[250px] mt-4 sm:mt-0">
            <p className="text-xl font-bold">
              Alaska salmon smashes records to end season on a high note
            </p>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantiu
              skalfjsl aoguwof lsjlfasa
            </p>
            <p className="text-[#6AC0E9] font-semibold mt-2">Read More</p>
          </div>
        </div>
        <div className="sm:w-[50%] flex sm:flex-row flex-col gap-x-6">
          <div>
            <img src={highPerson} alt="" className="w-[300px]" />
          </div>
          <div className="w-[250px] mt-4 sm:mt-0">
            <p className="text-xl font-bold">
              Alaska salmon smashes records to end season on a high note
            </p>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantiu
              skalfjsl aoguwof lsjlfasa
            </p>
            <p className="text-[#6AC0E9] font-semibold mt-2">Read More</p>
          </div>
        </div>
        <div className="sm:w-[50%] flex sm:flex-row flex-col gap-x-6">
          <div>
            <img src={highPerson} alt="" className="w-[300px]" />
          </div>
          <div className="w-[250px] mt-4 sm:mt-0">
            <p className="text-xl font-bold">
              Alaska salmon smashes records to end season on a high note
            </p>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantiu
              skalfjsl aoguwof lsjlfasa
            </p>
            <p className="text-[#6AC0E9] font-semibold mt-2">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec8;
