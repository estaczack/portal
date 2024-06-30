import { useNavigate } from 'react-router-dom'

import logosm from '../assets/imgs/bsslogo_sm.png'

export default function OpenHeader(props) {
  const navigate = useNavigate()
  let { nome, papel } = props.usuario

  const logoutClickHandler = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <header className='hero is-dark is-small'>
      <div className='hero-body'>
        <div className='container'>
          <nav className='level'>
            <div className='level-left'>
              <div className='level-item'>
                <figure className='image is-32x32'>
                  <img src={logosm} />
                </figure>
              </div>
              <div className='level-item'>
                <p className='subtitle'>SCORPIONFLIX</p>
              </div>
            </div>
            <div className='level-item'>
              <p className='subtitle'><span>{nome} ({papel})</span></p>
            </div>
            <div className='level-right'>
              <div className='level-item'>
                <button
                  className='button is-danger'
                  onClick={logoutClickHandler}
                >
                  Sair
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
