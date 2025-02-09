import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="md:max-w-screen-lg md:mx-auto md:py-10 flex gap-2 flex-col md:flex-row md:gap-16">
        <div className="basis-1/2">
          <h1 className="text-[6rem] mb-5 text-center md:text-[10rem] font-medium tracking-tigh leading-none">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 px-10 flex gap-5 ">
          <div className="basis-1/2">
            <h1 className="text-m mb-3 md:text-xl font-normal md:mb-5 opacity-[60%]">Socials</h1>
            {["instagaram", "twitter(X?)", "Linkedin"].map((items, index) => (
              <a className="block text-xs md:text-m mt-2 opacity-[50%] text-normal capitalize" key={index}>
                {items}{" "}
              </a>
            ))}
          </div>
          <div className="basis-1/2">
            <h1 className="text-m mb-3 md:text-xl font-normal md:mb-5 opacity-[60%]">Setmap</h1>
            {["home", "work", "career", "contact"].map((items, index) => (
              <a className="block text-xs md:text-m mt-2 text-normal capitalize" key={index}>
                {items}{" "}
              </a>
            ))}
          </div>
          <div className="basis-3/2 flex flex-col gap-2 md:gap-5 mb-5 items-end">
            <p className="text-m text-right">Refokus is a pioneering digital agency driven by design and empowered by technology</p>
            <img className="w-15 mt-2 md:w-32 md:mt-5" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
