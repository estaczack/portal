import { ObjectId } from 'mongodb'

export default {
  Query: {
    pagamentos: async (parent, args, { db }) => {
      return await db.collection('pagamentos').find().toArray()
    },
    pagamentoPorId: async (parent, { id }, { db }) => {
      return await db.collection('pagamentos').findOne(new ObjectId(id))
    },
    pagamentoPorPagbankId: async (parent, { pagbankId }, { db }) => {
      return await db.collection('pagamentos').findOne({ pagbankId })
    },
    pagamentosPorUsuario: async (parent, { usuarioId }, { db }) => {
      return await db.collection('pagamentos').find({ usuarioId: new ObjectId(usuarioId) }).toArray()
    },
    pagamentosPorItem: async (parent, { item }, { db }) => {
      return await db.collection('pagamentos').find({ item: new ObjectId(item) }).toArray()
    },
    vendasPorMesAno: async (parent, { mesAno }, { db }) => {
      return await db.collection('pagamentos').find({
        dataVenda: { $regex: `^\\d{2}-${mesAno.replace('-', '\\-')} \\d{2}:\\d{2}:\\d{2}$` }
      }).toArray()
    },
    pagamentosPorMesAno: async (parent, { mesAno }, { db }) => {
      return await db.collection('pagamentos').find({
        dataPagamento: { $regex: `^\\d{2}-${mesAno.replace('-', '\\-')} \\d{2}:\\d{2}:\\d{2}$` }
      }).toArray()
    },
    recebimentosPorMesAno: async (parent, { mesAno }, { db }) => {
      return await db.collection('pagamentos').find({
        dataRecebimento: { $regex: `^\\d{2}-${mesAno.replace('-', '\\-')} \\d{2}:\\d{2}:\\d{2}$` }
      }).toArray()
    },
    pagamentosPorDataVenda: async (parent, { dataVenda }, { db }) => {
      const dataVendaFormatada = new RegExp(`^${dataVenda.replace('-', '\\-')} \\d{2}:\\d{2}:\\d{2}$`)
      return await db.collection('pagamentos').find({ dataVenda: { $regex: dataVendaFormatada } }).toArray()
    },
    pagamentosPorDataPagamento: async (parent, { dataPagamento }, { db }) => {
      const dataPagamentoFormatada = new RegExp(`^${dataPagamento.replace('-', '\\-')} \\d{2}:\\d{2}:\\d{2}$`)
      return await db.collection('pagamentos').find({ dataPagamento: { $regex: dataPagamentoFormatada } }).toArray()
    },
    pagamentosPorDataRecebimento: async (parent, { dataRecebimento }, { db }) => {
      const dataRecebimentoFormatada = new RegExp(`^${dataRecebimento.replace('-', '\\-')} \\d{2}:\\d{2}:\\d{2}$`)
      return await db.collection('pagamentos').find({ dataRecebimento: { $regex: dataRecebimentoFormatada } }).toArray()
    },
    pagamentosPorPix: async (parent, { meioPagamento }, { db }) => {
      return await db.collection('pagamentos').find({ meioPagamento }).toArray()
    },
    pagamentosPorDebito: async (parent, { meioPagamento }, { db }) => {
      return await db.collection('pagamentos').find({ meioPagamento }).toArray()
    },
    pagamentosPorCredito: async (parent, { meioPagamento }, { db }) => {
      return await db.collection('pagamentos').find({ meioPagamento }).toArray()
    }
  },
  Mutation: {
    registraPagamento: async (parent, { params }, { db }) => {
      params.usuarioId = new ObjectId(params.usuarioId)
      params.item = new ObjectId(params.item)
      const result = await db.collection('pagamentos').insertOne(params)
      params._id = result.insertedId
      return params
    },
    atualizaRecebimento: async (parent, { id, dataRecebimento }, { db }) => {
      await db.collection('pagamentos').updateOne({ _id: new ObjectId(id) }, { $set: { dataRecebimento } })
      return await db.collection('pagamentos').findOne({ _id: new ObjectId(id) })
    }
  }
}

// Notas:
// (I) Estrutura the filtro por mês esta correta? Deve ser passado mes e ano. Mudamos o naming do param?
