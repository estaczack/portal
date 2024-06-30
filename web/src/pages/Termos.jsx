import Footer from '../components/Footer'
import OpenHeader from '../components/OpenHeader'

export default function Termos() {
  return (
    <>
      <OpenHeader />
      <div className='hero'>
        <div className="container">
          <div className='columns is-multiline top-bottom-envelope'>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo-primeiro">Termos de Uso</p>
                <hr />
                <p className="textos-paragrafo">Bem-vindo ao nosso site educacional. Ao acessar ou usar este site, você concorda com estes Termos de Uso.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Uso do Site</p>
                <hr />
                <p className="textos-paragrafo">Você deve ter pelo menos 18 anos de idade para se inscrever nos cursos oferecidos em nosso site. Ao se inscrever, você concorda em fornecer informações verdadeiras e precisas sobre si mesmo.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Conteúdo do Curso</p>
                <hr />
                <p className="textos-paragrafo">O conteúdo dos cursos oferecidos em nosso site é apenas para fins educacionais e informativos. Não garantimos resultados específicos após a conclusão de um curso.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Pagamentos</p>
                <hr />
                <p className="textos-paragrafo">Os pagamentos pelos cursos devem ser feitos de acordo com as opções de pagamento disponíveis em nosso site. Não nos responsabilizamos por pagamentos feitos em sites de terceiros sem nossa autorização.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className='box'>
                <p className="textos-titulo">Cancelamentos e Reembolsos</p>
                <hr />
                <p className="textos-paragrafo">Você pode cancelar sua inscrição em um curso e solicitar um reembolso de acordo com nossa política de cancelamento e reembolso.</p>
              </div>
            </div>
            <div className='column is-3'>
              <div className="box">
                <p className="textos-titulo">Propriedade Intelectual</p>
                <hr />
                <p className="textos-paragrafo">Todo o conteúdo disponibilizado em nosso site, incluindo vídeos, textos e materiais didáticos, é protegido por direitos autorais e é de propriedade exclusiva de nossos parceiros e colaboradores.</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="box">
                <p className="textos-titulo">Limitação de Responsabilidade</p>
                <hr />
                <p className="textos-paragrafo">Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de usar nosso site ou do conteúdo dos cursos oferecidos.</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="box">
                <p className="textos-titulo">Alterações nos Termos de Uso</p>
                <hr />
                <p className="textos-paragrafo">Reservamos o direito de alterar estes Termos de Uso a qualquer momento, sem aviso prévio. É sua responsabilidade verificar regularmente os Termos de Uso atualizados.</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="box">
                <p className="textos-titulo">Contato</p>
                <hr />
                <p className="textos-paragrafo">Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do email: contato@seusite.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}
