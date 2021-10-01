import styled from "styled-components";
import React from "react";

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.appBackground.darkMid};
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.border.mid};
  padding: 5px 20px;
  justify-content: space-between;
`;

const SecondaryLabel = styled.label`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: 15vw;
`;

const CalcResult = ({ input, result }) => {
  if (input === "5") {
    throw new Error("aw snap");
  }

  return (
    <div>
      <StyledDiv>
        <label>{input}</label>
        <SecondaryLabel>=</SecondaryLabel>
        <label>{result}</label>
      </StyledDiv>
    </div>
  );
};

export default React.memo(CalcResult);
