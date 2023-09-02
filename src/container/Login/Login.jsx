import { Link } from "react-router-dom";
import Helmet from 'react-helmet';
import { useState } from "react";
import api from "../services/api";

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
        <title>Login</title>
      </Helmet>
      <link rel="stylesheet" href="src\Login\style.css" />
      <body>
        <section className="login-area">
          <div className="login">
            <div>
              <img src="/src/assets/logo.svg" alt="InfinityV logo" />
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                autoFocus 
              />
              
              <label htmlFor="password">Senha</label>
              <input 
                type="password" 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Senha" 
                autoFocus
              />
              <input type="submit" value="entrar" />
            </form>
            <p>Ainda não tem uma conta?<Link to="/register">Criar conta</Link></p>
          </div>
        </section>
      </body>
    </>
  );
}

export default Login;