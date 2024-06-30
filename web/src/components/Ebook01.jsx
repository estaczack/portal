import { Link } from 'react-router-dom'

import capaEbook from '../assets/imgs/capa_ebook.jpg'

export default function Ebook01() {
  return (
    <section id='ebook' className='hero is-danger is-meddium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3 is-offset-3'>
              <figure className='image'>
                <img src={capaEbook} />
              </figure>
            </div>
            <div className='column is-3'>
              <div className='box is-fullwidth'>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    name='nome'
                    placeholder='Primeiro nome *'
                  />
                </div>
                <div className='control'>
                  <input
                    className='input'
                    type='email'
                    name='email'
                    placeholder='Email *'
                  />
                </div>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    name='whatsapp'
                    placeholder='Whatsapp (opcional)'
                  />
                </div>
                <div className='control'>
                  <div className='select is-fullwidth'>
                    <select name='status'>
                      <option value='1'>Já é profissional de TI</option>
                      <option value='2'>Quer entrar na área de TI</option>
                      <option value='3'>Está em transição de carreira</option>
                      <option value='4'>Produz conteúdo educacional</option>
                      <option value='5'>Prefere não declarar</option>
                      <option value='6'>Outro</option>
                    </select>
                  </div>
                </div>
                <div className='control'>
                  <div className='select is-fullwidth'>
                    <select name='mailing'>
                      <option value='1'>Quero receber emails</option>
                      <option value='2'>Não quero receber emails</option>
                    </select>
                  </div>
                </div>
                <div className='control'>
                  <button className='button is-success is-fullwidth'>
                    DOWNLOAD
                  </button>
                </div>
                <div className='control'>
                  <div className='is-size-7 texto-apertado'>
                    Ao fazer o download você concorda com os{' '}
                    <Link to='termos'>Termos de Uso</Link> deste site e em
                    respeitar os Direitos Autorais do ebook. Seus dados serão
                    protegido nos termos da nossa{' '}
                    <Link to='privacidade'>Política de Privacidade</Link>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
