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
`;

const LabelTooltip = ({ children, isAdd, id }) => {
  const [state, dispatch] = useCalculatorProvider();

  return (
    <>
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
    </>
  );
};

export default React.memo(LabelTooltip);
