import { useLoaderData } from 'react-router-dom'

import Footer from '../components/Footer'
import OpenHeader from '../components/OpenHeader'

export function loader({ request }) {
  const url = new URL(request.url)
  const nome = url.searchParams.get('nome')
  const email = url.searchParams.get('email')
  const id = url.searchParams.get('id')
  return [nome, email, id]
}

export default function Registrado() {
  let [nome, email, id] = useLoaderData()
  return (
    <>
      <OpenHeader />
      <div className='hero'>
        <div className='container'>
          <div className="columns top-bottom-envelope">
   
              <div className='column is-8'>
                <div className='box'>
                  <p className="justified-text">Olá <b>{nome}</b>,</p>
                  <p className="justified-text">&nbsp;</p>
                  <p className="justified-text">Você efetuou seu registro no <b>SCORPIONFLIX</b> e em algum momento nas próximas horas receberá um email com um link para confirmar seu email <b>{email}</b>. Os links para pagamento estão ao lado. Escolha a forma que melhor te agradar e envie o comprovante para <b>contato@bsscursos.tech</b> com o seu ID de estudante ({`${id}`}).</p>
                  <p className="justified-text">&nbsp;</p>
                  <p className="justified-text">Uma vez que essas etapas tenham sido cumpridas: (a) confirmado o seu email; (b) envio do comprovante de pagamento; seu acesso será automaticamente liberado. Pedimos que verifique o email que usou para inscrever-se, inclusive a caixa de spam.</p>
                  <p className="justified-text">&nbsp;</p>
                  <p className="justified-text">O seu link de afiliado é <b><a href={`https://bsscursos.tech/ref=${id}`}>https://bsscursos.tech/ref={id}</a></b>. Passe-o adiante para seus contatos. Todas as vezes que alguém inscrever-se no SCORPIONFLIX através do seu link, você acumulará pontos que poderão ser usados para adquirir Cursos e Palestras Premium ou trocados por dinheiro uma vez por ano, na data do seu aniversário.</p>
                  <p className="justified-text">&nbsp;</p>
                  <p className="justified-text">Estamos felizes que esteja conosco e desejamos uma excelente experiência educacional. Se houver qualquer coisa em que possamos ajudar, não hesite em contactar-nos pelo email <a href="mailto=contato@bsscursos.tech">contato@bsscursos.tech</a>.</p>
                  <p className="justified-text">&nbsp;</p>
                  <p className="justified-text">Atenciosamnte,</p>
                  <p className="justified-text">Equipe da SCORPIONFLIX</p>
                </div>
              </div>
              <div className='column is-3'>
                <div className='box'>
                  <p><b>PAGAMENTO MENSAL</b></p>
                  <p>- <a href='https://pag.ae/7-wRFVHpt' target='_new'>Premium</a></p>
                  <p>- <a href='https://pag.ae/7-wRDiWVt' target='_new'>Mentoria</a></p>
                  <p>- <a href='https://pag.ae/7-wRzNS18' target='_new'>Autodidata</a></p>
                  <hr />
                  <p><b>PAGAMENTO SEMESTRAL</b></p>
                  <p style={{color:'red'}}>Um mês de graça!</p>
                  <p>- <a href='https://pag.ae/7-wRGFaYP' target='_new'>Premium</a></p>
                  <p>- <a href='https://pag.ae/7-wRDW7et' target='_new'>Mentoria</a></p>
                  <p>- <a href='https://pag.ae/7-wRBcW2P' target='_new'>Autodidata</a></p>
                  <hr />
                  <p><b>PAGAMENTO ANUAL</b></p>
                  <p style={{color:'red'}}>Dois meses de graça e pode parcelar no cartão!</p>
                  <p>- <a href='https://pag.ae/7-wRHnuzt' target='_new'>Premium</a></p>
                  <p>- <a href='https://pag.ae/7-wRF6KnH' target='_new'>Mentoria</a></p>
                  <p>- <a href='https://pag.ae/7-wRCtHVn' target='_new'>Autodidata</a></p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
