import { AppRouter } from "./AppRouter";
import { ThemeProvider } from "./context/ThemeContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { TaskProvider } from "./context";

export const App = () => {
  return (
    <ThemeProvider>
      <Auth0Provider
        domain={import.meta.env.VITE_REACT_APP_DOMAIN}
        clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        useRefreshTokens={true}
        cacheLocation="localstorage"
      >
        <TaskProvider>
          <AppRouter />
        </TaskProvider>
      </Auth0Provider>
    </ThemeProvider>
  );
};
