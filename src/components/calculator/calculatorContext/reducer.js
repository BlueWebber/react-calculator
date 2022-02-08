import actionTypes from "./actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.changeInput: {
      return {
        ...state,
        input: action.payload.input,
        inputHistory: [
          ...state.inputHistory.slice(0, state.actionIndex + 1),
          action.payload.input,
        ],
        actionIndex: state.actionIndex + 1,
        error: "",
      };
    }

    case actionTypes.incrementInput: {
      const result = state.input + action.payload.char;
      return {
        ...state,
        input: result,
        inputHistory: [
          ...state.inputHistory.slice(0, state.actionIndex + 1),
          result,
        ],
        actionIndex: state.actionIndex + 1,
        error: "",
      };
    }

    case actionTypes.decrementInput: {
      const result = Array.isArray(state.input)
        ? state.input[0].slice(0, -1)
        : state.input.slice(0, -1);
      return {
        ...state,
        input: result,
        inputHistory: [
          ...state.inputHistory.slice(0, state.actionIndex + 1),
          result,
        ],
        actionIndex: state.actionIndex + 1,
        error: "",
      };
    }

    case actionTypes.resolveCalculation: {
      return {
        ...state,
        input: [action.payload.result],
        results: [
          ...state.results,
          [
            state.input,
            action.payload.result,
            Math.random().toString(),
            Math.random().toString(),
          ],
        ],
        inputHistory: [
          ...state.inputHistory.slice(0, state.actionIndex + 1),
          [action.payload.result],
        ],
        actionIndex: state.actionIndex + 1,
      };
    }

    case actionTypes.undoAction: {
      return {
        ...state,
        input: state.inputHistory[state.actionIndex - 1],
        actionIndex: state.actionIndex - 1,
        error: "",
      };
    }

    case actionTypes.redoAction: {
      return {
        ...state,
        input: state.inputHistory[state.actionIndex + 1],
        actionIndex: state.actionIndex + 1,
        error: "",
      };
    }

    case actionTypes.setError: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    case actionTypes.clearInput: {
      return {
        ...state,
        input: "",
        inputHistory: [
          ...state.inputHistory.slice(0, state.actionIndex + 1),
          "",
        ],
        actionIndex: state.actionIndex + 1,
        error: "",
      };
    }

    default: {
      throw new Error("unknown action of type" + action.type);
    }
  }
}

export default reducer;
