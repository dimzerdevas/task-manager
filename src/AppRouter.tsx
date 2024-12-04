import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Loader } from "./components";
import { routes } from "./routes";
import { PageTitleWrapper } from "./hocs";
import { MainLayout } from "./layouts";

export const AppRouter = (): JSX.Element => {
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
                                    <Suspense fallback={<Loader />}>
                                        <PageTitleWrapper title={pageTitle}>
                                            <Component />
                                        </PageTitleWrapper>
                                    </Suspense>
                                }
                            />
                        )
                    })}
                </Route>
                <Route
                    path="*"
                    element={<Navigate to={routes.homepage.path} replace={true} />}
                />
            </Routes>
        </BrowserRouter>)
}