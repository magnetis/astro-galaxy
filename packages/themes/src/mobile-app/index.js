import { colors } from '@magnetis/astro-galaxy-tokens';

const {
  earth200,
  earth500,
  uranus400,
  uranus500,
  uranus600,
  moon400,
  moon700,
  moon1000,
  venus400,
  venus700,
  mars300,
  mars400,
} = colors;

const theme = {
  colors,
  gradients: {
    sombrero: [uranus400, earth200],
    hoag: ['#FFF56A', '#FFD265'],
    pinwheel: [moon400, '#bac8d1'],
    blackHole: [moon700, moon1000],
    milkyWay: [uranus500, venus400],
    whirlpool: [earth200, earth500],
    nebulosa: ['#d991e0', '#00c6d4', '#00ea60'],
    andromeda: [mars300, venus400],
    centaurus: [venus400, venus700],
    cartwheel: [uranus600, uranus400],
    mayall: [mars300, mars400],
  },
  fonts: {
    poppins: 'Poppins-Regular',
    poppinsMedium: 'Poppins-Medium',
    poppinsSemiBold: 'Poppins-SemiBold',
    poppinsBold: 'Poppins-Bold',
    poppinsBlack: 'Poppins-Black',
    lato: 'Lato-Regular',
    latoBold: 'Lato-Bold',
  },
  fontSizes: [12, 14, 16, 24, 32, 40, 48, 64],
  radii: [0, 2, 8, 16, 24, 32],
  space: [0, 8, 16, 24, 32, 40, 48, 64],
  sizes: [0, '8px', '18px'],
  zIndices: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
};

export default theme;
