import styled from "styled-components";
import { useThemeProvider } from "../context/theme";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav};
  text-align: center;
  padding: 1rem;
  box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.colors.shadow.primary};

  @media only screen and (max-height: 600px) {
    display: none;
  }
`;

const ThemeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 35px;
  width: 35px;
  font-size: 20px;
  text-align: center;
  border-radius: 50%;
  border: 0;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.button.primary};
`;

const NavBar = () => {
  const [theme, setTheme] = useThemeProvider();

  return (
    <Nav>
      <strong>React Calculator App</strong>
      <ThemeButton
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </ThemeButton>
    </Nav>
  );
};

export default NavBar;
