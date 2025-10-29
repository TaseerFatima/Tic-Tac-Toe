import React from "react";

const Square = (props) => {
  return (
    <div
  onClick={props.onClick}
  className="square border border-gray-400 w-[100px] h-[100px] flex items-center justify-center rounded-xl shadow-md"
>
  <h5 className="text-3xl font-extrabold">{props.value}</h5>
</div>

  );
};

export default Square;
