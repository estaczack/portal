import express from 'express'

import DataUtils from '../aux/DataUtils.js'
import ProcessarPagamento from '../aux/ProcessarPagamento.js'

const router = express.Router()

router.get('/', async function (req, res, next) {
  const results = await req.apolloServer.executeOperation({
    query: 'query { pagamentos { _id usuarioId } }'
  })
  res.json({ ok: true, pagamentos: results.data.pagamentos })
})

router.post('/', async function (req, res, next) {
  const {
    valorPago,
    usuarioId,
    pagbankId,
    item,
    meioPagamento
  } = req.body
  const { dataVenda, dataPagamento, dataRecebimento } = ProcessarPagamento(meioPagamento)
  const tipoPagamento = {
    valorPago,
    usuarioId,
    pagbankId,
    item,
    meioPagamento,
    dataVenda,
    dataPagamento,
    dataRecebimento
  }
  const result = await req.apolloServer.executeOperation({
    query: `
      mutation ($tipoPagamento: tipoPagamento!) {
        registraPagamento(params: $tipoPagamento) {
          _id 
        }
      }
    `,
    variables: { tipoPagamento }
  })
  res.json(result.data.registraPagamento)
})

router.get('/by-id/:id', async function (req, res, next) {
  const { id } = req.params
  const result = await req.apolloServer.executeOperation({
    query: `
      query ($id: ID!) {
        pagamentoPorId(id: $id) {
          _id
        }
      }
    `,
    variables: { id }
  })
  res.json({ ok: true, pagamento: result.data.pagamentoPorId })
})

router.get('/by-pagbankId/:pagbankId', async function (req, res, next) {
  const { pagbankId } = req.params
  const result = await req.apolloServer.executeOperation({
    query: `
      query ($pagbankId: String!) {
        pagamentoPorPagbankId(pagbankId: $pagbankId) {
          _id
        }
      }
    `,
    variables: { pagbankId }
  })
  res.json({ ok: true, pagamento: result.data.pagamentoPorPagbankId })
})

router.get('/by-user/:id', async function (req, res, next) {
  const usuarioId = req.params.id
  const results = await req.apolloServer.executeOperation({
    query: `
      query ($usuarioId: ID!) {
        pagamentosPorUsuario(usuarioId: $usuarioId) {
          _id
        }
      }
    `,
    variables: { usuarioId }
  })
  res.json({ ok: true, pagamentos: results.data.pagamentosPorUsuario })
})

router.get('/by-item/:id', async function (req, res, next) {
  const item = req.params.id
  const results = await req.apolloServer.executeOperation({
    query: `
      query ($item: ID!) {
        pagamentosPorItem(item: $item) {
          _id
        }
      }
    `,
    variables: { item }
  })
  res.json({ ok: true, pagamentos: results.data.pagamentosPorItem })
})

router.get('/by-vendas-mesAno/:mesAno', async function (req, res, next) {
  // http://localhost:4000/api/v1/pagamentos/by-vendas-mesAno/08-2024
  const { mesAno } = req.params

  const results = await req.apolloServer.executeOperation({
    query: `
        query ($mesAno: String!) {
            vendasPorMesAno(mesAno: $mesAno) {
                _id                
                dataVenda                
            }
        }
    `,
    variables: { mesAno }
  })
  res.json({ ok: true, pagamentos: results.data.vendasPorMesAno })
})

router.get('/by-pagamentos-mesAno/:mesAno', async function (req, res, next) {
  // http://localhost:4000/api/v1/pagamentos/by-pagamentos-mesAno/08-2024
  const { mesAno } = req.params

  const results = await req.apolloServer.executeOperation({
    query: `
        query ($mesAno: String!) {
            pagamentosPorMesAno(mesAno: $mesAno) {
                _id                
                dataPagamento                
            }
        }
    `,
    variables: { mesAno }
  })
  res.json({ ok: true, pagamentos: results.data.pagamentosPorMesAno })
})

router.get('/by-recebimentos-mesAno/:mesAno', async function (req, res, next) {
  // http://localhost:4000/api/v1/pagamentos/by-recebimentos-mesAno/08-2024
  const { mesAno } = req.params

  const results = await req.apolloServer.executeOperation({
    query: `
      query ($mesAno: String!) {
          recebimentosPorMesAno(mesAno: $mesAno) {
              _id                
              dataRecebimento            
          }
      }
  `,
    variables: { mesAno }
  })
  res.json({ ok: true, pagamentos: results.data.recebimentosPorMesAno })
})

