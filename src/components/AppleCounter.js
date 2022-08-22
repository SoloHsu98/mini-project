import React, { useEffect, useState } from "react";
import "./AppleCounter.css";
import { AiFillApple } from "react-icons/ai";

const AppleCounter = () => {
  const [counter, setCounter] = useState(0);
  const [isExactlyTens, setIsExactlyTens] = useState(false);

  const handleCountChange = (operation) => {
    if (operation === "INC") {
      const count = counter + Math.ceil(Math.random() * 5);
      setCounter(count);
    } else if (operation === "DEC") {
      const count = counter - Math.ceil(Math.random() * 5);
      count < 0 ? setCounter(0) : setCounter(count);
    }
  };

  useEffect(() => {
    counter !== 0 && counter % 10 === 0
      ? setIsExactlyTens(true)
      : setIsExactlyTens(false);
  }, [counter]);

  return (
    <div>
      <h3>
        Total Apples <AiFillApple />
      </h3>
      <h2 className="count"> {counter} </h2>
      <p>
        Exactly in Tens:{" "}
        {isExactlyTens ? (
          <span style={{ color: "green" }}>YES</span>
        ) : (
          <span style={{ color: "red" }}>NO</span>
        )}
      </p>
      <button className="btn" onClick={() => handleCountChange("INC")}>
        Add More Apples
      </button>
      <button className="btn" onClick={() => handleCountChange("DEC")}>
        Eat Some Apples
      </button>
    </div>
  );
};

export default AppleCounter;
