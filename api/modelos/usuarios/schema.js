import { gql } from 'apollo-server-express'

export default gql`
  type Usuario {
    _id: ID!
    nome: String!
    email: String!
    senha: String!
    celular: String!
    referencia: String!
    afiliado: String!
    validado: Boolean!
    ativo: Boolean!
    banido: Boolean!
    papel: String!
    criadoEm: String!
    atualizadoEm: String!
    atualizadoPor: ID!
  }

  input tipoUsuario {
    nome: String!
    email: String!
    senha: String!
    celular: String!
    papel: String!
    referencia: String!
    criadoEm: String!
    atualizadoEm: String!
    atualizadoPor: ID!
  }

  type Query {
    usuarios: [Usuario!]!
    usuariosPorReferencia(referencia: ID!): [Usuario!]!  
    usuarioPorId(id: ID!): Usuario!
    usuarioPorEmail(email: String!): Usuario!
  }

  type Mutation {
    criaUsuario(params: tipoUsuario!): Usuario!
    validaEmail(id: ID!): Usuario!
    atualizaUsuario(id: ID!, params: tipoUsuario!): Usuario
    apagaUsuario(id: ID!): Usuario!
    suspendeUsuario(id: ID!): Usuario!
    reativaUsuario(id: ID!): Usuario!
    baneUsuario(id: ID!): Usuario!
    criaAdmin(id: ID!): Usuario!
    criaSuperadmin(id: ID!): Usuario!
    validaEmail(id: ID!): Usuario!    
    removeUsuario(id: ID!): Usuario!
  }
`
