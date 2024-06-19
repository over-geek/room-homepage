import { useEffect, useState } from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import '../App.css'
import logo from '../assets/images/logo.svg'

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navToggle = () => {
    const btn = document.getElementById('menu-btn')
    const overlay = document.getElementById("overlay");
    const menu =  document.getElementById('mobile-menu')
    const hamburgerBar = document.querySelectorAll('.hamburger-bar')

    setMenuOpen(!menuOpen)

    btn?.classList.toggle("open");
    overlay?.classList.toggle("overlay-show");
    menu?.classList.toggle('show-menu')
    hamburgerBar.forEach(bar => {
      bar.classList.toggle('hamburger-open-color')
    })
    document.body.classList.toggle('stop-scrolling')
  }

  useEffect(() => {
    const btn = document.getElementById('menu-btn')
    btn?.addEventListener('click', navToggle)
    return () => {
      btn?.removeEventListener('click', navToggle)
    }
  })
  
  return (
    <>
      <Overlay id='overlay' />
      <MobileMenuContainer id="mobile-menu" className="mobile-main-menu">
        <MobileMenuList className="mobile-menu-list">
          <MenuItem>
            <MenuLink href="/">home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="shop">shop</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/about">about</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/contact">contact</MenuLink>
          </MenuItem>
        </MobileMenuList>
      </MobileMenuContainer>
      <MenuButton id="menu-btn" className="hamburger">
        <HamburgerBar className="hamburger-top hamburger-bar hamburger-bar"></HamburgerBar>
        <HamburgerBar className="hamburger-middle hamburger-bar hamburger-bar"></HamburgerBar>
        <HamburgerBar className="hamburger-bottom hamburger-bar hamburger-bar"></HamburgerBar>
      </MenuButton>
      <Logo href="#" className='logo'>
        <LogoImage src={logo} alt="Room" />
      </Logo>
      <DesktopMenuContainer id="mobile-menu" className="mobile-main-menu">
        <a href="#" className='logo'>
          <LogoImage src={logo} alt="Room" />
        </a>
        <MobileMenuList className="mobile-menu-list">
          <MenuItem className='nav-link'>
            <MenuLink href="/">home</MenuLink>
          </MenuItem>
          <MenuItem className='nav-link'>
            <MenuLink href="shop">shop</MenuLink>
          </MenuItem>
          <MenuItem className='nav-link'>
            <MenuLink href="/about">about</MenuLink>
          </MenuItem>
          <MenuItem className='nav-link'>
            <MenuLink href="/contact">contact</MenuLink>
          </MenuItem>
        </MobileMenuList>
      </DesktopMenuContainer>
    </>
  )
}

const Overlay = styled.div`
  &.overlay-show{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.638);
    z-index: 3;
  }
`;

const MobileMenuContainer = styled.div`
  &.mobile-main-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100px;
    z-index: 4;
    padding: 0 30px;
    background-color: #fff;
    display: flex;
    justify-content: end;
    align-items: center;
    transform: translateY(-100%);
    transition: transform 0.6s cubic-bezier(0.19,1,0.22,1);
  }

  &.show-menu{
    transform: translateY(0%);
  }
`;

const MobileMenuList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 25px;

  ${theme.mediaQueries.menuBreakpoint} {
    gap: 40px;
  }
`;

const MenuItem = styled.li`
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
`;

const MenuLink = styled.a`
  ${theme.mediaQueries.menuBreakpoint} {
    color: #fff;
  }
`;

const MenuButton = styled.button`
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 10;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: none;
  border: none;

  &.open {
    transform: rotate(90deg);
  }

  &.open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translateX(6px);
  }

  &.open .hamburger-middle{
    display: none;
  }
    
  &.open .hamburger-bottom{
    transform: rotate(-45deg) translateY(6px) translateX(-6px);
  }

  ${theme.mediaQueries.menuBreakpoint} {
    display: none
  }
`;

const HamburgerBar = styled.span`
  position: absolute;
  width: 20px;
  height: 2px;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: all 0.5s;

  &.hamburger-open-color{
    background-color: hsl(0, 0%, 63%);
  }

  &.hamburger-middle{
    transform: translateY(5px);
  }

  &.hamburger-bottom {
    transform: translateY(10px);
  }
`;

const Logo = styled.a`
  position: absolute;
  top: 40px;
  right: 40%;
  z-index: 1;

  ${theme.mediaQueries.menuBreakpoint} {
    display: none
  }
`;

const LogoImage = styled.img``;

const DesktopMenuContainer = styled.div`
  ${theme.mediaQueries.mobile} {
    display: none;
  }

  ${theme.mediaQueries.menuBreakpoint} {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100px;
    z-index: 4;
    padding: 0 30px;
    display: flex;
    align-items: center;
    gap: 60px;

    & > a {
      display: flex
    }
  }
`

export default MobileMenu