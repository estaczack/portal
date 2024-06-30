import { useLoaderData } from 'react-router-dom'

import ClosedHeader from '../components/ClosedHeader'
import Footer from '../components/Footer'

export function loader(request) {
  const url = new URL(request.url)
  const video = url.searchParams.get('v')
  let usuario = JSON.parse(localStorage.getItem('bssuser'))
  return [video, usuario]
}

export default function Player() {

  const [video, usuario] = useLoaderData()

  return (
    <>
      <ClosedHeader usuario={usuario} />
      <section className='hero'>
        <div className='container'>
          <div className='columns top-bottom-envelope'>
            <div className='column is-8'>
              <div className='box'>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}