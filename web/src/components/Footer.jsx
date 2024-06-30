import { Link } from 'react-router-dom'

import logosm from '../assets/imgs/bsslogo_sm.png'

export default function OpenFooter() {
  return (
    <footer className='hero is-black is-small'>
      <div className='hero-body'>
        <nav className='level'>
          <div className='level-right'>
            <div className='level-item'>
              <figure className='image is-32x32'>
                <img src={logosm} />
              </figure>
            </div>
            <div className='level-item'>
              Copyright &copy; 2024 - Todos os direitos reservados.
            </div>
          </div>
          <div className='level-left'>
            <div className='level-item'>
              <Link
                to='/termos'
                className='button is-black'
              >
                <i className="fa-solid fa-flag"></i>&nbsp;Termos de uso
              </Link>
            </div>
            <div className='level-item'>
              <Link
                to='/privacidade'
                className='button is-black'
              >
                <i className="fa-solid fa-shield-halved"></i>&nbsp;Política de Privacidade
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}
