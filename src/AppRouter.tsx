import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Loader } from './components';
import { routes } from './routes';
import { PageTitleWrapper } from './hocs';
import { MainLayout } from './layouts';
import { useAuth0 } from '@auth0/auth0-react';
import { UserDetails } from './components/UserDetails';
import { LoginView } from './views/LoginView';

export const AppRouter = (): JSX.Element => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const logoutUser = () =>
    logout({
      logoutParams: { returnTo: window.location.origin + '/task-manager/' },
    });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.homepage.path} element={<MainLayout />}>
          {Object.entries(routes).map(([routeKey, route]) => {
            const { Component, path, pageTitle } = route;
            return (
              <Route
                key={routeKey}
                path={path}
                element={
                  isAuthenticated ? (
                    <Suspense fallback={<Loader />}>
                      <UserDetails user={user} logout={logoutUser} />
                      <PageTitleWrapper title={pageTitle}>
                        <Component />
                      </PageTitleWrapper>
                    </Suspense>
                  ) : (
                    <LoginView />
                  )
                }
              />
            );
          })}
        </Route>
        <Route
          path="*"
          element={<Navigate to={routes.homepage.path} replace={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
