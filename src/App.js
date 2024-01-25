import React, { useState } from "react";

import SquareTable from "./components/SquareTable";
import "./App.css";

const App = () => {
  return (
    <header>
      <h1 className="center">Tic-Tac-Toe</h1>
      <table>
        <tr>
          <SquareTable dataValue="7"></SquareTable>
          <SquareTable dataValue="8"></SquareTable>
          <SquareTable dataValue="500"></SquareTable>
        </tr>
        <tr>
          <SquareTable dataValue="2"></SquareTable>
          <SquareTable dataValue="20"></SquareTable>
          <SquareTable dataValue="100"></SquareTable>
        </tr>
        <tr>
          <SquareTable dataValue="9"></SquareTable>
          <SquareTable dataValue="60"></SquareTable>
          <SquareTable dataValue="223"></SquareTable>
        </tr>
      </table>
    </header>
    // Button, when clicked it toggles between x and o, the player decides what to keep it on.
    // if something is on X or O you check to see if button index
  );
};
export default App;
