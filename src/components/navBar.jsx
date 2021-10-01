import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav};
  text-align: center;
  padding: 1rem;
  box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.colors.shadow.primary};
`;

const NavBar = () => {
  return (
    <Nav>
      <strong>React Calculator App</strong>
    </Nav>
  );
};

export default NavBar;
