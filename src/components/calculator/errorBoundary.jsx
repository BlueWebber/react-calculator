import React from "react";
import calcImg from "../../assets/calcErr.svg";
import styled from "styled-components";
import CalculatorButton from "./button";

const CalcImgComp = styled.img.attrs({
  src: calcImg,
  alt: "calculator with an error",
})`
  width: 200px;
  height: 200px;
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.shadow.primary};
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :nth-child(2) {
    margin: 15px 0;
  }
`;

class CalculatorErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledDiv>
          <CalcImgComp />
          <label>Aw snap! you broke the calculator!</label>
          <CalculatorButton
            onClick={() => this.setState({ hasError: false })}
            type="secondary"
          >
            Reload
          </CalculatorButton>
        </StyledDiv>
      );
    }

    return this.props.children;
  }
}

export default CalculatorErrorBoundary;
