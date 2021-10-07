import styled from "styled-components";
import Keyboard from "./keyboard";
import NumInput from "./numInput";
import NumDisplay from "./numDisplay";
import React from "react";
import { CalculatorProvider } from "./calculatorContext";
import UndoListener from "./keyListener";
import CalculatorErrorBoundary from "./errorBoundary";

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.appBackground.dark};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
  z-index: 10;
  margin: 30px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 1px
    ${({ theme, disabled }) =>
      disabled ? "null" : theme.colors.shadow.primary};
  font-size: 1.2rem;
  max-width: 90vw;

  @media only screen and (max-width: 600px),
    only screen and (max-height: 600px) {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.appBackground.main};
    box-shadow: none;
    max-width: 98vw;
  }
`;

const Calculator = () => {
  return (
    <StyledDiv>
      <CalculatorErrorBoundary>
        <CalculatorProvider>
          <UndoListener>
            <NumDisplay />
            <NumInput />
            <Keyboard />
          </UndoListener>
        </CalculatorProvider>
      </CalculatorErrorBoundary>
    </StyledDiv>
  );
};

export default Calculator;
