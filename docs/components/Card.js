import { Button, Heading, Text } from '@magnetis/astro-galaxy-components';
import { theme } from '@magnetis/astro-galaxy-core';
import React from 'react';
import styled from 'styled-components';

const AstroButton = styled(Button)`
  bottom: 0;
  position: absolute;
`;

export const CardImage = styled.img`
  max-height: 154px;
`;

export const CardTitle = ({ children }) => (
  <Heading fontSize="small" marginBottom={4} marginTop={4}>
    {children}
  </Heading>
);

export const CardText = ({ children }) => (
  <Text as="div" font="secondary" fontSize="medium">
    {children}
  </Text>
);

export const CardButton = props => (
  <AstroButton as="a" marginTop={4} variant="primary.earth" {...props}></AstroButton>
);

export const CardCode = styled.code`
  background-color: ${theme.colors.moon100};
  display: block;
  margin: ${theme.space[1]}px 0;
  padding: ${theme.space[2]}px;
`;

export const Card = styled.div`
  padding-bottom: 60px;
  position: relative;
  width: 100%;
`;
