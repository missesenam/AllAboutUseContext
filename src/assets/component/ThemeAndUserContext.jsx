import React, { createContext, useState, useContext } from "react";

const themeContext = createContext();
const UserContext = createContext();

const ThemeAndUserContext = () => {
  const theme = { text: "#ff5733", background: "#f0e6e6" };
  const user = { username: "loane", age: 26 };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <themeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <MultipleContext />
        </UserContext.Provider>
      </themeContext.Provider>
    </div>
  );
};

const MultipleContext = () => {
  const themecont = useContext(themeContext);
  const usecont = useContext(UserContext);
  return (
    <div
      style={{
        backgroundColor: themecont.background,
        color: themecont.text,
        padding: "20px",
        borderRadius: "10px",
        textTransform: "uppercase",
      }}
    >
      <h1>{usecont.username}</h1>
      <h2>{usecont.age}</h2>
    </div>
  );
};

export default ThemeAndUserContext;