router.get('/by-dataVenda/:dataVenda', async function (req, res, next) {
  // http://localhost:4000/api/v1/pagamentos/by-dataVenda/12-04-2024
  const { dataVenda } = req.params

  const results = await req.apolloServer.executeOperation({
    query: `
      query ($dataVenda: String!) {
          pagamentosPorDataVenda(dataVenda: $dataVenda) {
              _id                
              dataVenda            
          }
      }
  `,
    variables: { dataVenda }
  })
  res.json({ ok: true, pagamentos: results.data.pagamentosPorDataVenda })
})

router.get('/by-dataPagamento/:dataPagamento', async function (req, res, next) {
  // http://localhost:4000/api/v1/pagamentos/by-dataPagamento/12-04-2024
  const { dataPagamento } = req.params

  const results = await req.apolloServer.executeOperation({
    query: `
      query ($dataPagamento: String!) {
          pagamentosPorDataPagamento(dataPagamento: $dataPagamento) {
              _id                
              dataPagamento            
          }
      }
  `,
    variables: { dataPagamento }
  })
  res.json({ ok: true, pagamentos: results.data.pagamentosPorDataPagamento })
})

router.get('/by-dataRecebimento/:dataRecebimento', async function (req, res, next) {
  // http://localhost:4000/api/v1/pagamentos/by-dataRecebimento/13-04-2024
  const { dataRecebimento } = req.params

  const results = await req.apolloServer.executeOperation({
    query: `
      query ($dataRecebimento: String!) {
          pagamentosPorDataRecebimento(dataRecebimento: $dataRecebimento) {
              _id                
              dataRecebimento            
          }
      }
  `,
    variables: { dataRecebimento }
  })
  res.json({ ok: true, pagamentos: results.data.pagamentosPorDataRecebimento })
})

router.get('/pix', async function (req, res, next) {
  const meioPagamento = 'pix'
  const results = await req.apolloServer.executeOperation({
    query: `
      query ($meioPagamento: String!) {
        pagamentosPorPix(meioPagamento: $meioPagamento) {
          _id
        }
      }
    `,
    variables: { meioPagamento }
  })
  res.json({ ok: true, pagamentos: results.data.pagamentosPorPix })
})

router.get('/credito', async function (req, res, next) {
  const meioPagamento = 'credito'
  const results = await req.apolloServer.executeOperation({
    query: `
      query ($meioPagamento: String!) {
        pagamentosPorCredito(meioPagamento: $meioPagamento) {
          _id
        }
      }
    `,
    variables: { meioPagamento }
  })
  res.json({ ok: true, pagamentos: results.data.pagamentosPorCredito })
})

router.get('/debito', async function (req, res, next) {
  const meioPagamento = 'debito'
  const results = await req.apolloServer.executeOperation({
    query: `
      query ($meioPagamento: String!) {
        pagamentosPorDebito(meioPagamento: $meioPagamento) {
          _id
        }
      }
    `,
    variables: { meioPagamento }
  })
  res.json({ ok: true, pagamentos: results.data.pagamentosPorDebito })
})

// NOTA INTERNA: Ed, não acha que para forma de pagamento uma rota unica com variavel faz mais sentido? Vide abaixo.
// (prometo que é a última vez que toco no assunto rs)

// router.get('/forma-pagamento/:formaPagamento', async function (req, res, next) {
//   const {formaPagamento} = req.params
//   const results = await req.apolloServer.executeOperation({
//     query: `
//       query ($formaPagamento: String!) {
//         pagamentosPorPix(formaPagamento: $formaPagamento) {
//           _id
//         }
//       }
//     `,
//     variables: { formaPagamento }
//   })
//   res.json({ok: true, pagamentos: results.data.formaPagamento})
// })

router.put('/by-id/:id/dataRecebimento/:dataRecebimento', async function (req, res, next) {
  // http://localhost:4000/api/v1/pagamentos//by-id/661aafc909658cf9c6bee82a/dataRecebimento/14-04-2024
  let { id, dataRecebimento } = req.params
  dataRecebimento = DataUtils.parseDataString(dataRecebimento)

  const result = await req.apolloServer.executeOperation({
    query: `
      mutation ($id: ID!, $dataRecebimento: String!) {
        atualizaRecebimento(id: $id, dataRecebimento: $dataRecebimento) {
          _id
          dataRecebimento
        }
      }
    `,
    variables: { id, dataRecebimento }
  })
  res.json(result)
})

export default router
