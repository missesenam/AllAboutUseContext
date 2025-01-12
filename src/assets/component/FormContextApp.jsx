import React, { useState } from "react";
import FormContext from "./FormContext";
import Display from "./Display";

const FormContextApp = () => {
  const [data, setData] = useState("");
  return (
    // a comment
    <div
      style={{
        backgroundColor: "red",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2rem",
        padding: "5px",
      }}
    >
      <FormContext />
      {/* <Display /> */}
    </div>
  );
};

export default FormContextApp;
