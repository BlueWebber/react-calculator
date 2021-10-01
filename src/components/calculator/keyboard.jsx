import styled from "styled-components";
import CalculatorButton from "./button";
import {
  actionTypes,
  useCalculatorProvider,
  undoAction,
  calculateResult,
  addChar as reducerAddChar,
} from "./calculatorContext";

const Container = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-columns: repeat(6, auto);
  grid-template-rows: repeat(4, 50px);
  grid-gap: 5px;
`;

const Keyboard = () => {
  const [state, dispatch] = useCalculatorProvider();

  const addChar = (char) => {
    reducerAddChar({ input: state.input, char }, dispatch);
  };

  return (
    <Container>
      <CalculatorButton onClick={() => addChar("7")}>7</CalculatorButton>
      <CalculatorButton onClick={() => addChar("8")}>8</CalculatorButton>
      <CalculatorButton onClick={() => addChar("9")}>9</CalculatorButton>
      <CalculatorButton onClick={() => addChar("÷")} tooltip="Divide [/]">
        ÷
      </CalculatorButton>
      <CalculatorButton
        onClick={() => undoAction(state, dispatch)}
        tooltip="Undo [Ctrl+Z]"
      >
        <big>⎌</big>
      </CalculatorButton>
      <CalculatorButton
        onClick={() => dispatch({ type: actionTypes.clearInput })}
        tooltip="Clear Display [Escape]"
      >
        C
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar("4")}>4</CalculatorButton>
      <CalculatorButton onClick={() => addChar("5")}>5</CalculatorButton>
      <CalculatorButton onClick={() => addChar("6")}>6</CalculatorButton>
      <CalculatorButton onClick={() => addChar("×")} tooltip="Multiply [*]">
        ×
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar("(")} tooltip="Start Group [(]">
        (
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar(")")} tooltip="End Group [)]">
        )
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar("1")}>1</CalculatorButton>
      <CalculatorButton onClick={() => addChar("2")}>2</CalculatorButton>
      <CalculatorButton onClick={() => addChar("3")}>3</CalculatorButton>
      <CalculatorButton onClick={() => addChar("-")} tooltip="Subtract [-]">
        -
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar("²")} tooltip="Square [Ctrl+2]">
        <i>
          x<sup>2</sup>
        </i>
      </CalculatorButton>
      <CalculatorButton
        onClick={() => addChar("√(")}
        tooltip="Square root [Ctrl+R]"
      >
        √
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar("0")}>0</CalculatorButton>
      <CalculatorButton onClick={() => addChar(".")}>.</CalculatorButton>
      <CalculatorButton onClick={() => addChar("%")} tooltip="Percentage [%]">
        %
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar("+")} tooltip="Add [+]">
        +
      </CalculatorButton>
      <CalculatorButton
        onClick={() => calculateResult(state, dispatch)}
        column={{ start: 5, end: 2 }}
        type="success"
        tooltip="Calculate Result"
      >
        =
      </CalculatorButton>
    </Container>
  );
};

export default Keyboard;