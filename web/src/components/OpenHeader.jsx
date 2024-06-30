import OpenHeaderMenu from './OpenHeaderMenu'

import logosm from '../assets/imgs/bsslogo_sm.png'

export default function Header () {
  return (
    <header className='hero is-dark is-small'>
      <div className='hero-body'>
        <div className='container'>
          <nav className='level'>
            <div className='level-left'>
              <div className='level-item'>
                <figure className='image is-128x128'>
                  <img src={logosm} />
                </figure>
              </div>
              <div className='level-item'>
                <div className='titles'>
                  <p className='title'>BSS Cursos</p>
                  <p className='subtitle'>SCORPIONFLIX</p>
                </div>
              </div>
            </div>
            <OpenHeaderMenu />
          </nav>
        </div>
      </div>
    </header>
  )
}
