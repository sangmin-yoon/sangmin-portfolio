import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  position: fixed;
  z-index: 1;
  background-color: ${(props) => props.theme.color.bgColorBorder};
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
  max-width: ${(props) => props.theme.size.defaultMaxWidth};
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
      <HeaderContainer>
        <Title>SMIN</Title>
        {/* <Nav>
          <NavList>ABOUT</NavList>
          <NavList>SKILLS</NavList>
          <NavList>WORKS</NavList>
          <NavList>CONTACT</NavList>
        </Nav> */}
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
