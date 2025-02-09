import React from "react";
import Button from "./Button";

function Product({ val, mover, i }) {
  return (
    <div className="w-full h-[18rem] text-white py-10">
      <div onMouseEnter={()=>{mover(i)}} className="w-full h-full px-5 md:max-w-screen-lg md:mx-auto flex items-center justify-between gap-10 mb-2 md:mb-10">
        <h1 className="text-[2.5vw] md:text-3xl capitalize font-medium ">{val.title}</h1>
        <div className="w-[32%] md:w-1/3">
          <p className="w-full text-[2vw] mb-2 md:text-[1.3vw] md:mb-3">{val.description}</p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-5">
            {val.live && <Button title='Live Website' />}
            {val.case && <Button title='Case study' />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
