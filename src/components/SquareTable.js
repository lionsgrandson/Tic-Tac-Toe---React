import React, { useState } from "react";

import "./SquareTable.css";

const SquareTable = (props) => {
  const [newInput, setNewInput] = useState("S");
  const [newScore, setNewScore] = useState("");
  let newSrc = 0;
  let WinArrX = [];
  let WinArrO = [];
  const onUserClick = (event) => {
    if (newInput === "X") {
      newSrc = Number(props.dataValue) + Number(newScore);
      for (let i = 0; i < 4; i++) {
        WinArrX[i] = Number(props.dataValue) + Number(newScore);
      }
      setNewInput("O");
    } else {
      newSrc = Number(props.dataValue) + Number(newScore);
      for (let i = 0; i < 4; i++) {
        WinArrO[i] = newSrc;
      }

      // setNewScore(newSrc);
      setNewInput("X");
    }
    if (WinArrX[0] + WinArrX[1] + WinArrX[2] == 18){
console.log("win")
    }
    setNewScore(newSrc);
  };

  const checkUserScore = (Userscore) => {
    const winText = "Win!";
    switch (Userscore[0] + Userscore[1] + Userscore[2]) {
      case 460:
        return winText;
      case 529:
        return winText;
      case 88:
        return winText;
      case 122:
        return winText;
      case 18:
        return winText;
      case 823:
        return winText;
      case 515:
        return winText;
      case 292:
        return winText;
      default:
        return "tried";
    }
  };
  return (
    <td>
      <button
        className={`${
          newInput === "S" ? "" : newInput === "X" ? "inputX" : "inputO"
        }`}
        onClick={onUserClick}
      >
        {newInput + " " + newScore}
      </button>
    </td>
  );
};
export default SquareTable;
