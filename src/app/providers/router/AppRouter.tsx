import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from './routes';

const AppRouter: React.FC = () => {
    const location = useLocation();
    
    // Убедитесь, что у вас правильный тип для displayLocation
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState<"fadeIn" | "fadeOut">("fadeIn");

    useEffect(() => {
        if (location.key !== displayLocation.key) {
            setTransitionStage("fadeOut");
        }
    }, [location, displayLocation]);

    const handleAnimationEnd = () => {
        if (transitionStage === "fadeOut") {
            setDisplayLocation(location);
            setTransitionStage("fadeIn");
        }
    };

    return (
        <>
            <div className={`animate-wrapper ${transitionStage}`} onAnimationEnd={handleAnimationEnd}>
                <Routes location={displayLocation}>
                    {
                        routes.map(({ path, component }, index) => (
                            <Route key={index} path={path} element={component()} />
                        ))
                    }
                </Routes>
            </div>
        </>
    );
};

export default AppRouter;
