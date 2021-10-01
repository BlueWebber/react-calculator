import styled from "styled-components";
import { memo } from "react";
import Tooltip from "./tooltip";

const StyledCalculatorButton = styled.button`
  background-color: ${({ theme, type }) =>
    theme.colors.button[type || "primary"]};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px
    ${({ theme, disabled }) =>
      disabled ? "null" : theme.colors.shadow.primary};
  grid-column: ${({ column }) =>
    column ? column.start + " / span " + column.end : 0};
  transition: 0.15s ease-in-out;
  font-size: inherit;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme, type }) =>
      theme.colors.button.hover[type || "primary"]};
  }

  &:active {
    background-color: ${({ theme, type }) =>
      theme.colors.button.active[type || "primary"]};
  }
`;

const CalculatorButton = (props) => {
  return (
    <>
      <StyledCalculatorButton
        {...props}
        {...(props.tooltip
          ? { "data-tip": true, "data-for": props.tooltip }
          : null)}
      />
      {props.tooltip && <Tooltip tooltip={props.tooltip} />}
    </>
  );
};

export default memo(CalculatorButton);
