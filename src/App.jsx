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

  const handleClick = (string) => {
    if (string === "AC") {
      setSum([]);
      return;
    }
    let storedEval = [...sum, string];
    setSum(storedEval);
    // if user enters =
    // pass the sum into the evalute function
    // setSum the response so it replaces the screen with the result
  };

  return (
    <>
      <div className="calculator">
        <div className="calculator-screen">{sum}</div>
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
