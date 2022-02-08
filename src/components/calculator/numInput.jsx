import styled from "styled-components";
import React from "react";
import {
  useCalculatorProvider,
  calculateResult,
  changeInput,
} from "./calculatorContext";
import { useIsMobile } from "../../context/isMobile";

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

  @media only screen and (max-height: 600px) {
    min-height: 2.6rem;
  }
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

const ErrorLabel = styled.label`
  text-align: left;
  @media only screen and (max-height: 600px) {
    font-size: 90%;
  }
`;

const NumInput = () => {
  const [state, dispatch] = useCalculatorProvider();
  const inputRef = React.useRef();
  const isMobile = useIsMobile();

  React.useLayoutEffect(() => {
    if (isMobile) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  }, [isMobile, state.input]);

  const onSubmit = (e) => {
    e.preventDefault();
    calculateResult(state, dispatch);
  };

  const handleChange = (val) => {
    changeInput(
      { input: isResult && !isNaN(val) ? val.slice(-1) : val },
      dispatch
    );
  };

  const isResult = Array.isArray(state.input);

  return (
    <StyledDiv>
      <Form onSubmit={onSubmit} spellCheck={false}>
        <Input
          ref={inputRef}
          type="text"
          autoFocus={true}
          readOnly={isMobile}
          onBlur={!isMobile ? () => inputRef.current.focus() : null}
          value={isResult ? state.input[0] : state.input}
          onChange={({ target: { value } }) => handleChange(value)}
          bold={isResult}
        />
        <InvisibleButton type="submit" />
      </Form>
      {state.error && <ErrorLabel>{state.error}</ErrorLabel>}
    </StyledDiv>
  );
};

export default NumInput;
