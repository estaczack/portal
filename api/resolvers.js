import _ from 'lodash-es'

import CursosResolvers from './modelos/cursos/resolvers.js'
import LeadsResolvers from './modelos/leads/resolvers.js'
import PagamentosResolvers from './modelos/pagamentos/resolvers.js'
import UsuariosResolvers from './modelos/usuarios/resolvers.js'

const resolvers = _.merge(
  CursosResolvers,
  LeadsResolvers,
  PagamentosResolvers,
  UsuariosResolvers
)

export default resolvers
