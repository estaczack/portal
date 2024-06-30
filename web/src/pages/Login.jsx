import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer'
import OpenHeader from '../components/OpenHeader'
import SupportAPIRequests from '../aux/SupportAPIRequests'

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const emailChangeHandler = async ev => {
    await setEmail(ev.target.value)
  }

  const senhaChangeHandler = async ev => {
    await setSenha(ev.target.value)
  }

  const entrarClickHandler = async () => {
    const loginData = {
      email: email,
      senha: senha
    }
    await fetch(SupportAPIRequests.usuariosEndpoint() + '/login', {
      method: 'POST',
      headers: await SupportAPIRequests.postHeaders(),
      body: JSON.stringify(loginData)
    }).then(res => res.json()).then(json => {
      setEmail('')
      setSenha('')
      if (json.ok) {
        localStorage.setItem('bssuser', JSON.stringify(json.bssuser))
        navigate('/dashboard')
      } else {
        navigate(`/mensagem?err=${json.msg}`)
      }
    })
  }

  return (
    <>
      <OpenHeader />
      <section className='hero is-halfheight banner-login'>
        <div className='hero-body'>
          <nav className='level'>
            <div className='level-item'>
              <div className='login-box'>
                <div className='box'>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      placeholder='Email'
                      onChange={emailChangeHandler}
                    />
                  </div>
                  <div className='control'>
                    <input
                      className='input'
                      type='password'
                      placeholder='Password'
                      onChange={senhaChangeHandler}
                    />
                  </div>
                  <div className='control'>
                    <button className='button is-black is-fullwidth' onClick={entrarClickHandler}>
                      Entrar!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='level-item has-text-centered banner-login'>
              Entre na sua plataforma
              <br />
              predileta de aprendizado!
            </div>
          </nav>
        </div>
      </section>
      <Footer />
    </>
  )
}
