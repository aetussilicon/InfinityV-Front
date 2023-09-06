import { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from 'react-helmet';
import api from "../container/services/api";


const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await api.post("/auth/register", {
                email: email,
                username: username,
                password: password
            });

            console.log("Usuário cadastrado :)", response.data);
        } catch (error) {
            console.log("Erro de registro: ", error);
        }
    }

    return (
        <>
            <Helmet>
                <title>Criar Conta</title>
            </Helmet>
            <link rel="stylesheet" href="src\Register\Register.css" />
            <body>
                <section className="register-area">

                    <div className="register">
                        <div>
                            <img src="/src/assets/logo.svg" alt="InfinityV logo" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Nome de Usuário</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Josh" autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="josh@gmail.com" autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>

                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                name="password"
                                placeholder=""
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                            <label htmlFor="cfrnPassword">Confirmar senha</label>
                            <input
                                type="password"
                                name="cfrnPassword"
                                placeholder=""/>

                            <input type="submit" value="criar conta" />
                        </form>
                        <p>Já possui conta? <Link to="/login">Logar</Link></p>
                    </div>
                </section>
            </body>
        </>
    );

}

export default Register;
