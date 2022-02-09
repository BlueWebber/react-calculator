import styled from "styled-components";
import CalcResult from "./calcResult";
import { useCalculatorProvider } from "./calculatorContext";
import React from "react";

const StyledDiv = styled.table`
  background-color: ${({ theme }) => theme.colors.appBackground.darkMid};
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  height: 30vh;
  border-collapse: collapse;

  & > :first-child {
    margin-top: auto;
  }

  @media only screen and (max-width: 600px),
    only screen and (max-height: 700px) {
    flex-grow: 1;
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
      <tbody>
        {results.map(([input, result, key, key1]) => (
          <CalcResult
            key={key}
            ids={[key, key1]}
            input={input}
            result={result}
          />
        ))}
        <div ref={endRef} />
      </tbody>
    </StyledDiv>
  );
};

export default NumDisplay;
