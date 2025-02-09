import React from "react";
import Card from "./Card";

function Cards(){

  return (
    <div className="w-full">
      <div className="w-[90%] md:max-w-screen-lg mx-auto h-[25vh] md:h-[70vh] py-5 flex gap-2 mb-10">
        <Card width={"basis-1/3"} head={true} heading={true} start={false} para={true}/>
        <Card width={"basis-2/3"} mid={true} start={true} para={false} />
      </div>
    </div>
  );
};

export default Cards;