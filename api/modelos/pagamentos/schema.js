import { gql } from 'apollo-server-express'

export default gql`
  type Pagamento {
    _id: ID!
    valorPago: Int!
    usuarioId: ID!
    pagbankId: String!  
    item: ID!
    dataVenda: String!
    dataPagamento: String!
    dataRecebimento: String!
    meioPagamento: String!
  }

  input tipoPagamento {
    valorPago: Int!
    usuarioId: ID!
    pagbankId: String!  
    item: ID!
    dataVenda: String!
    dataPagamento: String!
    dataRecebimento: String!
    meioPagamento: String!
  }

  type Query {
    pagamentos: [Pagamento!]!
    pagamentoPorId(id: ID!): Pagamento!
    pagamentoPorPagbankId(pagbankId: String!): Pagamento!
    pagamentosPorUsuario(usuarioId: ID!): [Pagamento!]!
    pagamentosPorItem(item: ID!): [Pagamento!]!
    vendasPorMesAno(mesAno: String!): [Pagamento!]!
    pagamentosPorMesAno(mesAno: String!): [Pagamento!]!
    recebimentosPorMesAno(mesAno: String!): [Pagamento!]!    
    pagamentosPorDataVenda(dataVenda: String!): [Pagamento!]!
    pagamentosPorDataPagamento(dataPagamento: String!): [Pagamento!]!
    pagamentosPorDataRecebimento(dataRecebimento: String!): [Pagamento!]!
    pagamentosPorPix(meioPagamento: String!): [Pagamento!]!
    pagamentosPorCredito(meioPagamento: String!): [Pagamento!]!
    pagamentosPorDebito(meioPagamento: String!): [Pagamento!]!
  }

  type Mutation {
    registraPagamento(params: tipoPagamento!): Pagamento!
    atualizaRecebimento(id: ID!, dataRecebimento: String!): Pagamento!
  }
`

// Notas:
// (I) dataRecebimento entra na definição do input?;
// (II) mutation atualizaRecebimento, params correto?;
// (III) precisamos colocar timestamps aqui? Talvez para termos controle de quem atualizou a data de recebimento seja importante.
