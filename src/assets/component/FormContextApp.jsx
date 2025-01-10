import React from "react";
import FormContext from "./FormContext";
import Display from "./Display";

const FormContextApp = () => {
  return (
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
