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

  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%),
    inset 0 -8px 8px -8px rgb(0 0 0 / 30%);

  @media screen and (max-width: ${(props) => props.theme.size.mobileMaxWidth}) {
    bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
  max-width: ${(props) => props.theme.size.defaultMaxWidth};

  @media screen and (max-width: ${(props) => props.theme.size.mobileMaxWidth}) {
    padding: 0px 10px;
  }
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

function Header({ onlyPC, scrollTo }) {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Title>SMIN</Title>
        {!onlyPC && (
          <Nav>
            <NavList onClick={scrollTo.about}>ABOUT</NavList>
            <NavList onClick={scrollTo.skills}>SKILLS</NavList>
            <NavList onClick={scrollTo.works}>WORKS</NavList>
          </Nav>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
