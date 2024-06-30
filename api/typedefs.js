import { gql } from 'apollo-server-express'

import CursosSchema from './modelos/cursos/schema.js'
import LeadsSchema from './modelos/leads/schema.js'
import PagamentosSchema from './modelos/pagamentos/schema.js'
import UsuariosSchema from './modelos/usuarios/schema.js'

const typeDefs = gql`
  ${CursosSchema}
  ${LeadsSchema}
  ${PagamentosSchema}
  ${UsuariosSchema}
`
export default typeDefs
