import { colors } from '@magnetis/astro-galaxy-tokens';

const gradients = {
  nebulosa: 'linear-gradient(47.32deg, #d991e0 0%, #00c6d4 60.06%, #00ea60 100%)',
  andromeda: 'linear-gradient(45deg, #ea9297 0%, #e078d6 100%)',
  sombrero: 'linear-gradient(45.52deg, #9cf184 0%, #3db5eb 100%)',
  milkyway: 'linear-gradient(44.64deg, #159ce4 0%, #e078d6 100%)',
  centaurus: 'linear-gradient(225deg, #e078d6 0%, #993c85 100%)',
  whirlpool: 'linear-gradient(225deg, #9cf184 0%, #56b53f 100%)',
  cartwheel: 'linear-gradient(45deg, #147ec1 0%, #3db5eb 100%)',
  blackhole: 'linear-gradient(225deg, #3f4c55 0%, #1c2124 100%)',
  mayall: 'linear-gradient(225deg, #ea9297 0%, #dd676b 100%)',
  hoag: 'linear-gradient(223.9deg, #fbee88 0%, #f1c500 100%)',
  pinwheel: 'linear-gradient(45deg, #8296a4 0%, #bac8d1 100%)',
};

const baseTheme = {
  colors,
  gradients,
  fonts: {
    primary: `normal normal 600 normal 16px/1.5 Poppins, sans-serif`,
    secondary: `normal normal 400 normal 16px/1.5 Lato, sans-serif`,
  },
  fontSizes: [12, 14, 16, 24, 32, 40, 48, 64],
  radii: [0, 2, 8, 16, 24, 32],
  space: [0, 8, 16, 24, 32, 40, 48, 64],
  sizes: [0, '8px', '18px'],
  lineHeights: [0, '18px', '28px', '35px'],
  zIndices: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
};

const theme = {
  ...baseTheme,
  buttons: {
    primary: {
      uranus: {
        backgroundColor: baseTheme.colors.uranus500,
        color: baseTheme.colors.space100,
        borderColor: baseTheme.colors.uranus500,
      },
      earth: {
        backgroundColor: baseTheme.colors.earth400,
        color: baseTheme.colors.moon900,
        borderColor: baseTheme.colors.earth400,
      },
      venus: {
        backgroundColor: baseTheme.colors.venus400,
        color: baseTheme.colors.space100,
        borderColor: baseTheme.colors.venus400,
      },
      mars: {
        backgroundColor: baseTheme.colors.mars500,
        color: baseTheme.colors.space100,
        borderColor: baseTheme.colors.mars500,
      },
    },
    outline: {
      uranus: {
        color: baseTheme.colors.uranus500,
        borderColor: baseTheme.colors.uranus500,
      },
      earth: {
        color: baseTheme.colors.earth600,
        borderColor: baseTheme.colors.earth600,
      },
      venus: {
        color: baseTheme.colors.venus400,
        borderColor: baseTheme.colors.venus400,
      },
      mars: {
        color: baseTheme.colors.mars500,
        borderColor: baseTheme.colors.mars500,
      },
    },
    ghost: {
      uranus: {
        backgroundColor: 'transparent',
        color: baseTheme.colors.uranus500,
        borderColor: 'transparent',
      },
      earth: {
        backgroundColor: 'transparent',
        color: baseTheme.colors.earth600,
        borderColor: 'transparent',
      },
      venus: {
        backgroundColor: 'transparent',
        color: baseTheme.colors.venus400,
        borderColor: 'transparent',
      },
      mars: {
        backgroundColor: 'transparent',
        color: baseTheme.colors.mars500,
        borderColor: 'transparent',
      },
    },
  },
  buttonSizes: {
    small: {
      padding: '5px 28px', // @TODO: Figure out this hardcoded values
      fontSize: baseTheme.fontSizes[0],
      lineHeight: baseTheme.lineHeights[1],
      borderRadius: baseTheme.radii[3],
    },
    medium: {
      padding: '8px 38px', // @TODO: Figure out this hardcoded values
      fontSize: baseTheme.fontSizes[2],
      lineHeight: baseTheme.lineHeights[2],
      borderRadius: baseTheme.radii[4],
    },
    large: {
      padding: '12px 46px', // @TODO: Figure out this hardcoded values
      fontSize: baseTheme.fontSizes[3],
      lineHeight: baseTheme.lineHeights[3],
      borderRadius: baseTheme.radii[5],
    },
  },
  fontSizes: {
    texts: {
      verySmall: `${baseTheme.fontSizes[0]}px`,
      small: `${baseTheme.fontSizes[1]}px`,
      medium: `${baseTheme.fontSizes[2]}px`,
      large: `${baseTheme.fontSizes[3]}px`,
    },
    headings: {
      small: `${baseTheme.fontSizes[4]}px`,
      medium: `${baseTheme.fontSizes[5]}px`,
      large: `${baseTheme.fontSizes[6]}px`,
      huge: `${baseTheme.fontSizes[7]}px`,
    },
  },
};

export default theme;
