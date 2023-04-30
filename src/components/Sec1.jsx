import React from "react";

import sec1bg from "../assests/sec1bg.png";
import fiq2 from "../assests/fiq2.png";
import search from "../assests/search.png";
import hamburger from "../assests/hamburger.png";

function Sec1() {
  return (
    <div
      className="bg-left-top bg-no-repeat bg-cover text-white pb-16"
      style={{ backgroundImage: `url(${sec1bg})` }}
    >
      <div className="px-6 sm:px-28 sm:pt-10 pt-4 text-white">
        <div className="flex flex-row justify-between items-center">
          <div className="min-w-fit">
            <img src={fiq2} alt="" className="w-20 sm:w-44 h-auto" />
          </div>
          <ul className="sm:flex flex-row min-w-fit ml-52 gap-x-12 hidden">
            <li>Home</li>
            <li className="min-w-fit">About Us</li>
            <li>Services</li>
            <li>Pages</li>
            <li className="min-w-fit">Contact Us</li>
          </ul>
          <div className="ml-72 hidden sm:block">
            <img src={search} alt="" className="w-6 h-auto" />
          </div>
          <div className="visible sm:hidden min-w-fit">
            <img src={hamburger} alt="" className="h-auto w-8" />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:px-12 px-4 sm:mt-52 mt-28 items-center">
        <h3 className="text-center sm:text-6xl text-4xl font-bold">
          FRESH FISH DELIVERED FOR YOU
        </h3>
        <p className="text-center text-base max-w-4xl mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsum
          quos sapiente ratione cumque, consequuntur nam eveniet voluptas magni
          sequi fugit sit aut, provident expedita praesentium esse atque quas
          vero!
        </p>
        <div className="flex sm:flex-row flex-col sm:gap-x-20 gap-y-4 sm:gap-y-0 sm:mt-12 mt-6">
          <button className="border rounded-xl border-[#7dd3fc] bg-[#7dd3fc] py-3 px-8">
            Learn More
          </button>
          <button className="border rounded-xl border-white py-3 px-8">
            Contact Us
          </button>
        </div>
      </div>
      <div>
        <div className="flex sm:flex-row flex-col sm:px-24 sm:gap-x-8 gap-y-5 sm:gap-y-0 mt-36 px-6">
          <div className="rounded-xl border border-[#6AC0E9] bg-[#0F121A] px-10 py-16">
            <img src="" alt="" />
            <h2 className="text-2xl">Certified Farm</h2>
            <p className="text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              omnis quod, nobis atque quo asperiores optio. Repellat commodi
              eligendi assumenda perspiciatis,
            </p>
            <p className="text-sm mt-4">Read More</p>
          </div>
          <div className="rounded-xl border border-[#6AC0E9] bg-[#0F121A] px-10 py-16">
            <img src="" alt="" />
            <h2>Organic Farm</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              laborum officia voluptatem amet corporis aliquam voluptatibus
              impedit odio nihil? Obcaecati bla
            </p>
            <p>Read More</p>
          </div>
          <div className="rounded-xl border border-[#6AC0E9] bg-[#0F121A] px-10 py-16">
            <img src="" alt="" />
            <h2>High Quality</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              reprehenderit provident eum aspernatur aperiam illum deleniti cum
              amet. Quibusdam accusanti
            </p>
            <p>Read More</p>
          </div>
        </div>
        <p className="text-center mt-2">
          Dont hesistate to contact us to get better information
          <span className="text-[#6AC0E9] font-bold">Contact Our Sales</span>
        </p>
      </div>
    </div>
  );
}

export default Sec1;
