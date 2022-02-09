import styled from "styled-components";
import React from "react";
import LabelTooltip from "./labelTooltip";

const StyledDiv = styled.tr`
  background-color: ${({ theme }) => theme.colors.appBackground.darkMid};
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.border.mid};
`;

const SecondaryLabel = styled.label`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: 10vw;
  margin-right: 5vw;
`;

const MaxWidthTd = styled.td`
  width: 100%;
`;

const CalcResult = ({ input, result, ids }) => {
  return (
    <StyledDiv>
      <LabelTooltip id={ids[0]} position="left">
        {input}
      </LabelTooltip>
      <MaxWidthTd>
        <SecondaryLabel>=</SecondaryLabel>
      </MaxWidthTd>
      <LabelTooltip id={ids[1]} isAdd={true} position="right">
        {result}
      </LabelTooltip>
    </StyledDiv>
  );
};

export default React.memo(CalcResult);
