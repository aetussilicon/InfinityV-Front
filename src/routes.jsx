import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vault from "./pages/Vault";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route Component={Home} path="/"/>
                    <Route Component={Login} path="/login"/>
                    <Route Component={Register} path="/register" />
                    <Route Component={Vault} path="/vault"/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default AppRoutes;