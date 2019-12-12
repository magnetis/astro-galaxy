import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
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
  border: solid 1px silver;
  border-radius: 8px;
  padding: 16px;
`;

const Name = styled.div`
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size: 10px;
  margin-top: 8px;
`;

const IconsCollection = () => (
  <Collection>
    {icons &&
      map(icons, (Icon, IconName) => (
        <Item>
          <Container>
            <Icon key={IconName} color="moon900" width="32" height="32" />
          </Container>
          <Name>{IconName.replace('Icon', '')}</Name>
        </Item>
      ))}
  </Collection>
);

export default IconsCollection;
