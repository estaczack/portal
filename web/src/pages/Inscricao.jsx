import { useLoaderData } from 'react-router-dom'

import CorpoInscricao from '../components/CorpoInscricao'
import Footer from '../components/Footer'
import OpenHeader from '../components/OpenHeader'

export function loader({ params }) {
  return [ params.tipo, params.referencia ]
}

export default function Inscricao() {
  const paramsArray  = useLoaderData()
  return (
    <>
      <OpenHeader />
      <CorpoInscricao tipo={paramsArray[0]} referencia={paramsArray[1]} />
      <Footer />
    </>
  )
}