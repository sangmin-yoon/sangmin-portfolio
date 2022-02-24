import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1;
  max-width: ${(props) => props.theme.size.DefaultMaxWidth};
  color: white;
`;

const Title = styled.h1`
  font-size: 25px;
  letter-spacing: 5px;
  color: ${(props) => props.theme.color.mainColor};
`;

const Nav = styled.nav`
  display: flex;
`;

const NavList = styled.div`
  letter-spacing: 2px;
  font-weight: 200;
  color: ${(props) => props.theme.color.subColor};

  &&:not(:last-child) {
    margin-right: 8px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>SSMIN</Title>
      <Nav>
        <NavList>ABOUT</NavList>
        <NavList>SKILLS</NavList>
        <NavList>WORKS</NavList>
        <NavList>CONTACT</NavList>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
