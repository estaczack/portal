import dataUtils from '../aux/FormatarData.js'

const criarPagamentos = (n, ultimoUsuario, primeiroUsuario, ultimoItem, primeiroItem) => {
  const pagamentosSeeds = []
  const hoje = new Date()

  const criarPagamentoPix = (valorPago, usuarioId, pagbankId, item) => {
    return {
      valorPago,
      usuarioId,
      pagbankId: '123456',
      item,
      dataVenda: dataUtils.FormatarData(hoje),
      dataPagamento: dataUtils.FormatarData(hoje),
      dataRecebimento: dataUtils.FormatarData(hoje),
      meioPagamento: 'pix'
    }
  }

  const criarPagamentoDebito = (valorPago, usuarioId, pagbankId, item) => {
    const dataPagamento = new Date(hoje)
    dataPagamento.setDate(hoje.getDate() + 2)

    const dataRecebimento = new Date(hoje)
    dataRecebimento.setDate(hoje.getDate() + 2)

    return {
      valorPago,
      usuarioId,
      pagbankId: '123456',
      item,
      dataVenda: dataUtils.FormatarData(hoje),
      dataPagamento: dataUtils.FormatarData(dataPagamento),
      dataRecebimento: dataUtils.FormatarData(dataRecebimento),
      meioPagamento: 'debito'
    }
  }

  const criarPagamentoCredito = (valorPago, usuarioId, pagbankId, item) => {
    const dataPagamento = new Date(hoje)
    dataPagamento.setDate(hoje.getDate() + 14)

    const dataRecebimento = new Date(hoje)
    dataRecebimento.setDate(hoje.getDate() + 14)

    return {
      valorPago,
      usuarioId,
      pagbankId: '123456',
      item,
      dataVenda: dataUtils.FormatarData(hoje),
      dataPagamento: dataUtils.FormatarData(dataPagamento),
      dataRecebimento: dataUtils.FormatarData(dataRecebimento),
      meioPagamento: 'credito'
    }
  }

  for (let i = 0; i < n; i++) {
    pagamentosSeeds.push(criarPagamentoPix(100, ultimoUsuario, '123456', ultimoItem))
  }

  for (let i = 0; i < n; i++) {
    pagamentosSeeds.push(criarPagamentoDebito(100, primeiroUsuario, '123456', primeiroItem))
  }

  for (let i = 0; i < n; i++) {
    pagamentosSeeds.push(criarPagamentoCredito(100, primeiroUsuario, '123456', ultimoItem))
  }

  return pagamentosSeeds
}

export default criarPagamentos
