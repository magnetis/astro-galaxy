import { Button, Heading, Text } from '@magnetis/astro-galaxy-components';
import { webTheme } from '@magnetis/astro-galaxy-themes';
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

export const CardText = ({ children }) => <Text as="div">{children}</Text>;

export const CardButton = props => (
  <AstroButton as="a" marginTop={4} variant="primary.earth" {...props}></AstroButton>
);

export const CardCode = styled.code`
  background-color: ${webTheme.colors.moon100};
  display: block;
  margin: ${webTheme.space[1]}px 0;
  padding: ${webTheme.space[2]}px;
`;

export const Card = styled.div`
  padding-bottom: 72px;
  position: relative;
  width: 100%;
`;
