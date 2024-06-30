import { useLoaderData } from 'react-router-dom'

import Footer from '../components/Footer'
import OpenHeader from '../components/OpenHeader'

export function loader({ request }) {
  const url = new URL(request.url)
  const err = url.searchParams.get('err')
  return err
}

const errorMessages = {
  '001': 'Suas credenciais (email e/ou senha) não foram reconhecidas pelo nosso sistema. Por favor, tente novamente.',
  '002': 'Seu email ainda não foi verificado!'
}

export default function Mensagem() {
  let msgCode = useLoaderData()
  return(
    <>
      <OpenHeader />
      <div className='hero is-full-height'>
        <div className='container'>
          <div className='columns top-bottom-envelope'>
            <div className='column is-6 is-offset-3'>
              <div className={'notification is-danger' }>
                <h1 className='is-size-2 '>Oooooops!</h1>
                <hr />
                <h1 className='is-size-5'>{errorMessages[msgCode]}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}