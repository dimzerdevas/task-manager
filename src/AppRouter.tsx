import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Loader } from "./Loader";
import { routes } from "./routes";

export const AppRouter = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                {Object.entries(routes).map(([routeKey, route]) => {
                    const { Component, path } = route;

                    return (
                        <Route
                            key={routeKey}
                            path={path}
                            element={
                                <Suspense fallback={<Loader />}>
                                    <Component />
                                </Suspense>
                            }
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>)
}