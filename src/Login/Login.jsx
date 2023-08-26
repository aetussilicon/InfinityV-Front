import { Link } from "react-router-dom";
import Helmet from 'react-helmet';

function Login() {
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

            <form>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="" autoFocus />
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" placeholder="" autoFocus />
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