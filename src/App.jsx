import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./components/global/PrivateRoute";
import NotFound from "./components/global/NotFound";
import "./css/global/app.css";

const App = () => {
    return (
        <div className="App">
            <Routes>
                {["/", "login"].map((path, index) => (
                    <Route key={index} path={path} element={<Login />} />
                ))}
                <Route element={<PrivateRoute />}>
                    <Route path="home" element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
