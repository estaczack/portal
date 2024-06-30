import { Link } from 'react-router-dom'

import mbronze from '../assets/imgs/medalhabronze.png'
import mouro from '../assets/imgs/medalhaouro.png'
import mprata from '../assets/imgs/medalhaprata.png'

export default function Direcionador(props) {
  const referencia = props.referencia
  return (
    <section className='hero'>
      <div className='container'>
        <div className='columns is-multiline top-bottom-envelope'>
          <div className='column is-4'>
            <div className='box box-categorias box-autodidata'>
              <figure className='image img-medalha'>
                <img src={mbronze} />
              </figure>
              <h1 className='is-size-4'>AUTODIDATA</h1>
              <hr />
              <h1 className='is-size-6 conteudo-em-preto'>&nbsp;</h1>
              <h1 className='is-size-6 conteudo-em-preto'>&nbsp;</h1>
              <h1 className='is-size-6 conteudo-em-preto'>Acesso aos cursos regulares</h1>
              <h1 className='is-size-6 conteudo-em-preto'>Acesso às trilhas da mentoria</h1>
              <h1 className='is-size-6 conteudo-em-preto'>&nbsp;</h1>
              <h1 className='is-size-6 conteudo-em-preto'>&nbsp;</h1>
              <h1 className='is-size-6 conteudo-em-preto'><b>25% off nos Cursos Premium</b></h1>
              <h1 className='is-size-6 conteudo-em-preto'><b>25% off nas Palestras</b></h1>
              <hr />
              <h1 className="conteudo-em-vermelho formato-preco"><b>R$ 39<sup className="formato-preco">,90/mês</sup></b></h1>
              <hr />
              <Link to={'/inscricao/autodidata/' + referencia} className='button btn-ghost'>Inscrever-se!</Link>
            </div>
          </div>
          <div className='column is-4'>
            <div className='box box-categorias box-premium'>
              <figure className='image img-medalha'>
                <img src={mouro} />
              </figure>
              <h1 className='is-size-4'>PREMIUM</h1>
              <hr />
              <h1 className='is-size-6 conteudo-em-preto'>&nbsp;</h1>
              <h1 className='is-size-6 conteudo-em-preto'>&nbsp;</h1>
              <h1 className='is-size-6 conteudo-em-preto'>Acesso aos cursos regulares</h1>
              <h1 className='is-size-6 conteudo-em-preto'>Acesso às trilhas da mentoria</h1>
              <h1 className='is-size-6 conteudo-em-preto'>Área de dúvidas</h1>
              <h1 className='is-size-6 conteudo-em-preto'>Chat direto com mentores</h1>
              <h1 className='is-size-6 conteudo-em-preto'><b>Acesso gratuito a todos os Cursos Premium</b></h1>
              <h1 className='is-size-6 conteudo-em-preto'><b>Acesso gratuito a todas as Palestras</b></h1>
              <hr />
              <h1 className="conteudo-em-vermelho formato-preco"><b>R$ 79<sup className="formato-preco">,90/mês</sup></b></h1>
              <hr />
              <Link to={'/inscricao/premium/' + referencia} className='button btn-ghost'>Inscrever-se!</Link>
            </div>
          </div>
          <div className='column is-4'>
            <div className='box box-categorias box-mentoria'>
              <figure className='image img-medalha'>
                <img src={mprata} />
              </figure>
              <h1 className='is-size-4'>MENTORIA</h1>
              <hr />
              <h1 className='is-size-6 conteudo-em-preto'>&nbsp;</h1>
              <h1 className='is-size-6 conteudo-em-preto'>&nbsp;</h1>
              <h1 className='is-size-6 conteudo-em-preto'>Acesso aos cursos regulares</h1>
              <h1 className='is-size-6 conteudo-em-preto'>Acesso às trilhas da mentoria</h1>
              <h1 className='is-size-6 conteudo-em-preto'>Área de dúvidas</h1>
              <h1 className='is-size-6 conteudo-em-preto'>Chat direto com mentores</h1>
              <h1 className='is-size-6 conteudo-em-preto'><b>50% off nos Cursos Premium</b></h1>
              <h1 className='is-size-6 conteudo-em-preto'><b>25% off nas Palestras</b></h1>
              <hr />
              <h1 className="conteudo-em-vermelho formato-preco"><b>R$ 59<sup className="formato-preco">,90/mês</sup></b></h1>
              <hr />
              <Link to={'/inscricao/mentoria/' + referencia} className='button btn-ghost'>Inscrever-se!</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
