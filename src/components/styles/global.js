import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    background-color: ${({ theme }) => theme.colors.appBackground.main};
  }

  html, body, #root {
    @media only screen and (max-width: 600px), 
      only screen and (max-height: 700px) {
      height: 100%;
    };
  }

  main {
    @media only screen and (max-width: 600px) {
      height: 85%;
      margin-top: 5px;
    }
    @media only screen and (max-height: 600px) {
      height: 97%;
      padding-top: 5px;
    }
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  main {
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
  }

  button {
    transition: 0.15s ease-in-out;
    &:hover {
      cursor: pointer;
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.shadow.primary};
  }
 
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbar};
    border-radius: 10px;
  }
`;

export default GlobalStyle;
