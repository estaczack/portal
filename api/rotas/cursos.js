import express from 'express'

import AutorizaRequest from '../aux/AutorizaRequest.js'

const router = express.Router()

router.get('/', AutorizaRequest, async function (req, res, next) {
  const result = await req.apolloServer.executeOperation({
    query: 'query { cursos { _id titulo } }'
  })
  res.json(result.data.cursos)
})

router.post('/', async function (req, res, next) {
  const {
    titulo,
    descricao,
    qntHoras,
    professor,
    paginaCurso,
    paginaPropaganda,
    linkDePagamento,
    ativo
  } = req.body
  const tipoCurso = {
    titulo,
    descricao,
    qntHoras,
    professor,
    paginaCurso,
    paginaPropaganda,
    linkDePagamento,
    ativo
  }
  const result = await req.apolloServer.executeOperation({
    query: `
      mutation ($tipoCurso: tipoCurso!) {
        criaCurso(params: $tipoCurso) {
          _id
        }
      }
    `,
    variables: { tipoCurso }
  })
  res.json(result.data.criaCurso)
})

router.put('/:id', async function (req, res, next) {
  // encontra o usuario pelo id
  // descobre quais parametros foram passados e passa pro set
  // chama a mutation

})

router.delete('/:id', async function (req, res, next) {
  console.log('Roteador para deletar um curso OK')

  res.send('Rota para deletar um curso')
})

router.get('/by-id/:id', AutorizaRequest, async function (req, res, next) {
  const { id } = req.params
  const results = await req.apolloServer.executeOperation({
    query: `
            query ($id: ID!) {
                cursoPorId(id: $id) {
                    _id
                    titulo
                }
            }
        `,
    variables: { id }
  })
  res.json(results.data.cursoPorId)
})

router.get('/by-professor/:professor', async function (req, res, next) {
  const { professor } = req.params
  console.log(professor)
  const result = await req.apolloServer.executeOperation({
    query: `
      query ($professor: String!) {
        cursoPorProfessor(professor: $professor) {
          _id
        }
      }
    `,
    variables: { professor }
  })
  res.json(result.data.cursoPorProfessor)
})

router.put('/by-id/:id/ativacao-curso', async function (req, res, next) {
  const { id } = req.params
  const result = await req.apolloServer.executeOperation({
    query: `
      mutation ($id: ID!) {
        ativaCurso(id: $id) {
          _id
          ativo
        }
      }
    `,
    variables: { id }
  })
  res.json(result.data.ativaCurso)
})

router.put('/by-id/:id/desativacao-curso', async function (req, res, next) {
  const { id } = req.params
  const result = await req.apolloServer.executeOperation({
    query: `
      mutation ($id: ID!) {
        desativaCurso(id: $id) {
          _id
          ativo
        }
      }
    `,
    variables: { id }
  })
  res.json(result.data.desativaCurso)
})

export default router
