import actionTypes from "./actionTypes";
import { evaluateResult } from "./evaluator";

const calculateResult = ({ input, results }, dispatch) => {
  if (!input) return;
  if (Array.isArray(input)) {
    return dispatch({
      type: actionTypes.undoAction,
    });
  } else if (results.length && results[results.length - 1][0] === input) {
    return dispatch({
      type: actionTypes.changeInput,
      payload: { input: [results[results.length - 1][1]] },
    });
  }
  try {
    const result = evaluateResult(input).toString();
    if (result === "Infinity") {
      dispatch({
        type: actionTypes.setError,
        payload: { error: "Overflow: result couldn't be calculated" },
      });
      return dispatch({
        type: actionTypes.resolveCalculation,
        payload: { result: "0" },
      });
    }
    dispatch({
      type: actionTypes.resolveCalculation,
      payload: { result },
    });
  } catch (err) {
    dispatch({
      type: actionTypes.setError,
      payload: { error: "Syntax Error" },
    });
  }
};

const undoAction = ({ actionIndex }, dispatch) => {
  if (actionIndex === 0) {
    dispatch({
      type: actionTypes.setError,
      payload: { error: "No undo history" },
    });
    return;
  }
  dispatch({ type: actionTypes.undoAction });
};

const redoAction = ({ actionIndex, inputHistory }, dispatch) => {
  if (actionIndex === inputHistory.length - 1) {
    dispatch({
      type: actionTypes.setError,
      payload: { error: "No redo history" },
    });
    return;
  }
  dispatch({ type: actionTypes.redoAction });
};

const addChar = ({ input, char }, dispatch) => {
  const isArray = Array.isArray(input);
  if (!isArray) {
    const lastChar = input.slice(-1);
    if (lastChar === char && char === ".") return;
    if (lastChar === char && char === "×") {
      return dispatch({
        type: actionTypes.changeInput,
        payload: { input: input.slice(0, -1) + "^" },
      });
    }
  }

  isArray && !isNaN(char)
    ? dispatch({ type: actionTypes.changeInput, payload: { input: char } })
    : dispatch({ type: actionTypes.incrementInput, payload: { char } });
};

const changeInput = ({ input }, dispatch) => {
  const lastTwo = input.slice(-2);
  if (lastTwo === "..") return;
  if (lastTwo === "××") {
    return dispatch({
      type: actionTypes.changeInput,
      payload: { input: input.slice(0, -1) + "^" },
    });
  }

  dispatch({
    type: actionTypes.changeInput,
    payload: {
      input,
    },
  });
};

export { calculateResult, undoAction, redoAction, addChar, changeInput };
