import styled from "styled-components";
import React from "react";
import LabelTooltip from "./labelTooltip";

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.appBackground.darkMid};
  display: flex;
  flex-grow: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border.mid};
  padding: 5px 20px;
  justify-content: space-between;
`;

const SecondaryLabel = styled.label`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: 10vw;
  margin-right: 5vw;
`;

const CalcResult = ({ input, result, ids }) => {
  return (
    <StyledDiv>
      <LabelTooltip id={ids[0]}>{input}</LabelTooltip>
      <SecondaryLabel>=</SecondaryLabel>
      <LabelTooltip id={ids[1]} isAdd={true}>
        {result}
      </LabelTooltip>
    </StyledDiv>
  );
};

export default React.memo(CalcResult);
