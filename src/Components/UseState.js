import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(() => {
    return 5;
  });

  const [state, setState] = useState({ count: 5, theme: "red" });

  const countState = state.count;
  const themeState = state.theme;

  // setCount = (value) => {
  //   return value + 1;
  // };
  function incrementCount() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCountState() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  function decrementCountState() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCountState}>-</button>
      <p>
        {countState}
        {themeState}
      </p>
      <button onClick={incrementCountState}>+</button>
    </div>
  );
}
