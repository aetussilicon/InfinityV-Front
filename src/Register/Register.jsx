import { Link } from "react-router-dom";
import Helmet from 'react-helmet';


const Register = () => {
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
                        <form>
                            <label htmlFor="name">Nome completo</label>
                            <input type="text" name="name" placeholder="" autoFocus />

                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="" autoFocus />
                            <label htmlFor="cfrnEmail">Confirmar email</label>
                            <input type="text" name="email" placeholder="" autoFocus />

                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" placeholder="" autoFocus />

                            <label htmlFor="cfrnPassword">Confirmar senha</label>
                            <input type="password" name="password" placeholder="" autoFocus />
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