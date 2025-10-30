import React from "react";

const Square = (props) => {
  const { value, onClick } = props;

  return (
    <div
      onClick={onClick}
      className="square border border-gray-400 w-[110px] h-[110px] flex items-center justify-center 
                 rounded-xl shadow-md cursor-pointer hover:bg-gray-100"
    >

      {value === "X" && (
        <div className="relative w-12 h-12">
          
          <span className="absolute top-0 left-1/2 w-1 h-full bg-indigo-600  rotate-45 rounded"></span>
          <span className="absolute top-0 left-1/2 w-1 h-full bg-indigo-600 -rotate-45 rounded"></span>
        </div>
      )}
      {value === "O" && (
        <div className="w-12 h-12 border-[6px] border-pink-500 rounded-full"></div>
      )}
    </div>
  );
};

export default Square;
