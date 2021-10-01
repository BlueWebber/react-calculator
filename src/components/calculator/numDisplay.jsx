import styled from "styled-components";
import CalcResult from "./calcResult";
import { useCalculatorProvider } from "./calculatorContext";
import React from "react";

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.appBackground.darkMid};
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  height: 30vh;

  & > :first-child {
    margin-top: auto;
  }

  @media only screen and (max-width: 600px) {
    height: 40vh;
  }
`;

const NumDisplay = () => {
  const [{ results }] = useCalculatorProvider();
  const endRef = React.useRef();
  React.useLayoutEffect(() => {
    endRef.current.scrollIntoView();
  }, [results]);
  return (
    <StyledDiv>
      {results.map(([input, result, key]) => (
        <CalcResult key={key} input={input} result={result} />
      ))}
      <div ref={endRef} />
    </StyledDiv>
  );
};

export default NumDisplay;
