import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [sum, setSum] = useState("");
  const simpleButtons = [
    "7",
    "8",
    "9",
    "DEL",
    "AC",
    "4",
    "5",
    "6",
    "X",
    "÷",
    "1",
    "2",
    "3",
    "+",
    "-",
    "0",
    ".",
    "x10x",
    "Ans",
    "=",
  ];
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "+",
    "*",
    "/",
  ];
  const hello = [1, 2, 3, 4, 5];

  const handleClick = (string) => {
    // if user enters =
    // pass the sum into the evalute function
    // setSum the response so it replaces the screen with the result
  };

  return (
    <>
      <div className="calculator">
        <div className="calculator-screen">245245 42 World</div>
        <div className="calculator-buttons">
          {simpleButtons.map((simpleButton, index) => {
            return (
              <button
                className={`button-${simpleButton}`}
                key={index}
                onClick={() => handleClick(simpleButton)}
              >
                {simpleButton}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
