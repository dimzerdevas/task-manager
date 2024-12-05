import { AppRouter } from './AppRouter'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Auth0Provider } from '@auth0/auth0-react';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain={import.meta.env.VITE_REACT_APP_DOMAIN}
        clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
        useRefreshTokens={true}
        cacheLocation="localstorage"
      >
        <AppRouter />
      </Auth0Provider>
    </ThemeProvider>
  )
};