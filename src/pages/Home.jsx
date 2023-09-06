import FooterComponent from "../components/FooterComponent";
import cardComponent from "../components/cardComponent";



const Home = () => {

  //Títulos dos cards
  const criptoTitle = "Criptografia de Ponta";
  const generateTitle = "Gerador de Senhas";
  const acessTitle = "Acesso em Todos os Lugares";
  const OfflineTitle = "Acesso Offline";
  const BiometriaTitle = "Biometria";
  const SecurityTitle = "Auditótia de Segurança";
  const LanguageTitle = "Suporte a Vários Idiomas:";

  //Imagens dos cards
  const criptoImg = "src/assets/svgs/lock_password.svg";
  const generateImg = "src/assets/svgs/password_account.svg";
  const acessImg = "src/assets/svgs/map.svg";
  const OfflineImg = "src/assets/svgs/offiline_wifi.svg";
  const BiometriaImg = "src/assets/svgs/Figerprint.svg";
  const SecurityImg = "src/assets/svgs/Strong.svg";
  const LanguageImg = "src/assets/svgs/Language.svg";


  //Text ocards
  const OfflineMsg = "Nem sempre estamos online, mas isso não deve ser um problema. Com o Infinity Vault, você terá acesso às suas senhas mesmo offline, garantindo tranquilidade em todas as situações.";
  const criptoText = "Com a nossa criptografia de ponta, suas senhas estão além do alcance de qualquer pessoa, exceto você.";
  const generateText = "Crie senhas robustas com apenas um clique, garantindo a máxima proteção online.";
  const acessText = "Acesse suas senhas de qualquer dispositivo, a qualquer momento, mantendo-se sempre no controle.";
  const BiometriaText = "Segurança máxima com um toque pessoal. Em breve, o Infinity Vault permitirá que você desbloqueie sua senha mestra com autenticação biométrica, tornando o acesso mais rápido e seguro.";
  const SecurityText = "Sua proteção é nossa missão. Com nossa futura auditoria de segurança, você poderá verificar a força de suas senhas e obter recomendações para fortalecer sua segurança online.";
  const LanguageText = "O Infinity Vault está prestes a falar seu idioma! Expandiremos nosso suporte a vários idiomas para atender a uma audiência global."

  //Texto Features


  return (
    <>
      <link rel="stylesheet" href="src/styles/Home.css"/>
      <body>
        <header id="cabecalho">
          <nav id="cabecalhoNav">
            <img id="logo"src="src/assets/svgs/logo_black.svg" alt="Inifity Vault Logo"/>
            <ul>
              <li><a href="#inicioSec">Início</a></li>
              <li><a href="#caracSec">Características</a></li>
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
              <h1 className="inicioSecItroducaoTextTitle">Infinity Vault, o seu gerenciador sem limites!</h1>
              <p className="inicioSecParagraph">O cofre infinito para suas senhas e segurança online! 
              Desenvolvido pela openUmbrella, nossa solução revolucionária 
              é muito mais do que um simples gerenciador de senhas. 
              É um escudo impenetrável que protege sua vida digital com inovação e criatividade.</p>
            </div>
            <img id="mainPage" src="src/assets/mokaups/iPhone13_Mockup_main_page.png" alt="Infinity Vault main page" />
          </div>
        </section>
        <section id="caracSec">
          <div className="SecTitle">
            <h1>Do que o Infinity Vault é capaz?</h1>    
          </div>
          <div className="cards">
            {cardComponent({message: criptoText, title: criptoTitle, img: criptoImg})}
            {cardComponent({message: generateText, title: generateTitle, img: generateImg})}
            {cardComponent({message: acessText, title: acessTitle, img: acessImg})}
          </div>
        </section>
        <section id="FutureFeatureSec">
        <div className="SecTitle">
          <h1>Funcionalidades Futuras</h1>
        </div>
        <div className="cards">
          {cardComponent({message: BiometriaText, title: BiometriaTitle, img: BiometriaImg})}
          {cardComponent({message: OfflineMsg, title: OfflineTitle, img: OfflineImg})}
          {cardComponent({message: SecurityText, title: SecurityTitle, img: SecurityImg})}
          {cardComponent({message: LanguageText, title: LanguageTitle, img: LanguageImg})}
        </div>
        </section>
        <section id="suporteSec">
        </section>
        <FooterComponent></FooterComponent>
      </body>
    </>
  );
}

export default Home