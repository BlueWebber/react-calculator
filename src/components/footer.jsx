import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  text-align: center;
  padding-bottom: 5px;

  @media only screen and (max-height: 600px) {
    display: none;
  }
`;

const Footer = () => {
  return <StyledFooter>Made with ❤️ by BlueForced</StyledFooter>;
};

export default Footer;
