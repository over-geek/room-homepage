import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import Carousel from "./Carousel";
import theme from "../utils/theme";

const Header = () => {
  return (
    <>
      <MobileMenu />
      <HeaderContainer>
        <Carousel />
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  height: 100vh;
  overflow: hidden;

  ${theme.mediaQueries.tablet} {
    max-height: 80vh;
  }

  ${theme.mediaQueries.desktop} {
    height: 65vh;
  }
`

export default Header;