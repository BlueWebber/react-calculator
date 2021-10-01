import React from "react";
import reducer from "./reducer";
import CalculatorContext from "./context";

const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    input: "",
    error: "",
    results: [],
    inputHistory: [""],
    actionIndex: 0,
  });

  return (
    <CalculatorContext.Provider value={[state, dispatch]}>
      {children}
    </CalculatorContext.Provider>
  );
};

const useCalculatorProvider = () => {
  const context = React.useContext(CalculatorContext);
  if (!context) {
    throw new Error(
      "CalculatorProvider consumer must be in a CalculatorProvider"
    );
  }
  return context;
};

export { CalculatorProvider, useCalculatorProvider };
