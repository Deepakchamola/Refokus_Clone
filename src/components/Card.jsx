import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, head, heading, mid, start, para }) {
  return (
    <div className={`bg-zinc-800 p-2 md:p-5 rounded-xl ${width} flex flex-col justify-between group hover:bg-violet-900 hover:scale-y-105`}>
      <div className="w-full">
        <div className="up flex text-[1vw] md:text-m justify-between items-center group-hover:px-3">
          <div className="head">
            {head === true ? <h3>Up Next Culture</h3> : <h3>Get in Touch</h3>}
          </div>
          <IoIosArrowRoundForward className="group-hover:ml-3"/>
        </div>
        <div className="heading group-hover:px-3">
          {heading === true ? (
            <h1 className="text-[2vw] md:text-xl font-medium mt-2 md:mt-4"> Who we are</h1>
          ) : (
            <h1 className="text-[2vw] md:text-xl font-medium mt-2 md:mt-4">
              Let's get to it, <br /> together
            </h1>
          )}
        </div>
      </div>
      <div className="down w-full group-hover:px-3">
        {mid && (
          <h1 className="text-2xl md:text-6xl track-tight leading-none">
            Start a Project
          </h1>
        )}

        {start && (
          <button className="px-2 py-1 md:px-4 md:py-2 text-[1.3vw] md:text-sm rounded-full border-[1px] border-zinc-300 mt-5">
            Contact us
          </button>
        )}

        {para && (
          <p className="text-[1.2vw] md:text-sm opacity-[60%]">Explore what drives our team.</p>
        )}
      </div>
    </div>
  );
}

export default Card;
