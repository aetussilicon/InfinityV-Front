import '/src/styles/FooterComponentStyle.css';

export default function FooterComponent() {
  return (
    <footer className="rodape">
      <div className="rodapeLinks">
        <div className="RodoapeLinksColunas">
          <h3>Produto</h3>
          <a className='RodoapeLinksColunasBotoes' href="#">Como o Infnity Vault funciona?</a>
          <a className='RodoapeLinksColunasBotoes' href="#">Baixar o Inifinity Vault</a>
          <a className='RodoapeLinksColunasBotoes' href="#">Código do Infinity Vault</a>
        </div>
        <div className="RodoapeLinksColunas">
          <h3>Empresa</h3>
          <a className='RodoapeLinksColunasBotoes' href="#">Quem somos?</a>
        </div>
        <div className="RodoapeLinksColunas">
          <h3>Contato</h3>
          <a><strong>Telefone: </strong>(xx) xxxxx-xxxx</a>
          <a><strong>Email: </strong>contato@openumbrella.com</a>
        </div>
        <div className="RodoapeLinksColunas">
          <h3>Suporte</h3>
          <a><strong>Email: </strong>suporte@openumbrella.com</a>
        </div>
      </div>
      <div className="RodapeDev">
        <p className="RodapeDevText">Desenvolvido por openUmbrella</p>
      </div>
    </footer>
  );
}