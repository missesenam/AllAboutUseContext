import React from "react";
import { useContext } from "react";

const ChildComponent = ({ MyFirstContext }) => {
  const contextValue = useContext(MyFirstContext);
  return (
    <div>
      <h1
        style={{
          color: "blue",
          backgroundColor: "lightgrey",
          padding: "20px",
          textAlign: "center",
          borderRadius: "8px",
        }}
      >
        {contextValue}
      </h1>
    </div>
  );
};

export default ChildComponent;
