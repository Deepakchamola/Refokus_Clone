import React from "react";
import { IoMdReturnRight } from "react-icons/io";

function Button({title = 'Get started'}) {
  return(
    <div className="px-1 py-1 min-w-30 md:min-w-32 md:px-3 md:py-2 text-black bg-white rounded-full flex gap-2 items-center justify-between hover:cursor-pointer">
      <span className="text-[1.5vw] md:text-sm font-medium">{title}</span>
      <IoMdReturnRight />
    </div>
  );
};


export default Button;