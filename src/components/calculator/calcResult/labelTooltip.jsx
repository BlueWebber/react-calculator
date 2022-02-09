import styled from "styled-components";
import React from "react";
import Tooltip from "../tooltip";
import {
  changeInput,
  addChar as incrementInput,
  useCalculatorProvider,
} from "../calculatorContext";

const MainLabel = styled.label`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 30vw;
`;

const PaddingTd = styled.td`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: ${({ position }) =>
    position === "left" ? "flex-start" : "flex-end"};
`;

const LabelTooltip = ({ children, isAdd, id, position }) => {
  const [state, dispatch] = useCalculatorProvider();

  return (
    <PaddingTd position={position}>
      <MainLabel
        data-tip={true}
        data-for={id}
        onClick={() =>
          isAdd
            ? incrementInput({ input: state.input, char: children }, dispatch)
            : changeInput({ input: children }, dispatch)
        }
      >
        {children}
      </MainLabel>
      <Tooltip id={id}>{children}</Tooltip>
    </PaddingTd>
  );
};

export default React.memo(LabelTooltip);
