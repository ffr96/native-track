import { createTheme } from '@shopify/restyle';

const palette = {
  orangePrimary: '#fab443',
  orangeLight: '#fcc262',
  orangeDark: '#f47900',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  redLight: '#e05f38',
  redPrimary: '#e34b1e',
  redDark: '#ab2a03',

  black: '#0B0B0B',
  blackGreyPrimary: '#2b2b2b',
  blackGreyLight: '#4a4a4a',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,

    mainText: palette.black,
    subheadingText: palette.blackGreyLight,

    buttonPrimarySuccess: palette.greenPrimary,
    buttonLightSuccess: palette.greenLight,
    buttonDarkSuccess: palette.greenDark,

    buttonPrimaryDanger: palette.redPrimary,
    buttonLightDanger: palette.redLight,
    buttonDarkDanger: palette.redDark,

    viewPrimaryBackground: palette.orangePrimary,
    viewLightBackground: palette.orangeLight,
    viewOrangeDetails: palette.orangeDark,
  },
  spacing: {
    none: 0,
    xs: 2,
    s: 6,
    m: 12,
    l: 18,
    xl: 24,
    xxl: 30,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'mainText',
    },
    header2: {
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'subheadingText',
    },
    header3: {
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: 32,
    },
    header4: {
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 28,
      color: 'mainText',
    },
    defaults: {
      fontSize: 18,
      lineHeight: 24,
      color: 'mainText',
    },
    detail: {
      fontSize: 16,
      lineHeight: 22,
      color: 'subheadingText',
    },
  },
  buttonVariants: {
    defaults: {
      backgroundColor: 'viewPrimaryBackground',
      borderColor: 'mainText',
    },
    send: {
      backgroundColor: 'buttonPrimarySuccess',
      borderColor: 'buttonDarkSuccess',
    },
    danger: {
      backgroundColor: 'buttonPrimaryDanger',
      borderColor: 'buttonDarkDanger',
    },
  },
  notificationVariants: {
    success: {
      backgroundColor: 'buttonLightSuccess',
      borderColor: 'buttonDarkSuccess',
    },
    error: {
      backgroundColor: 'buttonPrimaryDanger',
      borderColor: 'buttonDarkDanger',
    },
    danger: {
      backgroundColor: 'buttonLightDanger',
      borderColor: 'buttonPrimaryDanger',
    },
  },
});

export type Theme = typeof theme;
export default theme;
