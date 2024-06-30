import dataUtils from './DataUtils.js'

function ProcessarPagamento (meioPagamento) {
  let dataPagamento, dataRecebimento
  let dataVenda = new Date()

  switch (meioPagamento) {
    case 'pix':
      dataPagamento = dataVenda
      dataRecebimento = dataVenda
      break
    case 'credito':
      dataPagamento = new Date(dataVenda)
      dataPagamento.setDate(dataVenda.getDate() + 14)
      dataRecebimento = new Date(dataVenda)
      dataRecebimento.setDate(dataVenda.getDate() + 14)
      break
    case 'debito':
      dataPagamento = new Date(dataVenda)
      dataPagamento.setDate(dataVenda.getDate() + 2)
      dataRecebimento = new Date(dataVenda)
      dataRecebimento.setDate(dataVenda.getDate() + 2)
      break
    default:
      console.log('Método de pagamento não aceito')
  }
  dataVenda = dataUtils.FormatarData(dataVenda)
  dataPagamento = dataUtils.FormatarData(dataPagamento)
  dataRecebimento = dataUtils.FormatarData(dataRecebimento)

  return { dataVenda, dataPagamento, dataRecebimento }
}

export default ProcessarPagamento
