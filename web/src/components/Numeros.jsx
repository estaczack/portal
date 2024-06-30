import InfoBoxAreas from '../components/InfoBoxAreas'
import InfoBoxColaboradores from '../components/InfoBoxColaboradores'
import InfoBoxCursos from '../components/InfoBoxCursos'
import InfoBoxHoras from '../components/InfoBoxHoras'
import InfoBoxPalestras from '../components/InfoBoxPalestras'
import InfoBoxUsuarios from '../components/InfoBoxUsuarios'

export default function Numeros () {
  return (
    <div id='numeros' className='fundo-numeros'>
      <section className='hero is-meddium'>
        <div className='hero-body'>
          <div className='columns has-text-centered'>
            <div className='column is-2 is-offset-2'>
              <InfoBoxCursos />
            </div>
            <div className='column is-2 is-offset-1'>
              <InfoBoxPalestras />
            </div>
            <div className='column is-2 is-offset-1'>
              <InfoBoxAreas />
            </div>
          </div>
        </div>
      </section>
      <section className='hero is-meddium'>
        <div className='hero-body'>
          <div className='columns has-text-centered'>
            <div className='column is-2 is-offset-2'>
              <InfoBoxUsuarios />
            </div>
            <div className='column is-2 is-offset-1'>
              <InfoBoxColaboradores />
            </div>
            <div className='column is-2 is-offset-1'>
              <InfoBoxHoras />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
