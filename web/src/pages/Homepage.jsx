import { useLoaderData } from 'react-router-dom'

import Direcionador from '../components/Direcionador'
import Footer from '../components/Footer'
import OpenHeader from '../components/OpenHeader'
import QuemDeve from '../components/QuemDeve'

export function loader({ request }) {
  const url = new URL(request.url)
  const ref = url.searchParams.get('ref')
  return ref
}

export default function Homepage() {
  let referencia = useLoaderData()
  return (
    <>
      <OpenHeader />
      <QuemDeve />
      <Direcionador referencia={referencia} />
      <Footer />
    </>
  )
}
