import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SupportAPIRequests from '../aux/SupportAPIRequests'

export default function CorpoInscricao(props) {

  const navigate = useNavigate()

  const { tipo, referencia } = props
  let boxClasse = 'box box-categorias box-' + tipo
  let categoria = tipo[0].toUpperCase() + tipo.substring(1)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [celular, setCelular] = useState('')

  const nomeChangeHandler = ev => {
    setNome(ev.target.value)
  }

  const emailChangeHandler = ev => {
    setEmail(ev.target.value)
  }

  const senhaChangeHandler = ev => {
    setSenha(ev.target.value)
  }

  const celularChangeHandler = ev => {
    setCelular(ev.target.value)
  }

  const btnRegistrarClick = async () => {
    const registro = {
      nome: nome,
      email: email,
      senha: senha,
      celular: celular,
      papel: tipo,
      referencia: (referencia === 'null') ? 'none' : referencia
    }
    await fetch(SupportAPIRequests.usuariosEndpoint(), {
      method: 'POST',
      headers: await SupportAPIRequests.postHeaders(),
      body: JSON.stringify(registro)
    }).then(res => res.json()).then(json => {
      setNome('')
      setEmail('')
      setSenha('')
      setCelular('')
      let newUrl = `/registrado?nome=${registro.nome}`
      newUrl = newUrl + `&email=${registro.email}`
      newUrl = newUrl + `&id=${json._id}`
      newUrl = encodeURI(newUrl)
      navigate(newUrl)
    })
  }

  return (
    <section className='hero'>
      <div className='container'>
        <div className="columns top-bottom-envelope">
          <div className='column is-4 is-offset-4'>
            <div className={boxClasse}>
              <h1 className='is-size-4'>{categoria}</h1>
              <hr />
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder="Nome completo"
                  value={nome}
                  onChange={nomeChangeHandler}
                />
              </div>
              <div className='control'>
                <input
                  className='input'
                  type='email'
                  placeholder="Email"
                  value={email}
                  onChange={emailChangeHandler}
                />
              </div>
              <div className='control'>
                <input
                  className='input'
                  type='password'
                  placeholder="Senha"
                  value={senha}
                  onChange={senhaChangeHandler}
                />
              </div>
              <div className='control'>
                <input
                  className='input'
                  type='tel'
                  placeholder="Celular (com DDD)"
                  value={celular}
                  onChange={celularChangeHandler}
                />
              </div>
              <div className='control'>
                <button
                  className='button is-ghost'
                  onClick={btnRegistrarClick}
                >
                  Registrar-se!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}