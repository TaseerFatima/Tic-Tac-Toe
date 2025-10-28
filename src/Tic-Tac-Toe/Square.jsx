import React from "react";

const Square = (props) => {
  return (
    <div onClick={props.onClick} className="square border border-gray-500 w-[100%] h-[100px] flex items-center justify-center">
      <h5 className="text-xl font-bold">{props.value}</h5>
    </div>
  );
};

export default Square;
