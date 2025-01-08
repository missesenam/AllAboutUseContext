import React, { useState, createContext, useContext } from "react";

const theContext = createContext();
const CountContext = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div
      style={{
        color: "black",
        backgroundColor: "lightgrey",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <div>
        <p>count: {count}</p>
        <button
          style={{ border: "none", padding: "10px" }}
          onClick={handleCount}
        >
          add
        </button>
        <theContext.Provider value={count}>
          <Textcontext />
        </theContext.Provider>
      </div>
    </div>
  );
};

const Textcontext = () => {
  const contHere = useContext(theContext);
  return <div>the curent count is now {contHere}</div>;
};

export default CountContext;
