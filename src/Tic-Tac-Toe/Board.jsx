import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const WinnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of WinnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };
  return (
    <div className="board-container mt-24 mx-auto max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-6 text-center text-gray-700">
      {isWinner ? (
        <>
          <h2 className="text-5xl font-extrabold  text-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
            🏆 {isWinner} Wins the Game!
          </h2>

          <button
            onClick={handleReset}
            className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-80 "
          >
            Play Again
          </button>
        </>
      ) : (
        <>
          <div className="text-gray-800 text-2xl font-semibold mb-4">
            Player {isXTurn ? "X" : "O"}'s turn
          </div>
          <div className="board-row flex justify-evenly items-center">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row flex justify-evenly items-center">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row flex justify-evenly items-center">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
