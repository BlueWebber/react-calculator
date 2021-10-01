import React from "react";
import {
  useCalculatorProvider,
  calculateResult,
  undoAction,
  redoAction,
  addChar as reducerAddChar,
  actionTypes,
} from "./calculatorContext";

const KeyListener = ({ children }) => {
  const [state, dispatch] = useCalculatorProvider();

  const addChar = React.useCallback(
    (char) => {
      reducerAddChar({ input: state.input, char }, dispatch);
    },
    [state, dispatch]
  );

  React.useEffect(() => {
    function KeyPress(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        calculateResult(state, dispatch);
      } else if (e.keyCode === 27) {
        e.preventDefault();
        dispatch({ type: actionTypes.clearInput });
      } else if (e.keyCode === 191) {
        e.preventDefault();
        addChar("÷");
      } else if (e.ctrlKey && e.shiftKey) {
        if (e.keyCode === 90) {
          e.preventDefault();
          redoAction(state, dispatch);
        }
      } else if (e.ctrlKey) {
        if (e.keyCode === 90) {
          e.preventDefault();
          undoAction(state, dispatch);
        }
        if (e.keyCode === 98) {
          e.preventDefault();
          addChar("²");
        }
        if (e.keyCode === 82) {
          e.preventDefault();
          addChar("√(");
        }
      } else if (e.shiftKey) {
        if (e.keyCode === 56) {
          e.preventDefault();
          addChar("×");
        }
      }
    }

    window.onkeydown = KeyPress;
  }, [state, dispatch, addChar]);

  React.useEffect(() => {
    return () => {
      window.onkeydown = undefined;
    };
  }, []);

  return <>{children}</>;
};

export default KeyListener;
