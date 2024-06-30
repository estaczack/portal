
import { useLoaderData } from 'react-router-dom'

import ClosedHeader from '../components/ClosedHeader'
import Footer from '../components/Footer'
import MenuDashboard from '../components/MenuDashboard'

export async function loader() {
  let usuario = await JSON.parse(localStorage.getItem('bssuser'))
  return usuario
}

export default function Dashboard(props) {

  let usuario = useLoaderData()

  return (
    <>
      <ClosedHeader usuario={usuario} />
      <section className='hero'>
        <div className='container'>
          <div className='columns top-bottom-envelope'>
            <div className='column is-2'>
              <MenuDashboard usuario={usuario} />
            </div>
            <div className='column is-10'>
              <div className='box'>
                {props.subpage}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}