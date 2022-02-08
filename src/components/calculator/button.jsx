import styled from "styled-components";
import { memo } from "react";
import Tooltip from "./tooltip";
import React from "react";
import { useIsMobile } from "../../context/isMobile";

const StyledCalculatorButton = styled.button`
  background-color: ${({ theme, type }) =>
    theme.colors.button[type || "primary"]};
  color: ${({ theme, type }) => theme.colors.button.text[type || "primary"]};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px
    ${({ theme, disabled }) =>
      disabled ? "null" : theme.colors.shadow.primary};
  grid-column: ${({ column }) =>
    column ? column.start + " / span " + column.end : 0};
  font-size: inherit;

  &:hover {
    background-color: ${({ theme, type }) =>
      theme.colors.button.hover[type || "primary"]};
  }

  &:active {
    background-color: ${({ theme, type }) =>
      theme.colors.button.active[type || "primary"]};
  }

  @media only screen and (max-width: 600px) {
    transition: 0s;
  } ;
`;

const CalculatorButton = (props) => {
  const isMobile = useIsMobile();
  const tooltipText = React.useMemo(
    () =>
      props.tooltip
        ? isMobile
          ? props.tooltip
          : `${props.tooltip} [${props.shortcut}]`
        : null,
    [isMobile, props.shortcut, props.tooltip]
  );

  return (
    <>
      <StyledCalculatorButton
        {...props}
        {...(props.tooltip
          ? {
              "data-tip": true,
              "data-for": tooltipText,
            }
          : null)}
      />
      {props.tooltip && <Tooltip>{tooltipText}</Tooltip>}
    </>
  );
};

export default memo(CalculatorButton);
