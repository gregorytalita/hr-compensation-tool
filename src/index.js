import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { StylesProvider } from '@material-ui/styles'
import { ThemeProvider } from 'styled-components'
import theme from './core/theme'
import App from './containers/App'
import './index.css'

ReactDOM.render(
  <StylesProvider injectFirst>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>,
  document.getElementById('root'))
