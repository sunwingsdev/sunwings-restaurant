import { useState, useEffect } from "react";
import { GoPin } from "react-icons/go";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isPin, setIsPin] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleCalculate();
      } else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
      ) {
        handleInput(event.key);
      } else if (
        !isNaN(event.key) ||
        event.key === "." ||
        event.key === "Backspace"
      ) {
        handleInput(event.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = (value) => {
    if (value === "Backspace") {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handlePinToggle = () => {
    setIsPin(!isPin);
  };

  return (
    <div className="flex justify-center items-center bg-gray-200 py-4">
      <div
        className={`bg-white rounded-lg shadow-lg p-8 ${
          isPin ? "fixed top-20 right-20" : "static"
        }`}
      >
        <div onClick={handlePinToggle} className="flex justify-end py-3">
          <GoPin size={35} />
        </div>
        <div className="flex flex-col items-end space-y-4">
          {result ? (
            <div className="border border-gray-300 rounded-md px-4 py-2 text-4xl w-80 text-right">
              {result}
            </div>
          ) : (
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 text-4xl w-80 text-right"
              value={input}
              readOnly
              placeholder="0"
            />
          )}
          <div className="grid grid-cols-4 gap-4 w-80">
            <button
              onClick={handleClear}
              className="btn bg-red-500 text-white col-span-2"
            >
              Clear
            </button>
            <button
              onClick={() => handleInput("Backspace")}
              className="btn bg-gray-500 text-white col-span-2"
            >
              Backspace
            </button>
            {["7", "8", "9", "/"].map((value) => (
              <button
                key={value}
                onClick={() => handleInput(value)}
                className="btn"
              >
                {value}
              </button>
            ))}
            {["4", "5", "6", "*"].map((value) => (
              <button
                key={value}
                onClick={() => handleInput(value)}
                className="btn"
              >
                {value}
              </button>
            ))}
            {["1", "2", "3", "-"].map((value) => (
              <button
                key={value}
                onClick={() => handleInput(value)}
                className="btn"
              >
                {value}
              </button>
            ))}
            <button onClick={() => handleInput("0")} className="btn col-span-2">
              0
            </button>
            <button onClick={() => handleInput(".")} className="btn">
              .
            </button>
            <button onClick={() => handleInput("+")} className="btn">
              +
            </button>
            <button
              onClick={handleCalculate}
              className="btn bg-blue-500 text-white col-span-4 row-span-2"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
