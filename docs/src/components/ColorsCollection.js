import React from 'react';
import styled from 'styled-components';
import { webTheme } from '@magnetis/astro-galaxy-themes';

const { colors, gradients } = webTheme;
const tints = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const getTextColor = (tint, lightTextStart) =>
  tint < lightTextStart ? colors.moon1000 : colors.space100;

const ColorPaletteSwatch = styled.div`
  width: 72px;
  height: 72px;
  padding-top: 26px;
  text-align: center;
  font: ${props => props.theme.fonts.primary};

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const Palette = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 45px;
`;

const GradientCollectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 128px);
  grid-gap: 16px;
  margin-top: 35px;
`;

const GradientCollectionSwatch = styled.div`
  border-radius: 8px;
  width: 128px;
  height: 128px;
  padding-top: 55px;
  font: ${props => props.theme.fonts.primary};
  text-align: center;
`;

const ColorSwatch = ({ family, tint, textColor }) => (
  <ColorPaletteSwatch
    style={{ backgroundColor: colors[`${family}${tint}`], color: textColor }}
    data-color={colors[`${family}${tint}`]}>
    <span>{tint}</span>
  </ColorPaletteSwatch>
);

export const ColorPalette = ({ family, lightTextStart }) => (
  <Palette>
    {tints.map(tint => (
      <ColorSwatch
        key={`${family}${tint}`}
        family={family}
        tint={tint}
        textColor={getTextColor(tint, lightTextStart)}
      />
    ))}
  </Palette>
);

export const GradientSwatch = ({ gradient, darkText = false }) => (
  <GradientCollectionSwatch
    style={{
      backgroundImage: gradients[gradient],
      color: darkText ? colors.moon900 : colors.space100,
    }}>
    <span>{gradient}</span>
  </GradientCollectionSwatch>
);

export const GradientCollection = ({ children }) => (
  <GradientCollectionWrapper>{children}</GradientCollectionWrapper>
);
