import { Link } from "react-router-dom";
import Helmet from 'react-helmet';
import { useState } from "react";
import api from "../container/services/api";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email: email,
        password: password
      });

      console.log("Token recebido: ", response.data.token);
    } catch (error) {
      console.error("Erro no login: ", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <link rel="stylesheet" href="src/styles/Login.css" />
      <body>
        <section id="Login">
          <h3>Sign In</h3>
          <div className="areaLogin">
            <img src="src/assets/svgs/logo.svg" />
            <div className="areaLoginForm">
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="josh@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Entrar"/>
              </form>
              <p>Ainda não possui conta? <Link to="/register">Cadastre-se</Link></p>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Login;