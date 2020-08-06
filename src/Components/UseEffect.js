import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [resourceType, setResourceType] = useState(() => {
    return "Comments";
  });

  const [items, setItems] = useState(() => {
    return [];
  });

  const [windowSize, setWindowSize] = useState(400);

  const updateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("calls when component unmounts or state changes");
    };
  }, [resourceType]);

  return (
    <div>
      <h2>{windowSize}</h2>
      <button onClick={() => setResourceType("Posts")}>Posts</button>
      <button onClick={() => setResourceType("Users")}>Users</button>
      <button onClick={() => setResourceType("Comments")}>Comments</button>

      <p>{resourceType}</p>
      <p>Items list</p>
      <p>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </p>
    </div>
  );
}
