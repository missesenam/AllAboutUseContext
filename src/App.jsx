import React from "react";
import { createContext } from "react";
import ChildComponent from "./assets/component/ChildComponent";
import CountContext from "./assets/component/CountContext";
import ThemeAndUserContext from "./assets/component/ThemeAndUserContext";
import ToggleTheme from "./assets/component/ToggleTheme";
import FormContext from "./assets/component/FormContext";

const MyFirstContext = createContext();

const App = () => {
  const contextValue = "Hello i am a context, nice to meet you";
  return (
    <div>
      <MyFirstContext.Provider value={contextValue}>
        <ChildComponent MyFirstContext={MyFirstContext} />
      </MyFirstContext.Provider>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <CountContext />
        <ThemeAndUserContext />
        <ToggleTheme />
        <FormContext />
      </div>
    </div>
  );
};

export default App;
