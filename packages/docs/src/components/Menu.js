import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { IconDropDown } from '@magnetis/astro-galaxy-icons';

const Wrapper = styled.nav`
  background-color: ${props => props.theme.colors.space100};
  border-right: 1px solid ${props => props.theme.colors.space300};
`;

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  font: ${props => props.theme.fonts.primary};
  font-size: 20px;
  font-weight: 500;
  padding: 22px 50px;
  color: ${props => props.theme.colors.moon900};
  border-top: 1px solid ${props => props.theme.colors.space300};
  text-decoration: none;

  :hover,
  :hover svg {
    color: ${props => props.theme.colors.moon300};
  }
  :active,
  :active svg {
    color: ${props => props.theme.colors.moon900};
  }
`;

const SubItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px 22px;
`;

const SubItem = styled(Link)`
  font: ${props => props.theme.fonts.primary};
  font-weight: 500;
  padding: 6px 0;
  color: ${props => props.theme.colors.moon400};
  opacity: 1;
  text-decoration: none;

  :hover {
    color: ${props => props.theme.colors.moon300};
  }
  :active {
    color: ${props => props.theme.colors.moon900};
  }
  ::before {
    display: none;
  }
`;

const StyledIconDropDown = styled(IconDropDown)`
  position: absolute;
  right: 31px;
  transform: ${({ isItemActive }) => (isItemActive ? 'rotate(180deg)' : 'none')};
`;

function Menu({ mdx, pages, currentPath }) {
  const menuItems = pages.nodes;
  const subItems = mdx.nodes;

  const updateActiveState = (path, active) =>
    menuItems.reduce((acc, i) => {
      acc[i.path] = false;
      if (path === i.path) {
        acc[path] = active;
      }
      return acc;
    }, {});
  const [active, setIsItemActive] = useState(updateActiveState(currentPath, true));

  const activateItem = path => () =>
    setIsItemActive(isActive => updateActiveState(path, !isActive[path]));

  return (
    <Wrapper>
      {menuItems.map(i => {
        const hasSubItems = subItems.filter(
          subItem => subItem.frontmatter.title === i.context.frontmatter.title
        ).length;

        const isPathActive = active[i.path];

        return (
          <div key={i.path}>
            <Item to={i.path} onClick={hasSubItems ? activateItem(i.path) : null}>
              {hasSubItems ? <StyledIconDropDown size={32} isItemActive={isPathActive} /> : null}
              {i.context.frontmatter.title}
            </Item>
            {isPathActive && hasSubItems ? (
              <SubItemContainer>
                {subItems
                  .filter(subItem => subItem.frontmatter.title === i.context.frontmatter.title)
                  .map(subItem =>
                    subItem.headings.map((subSubItem, x) => (
                      <SubItem key={x} to={i.path}>
                        {subSubItem.value}
                      </SubItem>
                    ))
                  )}
              </SubItemContainer>
            ) : null}
          </div>
        );
      })}
    </Wrapper>
  );
}

export default Menu;
