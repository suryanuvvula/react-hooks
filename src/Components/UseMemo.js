import React, { useState, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const mappedNumber = useMemo(() => {
    return displayNumber(number);
  }, [number]);
  function displayNumber(number) {
    for (let i = 0; i < 10000000; i++) {}
    return number * 2;
  }

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <input value={number} onChange={(e) => setNumber(e.target.value)}></input>
      <button onClick={() => setDark((prevValue) => !prevValue)}>
        Change Theme
      </button>
      <p style={themeStyles}>mappedNumber {mappedNumber}</p>
    </div>
  );
}

export default UseMemoExample;
