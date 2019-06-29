import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import customTheme from './theme'

const ThemeProvider = ({ children, theme = customTheme }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)

export default ThemeProvider
