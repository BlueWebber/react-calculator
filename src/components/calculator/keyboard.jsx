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
  grid-template-columns: repeat(6, auto);
  grid-template-rows: repeat(4, minmax(37px, 50px));
  grid-gap: 5px;
  resize: vertical;
  overflow: auto;
  max-height: 215px;
  min-height: 163px;

  @media only screen and (max-height: 600px) {
    grid-template-rows: repeat(4, minmax(37px, 40px));
    max-height: 175px;
    height: 175px;
  }
`;

const Big = styled.label`
  font-size: 110%;
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
      <CalculatorButton
        onClick={() => addChar("÷")}
        tooltip="Divide"
        shortcut="/"
      >
        ÷
      </CalculatorButton>
      <CalculatorButton
        onClick={() => undoAction(state, dispatch)}
        tooltip="Undo"
        shortcut="Ctrl+Z"
      >
        <Big>⎌</Big>
      </CalculatorButton>
      <CalculatorButton
        onClick={() => dispatch({ type: actionTypes.clearInput })}
        tooltip="Clear Display"
        shortcut="Escape"
      >
        C
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar("4")}>4</CalculatorButton>
      <CalculatorButton onClick={() => addChar("5")}>5</CalculatorButton>
      <CalculatorButton onClick={() => addChar("6")}>6</CalculatorButton>
      <CalculatorButton
        onClick={() => addChar("×")}
        tooltip="Multiply"
        shortcut="*"
      >
        ×
      </CalculatorButton>
      <CalculatorButton
        onClick={() => addChar("(")}
        tooltip="Start Group"
        shortcut="("
      >
        (
      </CalculatorButton>
      <CalculatorButton
        onClick={() => addChar(")")}
        tooltip="End Group"
        shortcut=")"
      >
        )
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar("1")}>1</CalculatorButton>
      <CalculatorButton onClick={() => addChar("2")}>2</CalculatorButton>
      <CalculatorButton onClick={() => addChar("3")}>3</CalculatorButton>
      <CalculatorButton
        onClick={() => addChar("-")}
        tooltip="Subtract"
        shortcut="-"
      >
        -
      </CalculatorButton>
      <CalculatorButton
        onClick={() => addChar("²")}
        tooltip="Square"
        shortcut="Ctrl+2"
      >
        <i>
          x<sup>2</sup>
        </i>
      </CalculatorButton>
      <CalculatorButton
        onClick={() => addChar("√(")}
        tooltip="Square root"
        shortcut="Ctrl+R"
      >
        √
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar("0")}>0</CalculatorButton>
      <CalculatorButton onClick={() => addChar(".")}>.</CalculatorButton>
      <CalculatorButton
        onClick={() => addChar("%")}
        tooltip="Percentage"
        shortcut="%"
      >
        %
      </CalculatorButton>
      <CalculatorButton onClick={() => addChar("+")} tooltip="Add" shortcut="+">
        +
      </CalculatorButton>
      <CalculatorButton
        onClick={() => calculateResult(state, dispatch)}
        column={{ start: 5, end: 2 }}
        type="success"
        tooltip="Calculate Result"
        shortcut="Enter"
      >
        =
      </CalculatorButton>
    </Container>
  );
};

export default Keyboard;
