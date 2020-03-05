import { createMuiTheme } from '@material-ui/core/styles'
import { styles } from './styles'

export const theme = createMuiTheme({
  colors: {
    ...styles.colors
  },
  fonts: {
    ...styles.fonts
  },
  palette: {
    primary: {
      main: styles.colors.blue.main,
      contrastText: styles.colors.white,
      light: styles.colors.blue.light,
      dark: styles.colors.blue.main
    },
    secondary: {
      main: styles.colors.blue.dark,
      contrastText: styles.colors.blue.main
    },
    error: {
      main: styles.colors.red
    },
    action: {
      selected: styles.colors.light_blue.main,
      hover: styles.colors.light_blue.light
    }
  },
  typography: {
    fontFamily: '\'Roboto\', \'sans-serif\'',
    fontSize: 14,
    color: styles.colors.gray.darker,
    body1: {
      ...styles.typographies.body1
    },
    body2: {
      ...styles.typographies.body2
    },
    button: {
      ...styles.typographies.button
    },
    h1: {
      ...styles.typographies.h1
    },
    h2: {
      ...styles.typographies.h2
    },
    h3: {
      ...styles.typographies.h3
    },
    h4: {
      ...styles.typographies.h4
    },
    h5: {
      ...styles.typographies.h5
    }
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: 14
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: `2px solid ${styles.colors.gray.light}`
        },
        '&:before': {
          borderBottom: `1px solid ${styles.colors.gray.light}`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${styles.colors.gray.light}`
        }
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: 14,
        '&$focused': {
          color: styles.colors.gray.dark
        }
      },
      shrink: {
        transform: 'translate(0, -2px)'
      }
    },
    MuiListItem: {
      root: {
        '&$focusVisible': {
          backgroundColor: styles.colors.light_blue.light
        }
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        '&$checked': {
          color: styles.colors.light_blue.main
        }
      }
    }
  }
})

export default theme
