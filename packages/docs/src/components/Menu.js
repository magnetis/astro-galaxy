import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.space100};
  border-right: 1px solid ${props => props.theme.colors.space300};
`;

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 20px;
  padding: 6px 50px;
  color: ${props => props.theme.colors.moon900};
  border-top: 1px solid ${props => props.theme.colors.space300};
  text-decoration: none;

  :hover {
    color: ${props => props.theme.colors.moon300};
    font-weight: 500;
  }

  .active {
    color: ${props => props.theme.colors.moon900};
  }
`;

const SubItem = styled(Link)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 16px;
  font-weight: 500;
  padding: 6px 0;
  color: ${props => props.theme.colors.moon400};
  opacity: 1;
  text-decoration: none;

  :hover {
    color: ${props => props.theme.colors.moon300};
  }
  .active {
    color: ${props => props.theme.colors.moon900};
  }
  ::before {
    display: none;
  }
`;

function Menu({ mdx, pages }) {
  const [active, setIsActive] = useState(false);
  const menuItems = pages.nodes;
  const subItems = mdx.nodes;

  function activeItem() {
    setIsActive(x => !x);
  }

  return (
    <Wrapper>
      {menuItems.map((i, x) => (
        <Item key={x} to={i.path} onClick={activeItem}>
          {i.context.frontmatter.title}
          {subItems
            .filter(subItem => subItem.frontmatter.title === i.context.frontmatter.title)
            .map(subItem =>
              subItem.headings.map(
                subSubItem =>
                  active && (
                    <SubItem to={i.path} isActive={active}>
                      {subSubItem.value}
                    </SubItem>
                  )
              )
            )}
        </Item>
      ))}
    </Wrapper>
  );
}

export default Menu;
