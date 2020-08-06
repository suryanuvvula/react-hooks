import React, { useState, useEffect, useRef } from "react";

const UseRefExample = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  const inputRef = useRef();
  const prevName = useRef("");

  useEffect(() => {
    count.current = count.current + 1;
    prevName.current = name;
  });

  function focus() {
    return inputRef.current.focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>My name is {name}</p>
      <p>
        My prevName is {prevName.current} and my current name is {name}
      </p>
      <p>Count {count.current}</p>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default UseRefExample;
