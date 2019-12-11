import React from 'react';
import styled, { css } from 'styled-components';

const Hamburger = css`
  &:nth-of-type(1) {
    top: -2px;
    transform: translateY(0px) rotate(0deg);
  }

  &:nth-of-type(2) {
    top: 6px;
    opacity: 1;
  }

  &:nth-of-type(3) {
    top: 14px;
    transform: translateY(0px) rotate(0deg);
  }
`;

const Close = css`
  &:nth-of-type(1) {
    top: -2px;
    transform: translateY(10px) rotate(45deg);
  }

  &:nth-of-type(2) {
    top: 6px;
    opacity: 0;
  }

  &:nth-of-type(3) {
    top: 14px;
    transform: translateY(-6px) rotate(-45deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 23px;
  height: 32px;
  transform: translateX(-1px) translateY(2px) scale(1);

  & > span {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0px;
    right: 0px;
    background: rgb(45, 55, 71);
    transition: transform 0.3s ease 0s, opacity 0.3s ease 0s;
    background-color: #fff;
    border-radius: 3px;

    ${props => (props.isOpen ? Close : Hamburger)}
  }
`;

function MenuIcon({ isOpen }) {
  return (
    <Wrapper isOpen={isOpen}>
      <span />
      <span />
      <span />
    </Wrapper>
  );
}

export default MenuIcon;
