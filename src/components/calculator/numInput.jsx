import styled from "styled-components";
import React from "react";
import {
  useCalculatorProvider,
  calculateResult,
  changeInput,
} from "./calculatorContext";

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.appBackground.mid};
  margin-bottom: 0.5rem;
  min-height: 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

const Form = styled.form`
  align-self: stretch;
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.5rem;
  width: 100%;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

const InvisibleButton = styled.button`
  display: none;
  position: absolute;
`;

const isMobile = () => {
  return !!/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
    navigator.userAgent
  );
};

const NumInput = () => {
  const [state, dispatch] = useCalculatorProvider();
  const inputRef = React.useRef();

  React.useEffect(() => inputRef.current.focus(), []);

  const onSubmit = (e) => {
    e.preventDefault();
    calculateResult(state, dispatch);
  };

  const handleChange = (val) => {
    changeInput(
      { input: isResult && !isNaN(state.input) ? val.slice(-1) : val },
      dispatch
    );
  };

  const isResult = Array.isArray(state.input);

  return (
    <StyledDiv>
      <Form onSubmit={onSubmit}>
        <Input
          ref={inputRef}
          type="text"
          onBlur={isMobile() ? () => inputRef.current.focus() : undefined}
          value={isResult ? state.input[0] : state.input}
          onChange={({ target: { value } }) => handleChange(value)}
          bold={isResult}
        />
        <InvisibleButton type="submit" />
      </Form>
      {state.error && <label>{state.error}</label>}
    </StyledDiv>
  );
};

export default NumInput;
