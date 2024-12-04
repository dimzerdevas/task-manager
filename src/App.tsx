import { AppRouter } from './AppRouter'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
};