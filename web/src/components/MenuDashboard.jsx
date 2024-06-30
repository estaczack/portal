import { useNavigate } from "react-router-dom"

export default function MenuDashboard(props) {

  const navigate = useNavigate()
  const { usuario } = props

  const itemMenuClickHandler = (ev) => {
    navigate(ev.target.dataset.comp)
  }

  let menu = [
    {
      'acesso': [
        'super'
      ],
      'titulo': 'Superadmins',
      'itens': []
    },
    {
      'acesso': [
        'admin',
        'super'
      ],
      'titulo': 'Administração',
      'itens': []
    },
    {
      'acesso': [
        'professor',
        'admin',
        'super'
      ],
      'titulo': 'Professores',
      'itens': []
    },
    {
      'acesso': [
        'autodidata',
        'mentoria',
        'premium',
        'professor',
        'admin',
        'super'
      ],
      'titulo': 'Minha conta',
      'itens': [
        ['Perfil', '/dashboard/usuario/perfil'],
        ['Conta', '/dashboard/usuario/conta']
      ]
    },
    {
      'acesso': [
        'autodidata',
        'mentoria',
        'premium',
        'professor',
        'admin',
        'super'
      ],
      'titulo': 'Mentorias',
      'itens': [
        ['Desenvolvimento', '/dashboard/mentoria/dev'],
        ['Ciência de Dados', '/dashboard/mentoria/dados'],
        ['Ger. de Projetos', '/dashboard/mentoria/proj'],
        ['Arq. de Sistemas', '/dashboard/mentoria/arq']
      ]
    },
    {
      'acesso': [
        'autodidata',
        'mentoria',
        'premium',
        'professor',
        'admin',
        'super'
      ],
      'titulo': 'Cursos',
      'itens': [
        ['Abertos', '/dashboard/cursos/abertos'],
        ['Premium', '/dashboard/cursos/premium']
      ]
    },
    {
      'acesso': [
        'autodidata',
        'mentoria',
        'premium',
        'professor',
        'admin',
        'super'
      ],
      'titulo': 'Palestras',
      'itens': [
        ['Abertas', '/dashboard/palestras/abertas'],
        ['Premium', '/dashboard/palestras/premium']
      ]
    }
  ]


  return (
    <div className="box">
      {menu.map(secao => {
        if (secao.acesso.includes(usuario.papel)) {
          return (
            <div
              key={secao.titulo}
              className='secao-menu no-borders-or-padding'
            >
              <button
                className="button is-black is-fullwidth is-small"
              >
                {secao.titulo}
              </button>
              {secao.itens.map(item => {
                return (
                  <button
                    key={item[0]}
                    className='button is-fullwidth is-small'
                    data-comp={item[1]}
                    onClick={itemMenuClickHandler}
                  >
                    {item[0]}
                  </button>
                )
              })}
            </div>
          )
        }
      })}
    </div>
  )
}