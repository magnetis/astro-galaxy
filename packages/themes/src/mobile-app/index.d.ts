import { Colors } from '@magnetis/astro-galaxy-tokens';

export type Gradient = string[];

export type GradientMap = {
  sombrero: Gradient;
  hoag: Gradient;
  pinwheel: Gradient;
  blackHole: Gradient;
  milkyWay: Gradient;
  whirlpool: Gradient;
  nebulosa: Gradient;
  andromeda: Gradient;
  centaurus: Gradient;
  cartwheel: Gradient;
  mayall: Gradient;
};

export type Theme = {
  colors: Colors;
  gradients: GradientMap;
  fonts: {
    poppins: 'Poppins-Regular';
    poppinsMedium: 'Poppins-Medium';
    poppinsSemiBold: 'Poppins-SemiBold';
    poppinsBold: 'Poppins-Bold';
    poppinsBlack: 'Poppins-Black';
    lato: 'Lato-Regular';
    latoBold: 'Lato-Bold';
  },
  fontSizes: [12, 14, 16, 24, 32, 40, 48, 64];
  radii: [0, 2, 8, 16, 24, 32];
  space: [0, 8, 16, 24, 32, 40, 48, 64];
  sizes: [0, '8px', '18px'];
  zIndices: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
}

declare const theme: Theme;

export default theme;
