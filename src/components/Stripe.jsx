import React from "react";

function Stripe({val}){

  return(
    <div className="w-[16.66%] px-2 py-5 mb-10 md:px-4 md:py-5 flex items-center justify-between gap-2 md:gap-1 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-700">
      <img className="w-[10vw] h-[2vh]" src={val.url} alt="" />
      <span className="font-semibold text-[1.7vw] md:text-m">{val.number}</span>
    </div>
  );
};

export default Stripe;