import React from 'react';
import styled from 'styled-components';
import * as icons from '@magnetis/astro-galaxy-icons';

const Collection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
`;

const Item = styled.div`
  margin: 16px;
  text-align: center;
  width: 72px;
`;

const Container = styled.div`
  border: solid 1px ${props => props.theme.colors.moon300};
  border-radius: 8px;
  padding: 16px;
`;

const Name = styled.div`
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size: 10px;
  margin-top: 8px;
`;

const dashboardIcons = [
  'IconAdditional',
  'IconChart',
  'IconInvite',
  'IconTime',
  'IconDown',
  'IconSheet',
  'IconChat',
  'IconFlag',
  'IconTransactions',
  'IconHeart',
];

const excludedFromSupportIcons = [...dashboardIcons, 'IconInputDash', 'IconInputPlus'];

const DashboardIcons = () => (
  <Collection>
    {dashboardIcons.map(icon => {
      const Icon = icons[icon];
      return (
        <Item key={icon}>
          <Container>
            <Icon color="moon900" size="32" />
          </Container>
          <Name>{icons[icon].name}</Name>
        </Item>
      );
    })}
  </Collection>
);

const SupportIcons = () => (
  <Collection>
    {Object.keys(icons)
      .filter(icon => !excludedFromSupportIcons.includes(icon))
      .map(icon => {
        const Icon = icons[icon];
        return (
          <Item key={icon}>
            <Container>
              <Icon color="moon900" size="32" />
            </Container>
            <Name>{icon}</Name>
          </Item>
        );
      })}
  </Collection>
);

export { DashboardIcons, SupportIcons };
