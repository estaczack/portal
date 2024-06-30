import express from 'express'

import AutorizaRequest from '../aux/AutorizaRequest.js'
import JWT from '../aux/JWT.js'
import Password from '../aux/Password.js'

const router = express.Router()

router.post('/', async function (req, res, next) {
  const params = req.body
  await req.apolloServer.executeOperation({
    query: `mutation ($params: tipoUsuario!) {
              criaUsuario(params: $params) {
                _id nome email celular papel referencia
              }
            }  `,
    variables: {
      params
    }
  }).then(json => {
    console.log(json)
    res.json(json.data.criaUsuario)
  })
})

router.get('/', AutorizaRequest, async function (req, res, next) {
  await req.apolloServer.executeOperation({
    query: 'query { usuarios { _id nome email celular papel referencia } }'
  }).then(json => {
    res.json(json.data.usuarios)
  })
})

router.get('/by-email/:email', AutorizaRequest, async function (req, res, next) {
  await req.apolloServer.executeOperation({
    query: `query ($email: String!) {
              usuarioPorEmail(email: $email) {
                _id nome email celular papel referencia
              }
            }`,
    variables: {
      email: req.params.email
    }
  }).then(json => {
    res.json(json.data.usuarioPorEmail)
  })
})

router.get('/by-id/:id', AutorizaRequest, async function (req, res, next) {
  await req.apolloServer.executeOperation({
    query: `query ($id: ID!) {
              usuarioPorId(id: $id) {
                _id nome email celular papel referencia
              }
            }`,
    variables: {
      id: req.params.id
    }
  }).then(json => {
    res.json(json.data.usuarioPorId)
  })
})

router.get('/by-referencia/:referencia', AutorizaRequest, async function (req, res, next) {
  await req.apolloServer.executeOperation({
    query: `query ($referencia: ID!) {
              usuariosPorReferencia(referencia: $referencia) {
                _id nome email celular papel referencia
              }
            }`,
    variables: {
      referencia: req.params.referencia
    }
  }).then(json => {
    res.json(json.data.usuariosPorReferencia)
  })
})

router.post('/login', async function (req, res, next) {
  const { email, senha } = req.body
  const result = await req.apolloServer.executeOperation({
    query: `query ($email: String!) {
      usuarioPorEmail(email: $email) {
        _id nome email celular papel referencia senha validado
      }
    }`,
    variables: {
      email: email
    }
  }).then(json => console.log(json))

  // Provisório, para rejeitar todos os logins até a validação do email
  res.json({
    ok: false,
    msg: "002"
  })

/*
  if (result === null) {
    res.json({
      ok: false,
      msg: "001"
    })
  } else {
    if (await Password.verify(senha, result.senha)) {
      delete (result.senha)
      const jwt = JWT.generate(result)
      result.jwt = jwt
      res.json({
        ok: true,
        bssuser: result
      })
    } else {
      res.json({
        ok: false,
        msg: '001'
      })
    }
  }
*/
})

router.post("/limpa", AutorizaRequest, async function (req, res, next) {
  const result = await req.apolloServer.executeOperation({
    query: `mutation { limpaUsuariosSemNome {}}`
  })
})

router.post("/admin/:id", AutorizaRequest, async function (req, res, next) {
  await req.apolloServer.executeOperation({
    query: `mutation ($id: ID!) {
      criaAdmin(id: $id) {
        _id nome email celular papel referencia
      }
    }`,
    variables: {
      id: req.params.id
    }
  }).then(json => res.json(json))
})

router.post("/super/:id", AutorizaRequest, async function (req, res, next) {
  await req.apolloServer.executeOperation({
    query: `mutation ($id: ID!) {
      criaSuperadmin(id: $id) {
        _id nome email celular papel referencia
      }
    }`,
    variables: {
      id: req.params.id
    }
  }).then(json => res.json(json))
})

router.get("/valida/:id", async function (req,res,nect) {
  await req.apolloServer.executeOperation({
    query: `mutation ($id: ID!) {
      validaEmail(id: $id) {
        _id nome email celular papel referencia
      }
    }`,
    variables: {
      id: req.params.id
    }
  })
})

router.get("/remove/:id", async function (req,res,nect) {
  await req.apolloServer.executeOperation({
    query: `mutation ($id: ID!) {
      removeUsuario(id: $id) {
        _id nome email celular papel referencia
      }
    }`,
    variables: {
      id: req.params.id
    }
  })
})


export default router
