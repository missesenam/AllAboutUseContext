import React from "react";
import { createContext } from "react";
import ChildComponent from "./assets/component/ChildComponent";

const MyFirstContext = createContext();

const App = () => {
  const contextValue = "Hello i am a context, nice to meet you";
  return (
    <div>
      <MyFirstContext.Provider value={contextValue}>
        <ChildComponent MyFirstContext={MyFirstContext} />
      </MyFirstContext.Provider>
    </div>
  );
};

export default App;
