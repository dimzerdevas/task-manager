import { AppRouter } from './AppRouter';
import { ThemeProvider } from './context/ThemeContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { TaskProvider } from './context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <ThemeProvider>
      <Auth0Provider
        domain={import.meta.env.VITE_REACT_APP_DOMAIN}
        clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin + '/task-manager/',
        }}
        useRefreshTokens={true}
        cacheLocation="localstorage"
      >
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <TaskProvider>
              <AppRouter />
            </TaskProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </Auth0Provider>
    </ThemeProvider>
  );
};
