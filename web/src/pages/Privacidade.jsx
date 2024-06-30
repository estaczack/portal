import Footer from '../components/Footer'
import OpenHeader from '../components/OpenHeader'

export default function Privacidade() {
  return (
    <>
      <OpenHeader />
      <div className="hero">
        <div className="container">
          <div className='columns is-multiline top-bottom-envelope'>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo-primeiro">Política de Privacidade</p>
                <hr />
                <p className="textos-paragrafo">Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações pessoais que você fornece ao usar nosso site.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Informações Coletadas</p>
                <hr />
                <p className="textos-paragrafo">Podemos coletar informações pessoais, como nome, endereço de e-mail, endereço físico e informações de pagamento, quando você se inscreve em um curso em nosso site.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Uso das Informações</p>
                <hr />
                <p className="textos-paragrafo">As informações pessoais que coletamos são usadas para processar sua inscrição em um curso, fornecer suporte ao cliente e enviar informações sobre novos cursos ou promoções.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Compartilhamento de Informações</p>
                <hr />
                <p className="textos-paragrafo">Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros sem seu consentimento, exceto conforme necessário para processar sua inscrição em um curso ou conforme exigido por lei.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Cookies</p>
                <hr />
                <p className="textos-paragrafo">Utilizamos cookies para melhorar a experiência do usuário em nosso site. Os cookies são pequenos arquivos de texto armazenados no seu dispositivo que nos ajudam a lembrar suas preferências e melhorar o desempenho do site.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Segurança</p>
                <hr />
                <p className="textos-paragrafo">Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado ou uso indevido.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Alterações na Política de Privacidade</p>
                <hr />
                <p className="textos-paragrafo">Reservamos o direito de alterar esta Política de Privacidade a qualquer momento, sem aviso prévio. Recomendamos que você revise esta Política de Privacidade regularmente para se manter informado sobre como estamos protegendo suas informações.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Contato</p>
                <hr />
                <p className="textos-paragrafo">Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através do email: privacidade@seusite.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
