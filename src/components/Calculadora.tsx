"use client";
import { exp, typeOf } from "mathjs";
import { useState } from "react";

export default function Calculadora() {
  const [display, setDisplay] = useState<string>("");

  const addOperator = (operator: string) => {
    if (
      display.endsWith("+") ||
      display.endsWith("-") ||
      display.endsWith("*") ||
      display.endsWith("/")
    )
      return;
    setDisplay(display + operator);
  };

  const del = () => {
    setDisplay(display.slice(0, -1));
  };

  const operation = (numbers: string[]) => {
    let result = null;
    if (numbers[1] === "+") {
      result = parseFloat(numbers[0]) + parseFloat(numbers[2]);
    } else if (numbers[1] === "-") {
      result = parseFloat(numbers[0]) - parseFloat(numbers[2]);
    } else if (numbers[1] === "*") {
      result = parseFloat(numbers[0]) * parseFloat(numbers[2]);
    } else if (numbers[1] === "/") {
      result = parseFloat(numbers[0]) / parseFloat(numbers[2]);
    }
    return result;
  };

  const handleOperations = () => {
    let expression = display.match(/\d+|[+\-*/]/g) || [""];

    while (true) {
      while (true) {
        const multIndex = expression.indexOf("*");
        const divIndex = expression.indexOf("/");
        if (multIndex === -1 && divIndex === -1) {
          break;
        } else if (multIndex !== -1 && divIndex !== -1) {
          const smallestIndex = Math.min(multIndex, divIndex);
          const result = operation(
            expression.slice(smallestIndex - 1, smallestIndex + 2)
          );
          expression.splice(smallestIndex - 1, 3, String(result));
        } else {
          if (multIndex !== -1) {
            const result = operation(
              expression.slice(multIndex - 1, multIndex + 2)
            );
            expression.splice(multIndex - 1, 3, String(result));
          } else if (divIndex !== -1) {
            const result = operation(
              expression.slice(divIndex - 1, divIndex + 2)
            );
            expression.splice(divIndex - 1, 3, String(result));
          }
        }
      }
      while (true) {
        const sumIndex = expression.indexOf("+");
        const subIndex = expression.indexOf("-");
        if (sumIndex === -1 && subIndex === -1) {
          break;
        } else if (sumIndex !== -1 && subIndex !== -1) {
          const smallestIndex = Math.min(sumIndex, subIndex);
          const result = operation(
            expression.slice(smallestIndex - 1, smallestIndex + 2)
          );
          expression.splice(smallestIndex - 1, 3, String(result));
        } else {
          if (sumIndex !== -1) {
            const result = operation(
              expression.slice(sumIndex - 1, sumIndex + 2)
            );
            expression.splice(sumIndex - 1, 3, String(result));
          } else if (subIndex !== -1) {
            const result = operation(
              expression.slice(subIndex - 1, subIndex + 2)
            );
            expression.splice(subIndex - 1, 3, String(result));
          }
        }
      }
      setDisplay(String(expression));
      break;
    }
  };

  return (
    <div className="p-4 w-full border-2 border-purple-600 bg-gray-100 rounded-2xl">
      <div className="flex items-center overflow-x-auto hidden-scroll text-white font-bold w-full h-28 p-4 border-2 border-purple-600 bg-gray-700 text-2xl rounded-2xl mb-4">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => setDisplay("")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          C
        </button>
        <button
          onClick={() => addOperator("/")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          /
        </button>
        <button
          onClick={() => addOperator("*")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          *
        </button>
        <button
          onClick={() => del()}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          Del
        </button>
        <button
          onClick={() => setDisplay(display + "1")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          1
        </button>
        <button
          onClick={() => setDisplay(display + "2")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          2
        </button>
        <button
          onClick={() => setDisplay(display + "3")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          3
        </button>
        <button
          onClick={() => addOperator("+")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          +
        </button>
        <button
          onClick={() => setDisplay(display + "4")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          4
        </button>
        <button
          onClick={() => setDisplay(display + "5")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          5
        </button>
        <button
          onClick={() => setDisplay(display + "6")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          6
        </button>
        <button
          onClick={() => addOperator("-")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          -
        </button>
        <button
          onClick={() => setDisplay(display + "7")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          7
        </button>
        <button
          onClick={() => setDisplay(display + "8")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          8
        </button>
        <button
          onClick={() => setDisplay(display + "9")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150"
        >
          9
        </button>
        <button
          onClick={() => handleOperations()}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150 row-span-2"
        >
          =
        </button>
        <button
          onClick={() => setDisplay(display + "0")}
          className="border-2 border-purple-600 bg-purple-200 h-20 rounded-2xl cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all ease-in-out duration-150 col-span-4"
        >
          0
        </button>
      </div>
    </div>
  );
}
