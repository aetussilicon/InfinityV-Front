import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./Login/Login";
import Vault from "./Vault/Vault";
import Register from "./Register/Register"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Vault} path="/"/>
                <Route Component={Login} path="/login"/>
                <Route Component={Register} path="/register" />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;