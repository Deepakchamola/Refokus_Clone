import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <div className="w-full px-5 py-2 md:max-w-screen-lg md:mx-auto md:py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center gap-3 md:gap-10">
        <img
          className="h-[10%] w-[30%] scale-1/2"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        />
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span key={index} className="w-[0.1vw] h-7 bg-zinc-600"></span>
          ) : (
            <a key={index} className="font-regular text-[1.6vw] md:text-m relative hover:text-zinc-700 cursor-pointer">
              {index === 1 && (
                <span className="inline-block absolute top-[30%] left-[-35%] w-1 h-1 md:w-2 md:h-2 shadow shadow-green-500 rounded-full bg-green-500 mr-1"></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>

      <Button />
    </div>
  );
}

export default Nav;
