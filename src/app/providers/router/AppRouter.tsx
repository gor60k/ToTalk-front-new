import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from './routes';

const AppRouter = () => {
    return (
        <>
        
            <Routes>

                {
                    routes.map(({path, component}, index) => (
                        <Route key={index} path={path} element={component()} />
                    ))
                }

            </Routes>
        
        </>
    )
}

export default AppRouter