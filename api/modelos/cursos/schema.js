import { gql } from 'apollo-server-express'

export default gql`

  type Curso {
    _id: ID!
    titulo: String!
    descricao: String!
    qntHoras: Int!
    professor: String!
    paginaCurso: String!
    paginaPropaganda: String!
    linkDePagamento: String!
    ativo: Boolean!
    dataCriacao: String!
    dataAtualizacao: String!
    atualizadoPor: ID!
  }

  input tipoCurso {
    titulo: String!
    descricao: String!
    qntHoras: Int!
    professor: String!
    paginaCurso: String!
    paginaPropaganda: String!
    linkDePagamento: String!
    ativo: Boolean!
  }

  type Query {
    cursos: [Curso!]!
    cursoPorId(id: ID!): Curso!
    cursoPorProfessor(professor: String!): [Curso!]!
  }

  type Mutation {
    criaCurso(params: tipoCurso): Curso!
    atualizaCurso(id: ID!, params: tipoCurso): Curso!
    ativaCurso(id: ID!): Curso!
    desativaCurso(id: ID!): Curso!
    apagaCurso(id: ID!): Curso!
  }
`
