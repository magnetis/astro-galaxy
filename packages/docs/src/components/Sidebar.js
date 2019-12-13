import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { IconMenu, IconClose } from '@magnetis/astro-galaxy-icons';
import breakpoints from '../utils/breakpoints';
import Menu from './Menu';
import logoUrl from './astro-logo.svg';

const Wrapper = styled.div`
  position: relative;

  ${breakpoints.min('xl')} {
    width: 320px;
  }
`;

const Content = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 280px;
  height: 100%;
  max-height: 100vh;
  border-right: 1px solid ${props => props.theme.colors.space300};
  background-color: #fff;
  transition: transform 0.2s ease 0s;

  ${breakpoints.min('xl')} {
    width: 320px;
  }

  ${breakpoints.max('xl')} {
    z-index: 100;
    transform: translateX(${props => (props.isOpen ? 0 : '-100%')});
  }
`;

const Logo = styled.h1`
  height: 171px;
  width: 151px;
  background-image: url(${logoUrl});
  background-size: 164px;
  text-indent: -999px;
  margin: 46px 60px;
  background-position: center center;
  background-repeat: no-repeat;
`;

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;

  ${breakpoints.max('xl')} {
    padding: 0;
  }
`;

const ShowMenu = styled.button`
  cursor: pointer;
  z-index: 99;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 30px;
  top: 2px;
  right: -27px;
  transform: translateX(10px) translateY(4px);
  display: block;
  padding: 5px 6px;
  transition: transform 0.3s ease 0s;
  outline: none;
  border: none;
  background-color: transparent;
  display: block;

  ${breakpoints.min('xl')} {
    display: none;
  }
`;

const Backdrop = styled.div`
  content: '';
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 99;
  transition: background 0.3s ease 0s;

  ${breakpoints.min('xl')} {
    display: none;
  }
`;

function Sidebar({ ...props }) {
  const theme = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);
  const menuIconProps = { color: theme.colors.space100, width: 40, height: 40 };

  function toggleMenu() {
    setShowMenu(x => !x);
  }

  return (
    <>
      <Wrapper isOpen={showMenu}>
        <Content isOpen={showMenu}>
          <ShowMenu onClick={toggleMenu}>
            {showMenu ? <IconClose {...menuIconProps} /> : <IconMenu {...menuIconProps} />}
          </ShowMenu>
          <LogoWrapper>
            <Logo>Astro</Logo>
          </LogoWrapper>
          <Menu pages={props.pages} mdx={props.mdx} />
        </Content>
      </Wrapper>
      <Backdrop isOpen={showMenu} onClick={toggleMenu} />
    </>
  );
}

export default Sidebar;
