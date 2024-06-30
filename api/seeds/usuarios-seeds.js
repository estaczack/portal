import Password from '../aux/Password.js'

const usuariosSeeds = [
  {
    nome: 'Ed de Almeida',
    email: 'ed@bsscursos.tech',
    senha: Password.encrypt('Ed123456'),
    celular: '2199712-0000',
    referencia: '',
    afiliado: '',
    validado: true,
    ativo: true,
    banido: false,
    papel: 'superadmin',
    criadoEm: '',
    atualizadoEm: '',
    atualizadoPor: ''
  },
  {
    nome: 'Marcos Gabriel',
    email: 'marcos@bsscursos.tech',
    senha: Password.encrypt('Marcos123456'),
    celular: '2199712-0000',
    referencia: '',
    afiliado: '',
    validado: true,
    ativo: true,
    banido: false,
    papel: 'superadmin',
    criadoEm: '',
    atualizadoEm: '',
    atualizadoPor: ''
  },
  {
    nome: 'João Silva',
    email: 'joao@bsscursos.tech',
    senha: Password.encrypt('Joao123456'),
    celular: '2199712-0000',
    referencia: '',
    afiliado: '',
    validado: true,
    ativo: true,
    banido: false,
    papel: 'admin',
    criadoEm: '',
    atualizadoEm: '',
    atualizadoPor: ''
  },
  {
    nome: 'Maria Mariana',
    email: 'maria@bsscursos.tech',
    senha: Password.encrypt('Maria123456'),
    celular: '2199712-0000',
    referencia: '',
    afiliado: '',
    validado: true,
    ativo: true,
    banido: false,
    papel: 'mentorado',
    criadoEm: '',
    atualizadoEm: '',
    atualizadoPor: ''
  },
  {
    nome: 'Fulano Beltrano',
    email: 'fulano@bsscursos.tech',
    senha: Password.encrypt('Fulano123456'),
    celular: '2199712-0000',
    referencia: '',
    afiliado: '',
    validado: true,
    ativo: true,
    banido: false,
    papel: 'comum',
    criadoEm: '',
    atualizadoEm: '',
    atualizadoPor: ''
  }
]

export default usuariosSeeds
