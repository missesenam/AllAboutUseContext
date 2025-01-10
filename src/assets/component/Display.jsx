import React, { useContext } from "react";
import Formcont from "./FormContext";

const Display = () => {
  const { theFormc } = useContext(Formcont);

  return (
    <div style={{ background: "blue" }}>
      <h1>name: {theFormc.username}</h1>
      <h2>email:{theFormc.email}</h2>
    </div>
  );
};

export default Display;
