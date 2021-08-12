import { createTheme, ThemeProvider as MaterialThemeProvider } from "@material-ui/core"
import { palette } from "./colors"

export const ThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: palette
  })

  return (
    <MaterialThemeProvider theme={theme}>
      {children}
    </MaterialThemeProvider>
  )
}
