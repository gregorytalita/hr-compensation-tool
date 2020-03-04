const colors = {
  white: '#FFFFFF',
  blue: {
    main: '#003EA1',
    light: '#2A6BD4',
    dark: '#003487'
  },
  light_blue: {
    main: '#5EB8C0',
    light: '#95DFE6',
    dark: '#01787A'
  },
  gray: {
    lighter: '#F7F7FF',
    light: '#C3CCE6',
    dark: '#767D96',
    darker: '#41434D'
  },
  red: '#AE091E',
  error: '#AE091E',
  green: '#D1E042',
  yellow: '#FFEB41',
  orange: '#FFA300'
}

const fonts = {
  roboto: {
    regular: 'Roboto Regular, sans-serif',
    light: 'Roboto Light, sans-serif',
    bold: 'Roboto Bold, sans-serif'
  }
}

const typographies = {
  body1: {
    fontFamily: fonts.roboto.regular,
    fontSize: 16,
    color: colors.gray.dark
  },
  body2: {
    fontFamily: fonts.roboto.light,
    fontSize: 14,
    color: colors.gray.darker
  },
  button: {
    fontFamily: fonts.roboto.regular,
    fontSize: 14,
    color: colors.white,
    textTransform: 'none'
  },
  h1: {
    fontFamily: fonts.roboto.bold,
    fontSize: 48,
    lineHeight: '68px',
    color: colors.gray.darker
  },
  h2: {
    fontFamily: fonts.roboto.bold,
    fontSize: 40,
    lineHeight: '56px',
    color: colors.gray.darker
  },
  h3: {
    fontFamily: fonts.roboto.bold,
    fontSize: 32,
    lineHeight: '44px',
    color: colors.gray.darker
  },
  h4: {
    fontFamily: fonts.roboto.bold,
    fontSize: 24,
    lineHeight: '34px',
    color: colors.gray.darker
  },
  h5: {
    fontFamily: fonts.roboto.bold,
    fontSize: 14,
    lineHeight: '21px',
    color: colors.gray.darker
  }
}

export const styles = {
  colors,
  fonts,
  typographies
}
