import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [sum, setSum] = useState("");
  const [lastResult, setLastResult] = useState(null);
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

  // Used to convert symbols to actual text that can be used in evaluate.
  const operatorMapping = {
    "÷": "/",
    X: "*",
    x10x: "e",
  };

  const handleClick = (string) => {
    // Each switch statement does a specific function related to that button,
    // else it uses the default which just adds the value of string to sum
    switch (string) {
      case "AC":
        setSum([]);
        break;
      case "DEL":
        setSum(sum.slice(0, -1));
        break;
      case "=":
        const sumString = sum
          .map((item) => operatorMapping[item] || item)
          .join("");
        const result = evaluate(sumString);
        console.log(result);
        setSum([result]);
        setLastResult(result);
        break;
      case "Ans":
        if (lastResult !== null) {
          let storedEval = [...sum, lastResult];
          setSum(storedEval);
          console.log(sum);
        }
        break;
      default:
        let storedEval = [...sum, string];
        setSum(storedEval);
        break;
    }
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
