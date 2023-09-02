import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./container/Home/Home";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register"
import Vault from "./container/Vault/Vault"

const Private =  ({Item}) => {
    const signed  = false;

    return signed > 0 ? Item : Register;
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route Component={Home} path="/"/>
                    <Route Component={Login} path="/login"/>
                    <Route Component={Register} path="/register" />
                    <Route Component={<Private Item={Vault}/>} path="/vault"/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default AppRoutes;