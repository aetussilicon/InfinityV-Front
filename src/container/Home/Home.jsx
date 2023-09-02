const Home = () => {

  return (
    <>
      <link rel="stylesheet" href="src\container\Home\Home.css"/>
      <body>
        <header id="cabecalho">
          <nav id="cabecalhoNav">
            <img id="logo"src="src\assets\logo_black.svg" alt="Inifity Vault Logo"/>
            <ul>
              <li><a href="#inicioSec">Início</a></li>
              <li><a href="#caracteristicasSec">Características</a></li>
              <li><a href="#blogSec">Blog</a></li>
              <li><a href="#Contato">Contato</a></li>
              <li><a href="#suporteSec">Suporte</a></li>
            </ul>
            <ul>
              <li><a href="/register" className ="cabecalhoNavButtonRegister">Cadastre-se</a></li>
              <a href="/login"><button className ="cabecalhoNavButtonsLogin">login</button></a>
            </ul>
          </nav>
        </header>
        <section id="inicioSec">
          <div className="inicioSecItroducao">
            <div className="inicioSecItroducaoText">
              <h1 className="inicioSecItroducaoTextTitle">Bem-vindo ao Infinity Vault</h1>
              <p className="inicioSecParagraph">O cofre infinito para suas senhas e segurança online! 
              Desenvolvido pela openUmbrella, nossa solução revolucionária 
              é muito mais do que um simples gerenciador de senhas. 
              É um escudo impenetrável que protege sua vida digital com inovação e criatividade.</p>
            </div>
            <img id="mainPage" src="src/assets/mokaups/iPhone 13 Mockup main page.png" alt="Infinity Vault main page" />
          </div>
        </section>
        <section id="caracteristicasSec">
        </section>
        <section id="blogSec">
        </section>
        <section id="contatoSec">
        </section>
        <section id="suporteSec">
        </section>
      </body>
    </>
  )
}

export default Home