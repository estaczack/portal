import { gql } from 'apollo-server-express'

export default gql`
  type Lead {
    id: ID!
    nome: String!
    email: String!
    celularComDDD: String!  
    perfil: Int!
    aceiteMailing: Boolean!      
    dataCriacao: String!    
  }

  input tipoLead {
    nome: String!
    email: String!
    celularComDDD: String!  
    perfil: Int!
    aceiteMailing: Boolean!    
  }

  type Query {
    leads: [Lead!]!    
    leadPorId(id: ID!): Lead!
    leadPorEmail(email: String!): Lead!
    leadsPorPerfil(perfil: Int!): [Lead!]!
    leadsMailing(aceiteMailing: Boolean!): [Lead!]!    
  }

  type Mutation {
    criaLead(params: tipoLead!): Lead!    
    apagaLead(id: ID!): Lead!
  }
`
