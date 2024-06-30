import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard, { loader as dashboardLoader } from './pages/Dashboard'
import DashboardMain from './components/menudashboard/DashboardMain'
import ErrorPage from './error-page'
import Esqueceu from './pages/Esqueceu'
import Homepage, { loader as referenciaLoader } from './pages/Homepage'
import Inscricao, { loader as inscricaoLoader } from './pages/Inscricao'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Mensagem, { loader as mensagemLoader } from './pages/Mensagem'
import MentoriaArquitetura from './components/menudashboard/MentoriaArquitetura'
import MentoriaDados from './components/menudashboard/MentoriaDados'
import MentoriaDesenvolvimento from './components/menudashboard/MentoriaDesenvolvimento'
import MentoriaProjetos from './components/menudashboard/MentoriaProjetos'
import NovaSenha from './pages/NovaSenha'
import PaginaAutenticada from './hocs/PaginaAutenticada'
import Player, { loader as playerLoader } from './pages/Player'
import Privacidade from './pages/Privacidade'
import Registrado, { loader as registradoLoader } from './pages/Registrado'
import Registro from './pages/Registro'
import Sobre from './pages/Sobre'
import Termos from './pages/Termos'

import './assets/bulma/css/bulma.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
        loader: referenciaLoader
      },
      {
        path: 'dashboard',
        element: <PaginaAutenticada comp={<Dashboard subpage={<DashboardMain />} />} />,
        loader: dashboardLoader
      },
      {
        path: 'dashboard/mentoria/dev',
        element: <PaginaAutenticada comp={<Dashboard subpage={<MentoriaDesenvolvimento />} />} />,
        loader: dashboardLoader
      },
      {
        path: 'dashboard/mentoria/dados',
        element: <PaginaAutenticada comp={<Dashboard subpage={<MentoriaDados />} />} />,
        loader: dashboardLoader
      },
      {
        path: 'dashboard/mentoria/proj',
        element: <PaginaAutenticada comp={<Dashboard subpage={<MentoriaProjetos />} />} />,
        loader: dashboardLoader
      },
      {
        path: 'dashboard/mentoria/arq',
        element: <PaginaAutenticada comp={<Dashboard subpage={<MentoriaArquitetura />} />} />,
        loader: dashboardLoader
      },
      {
        path: 'esqueceu-senha',
        element: <Esqueceu />
      },
      {
        path: 'inscricao/:tipo/:referencia',
        element: <Inscricao />,
        loader: inscricaoLoader
      },
      {
        path: 'landing/:id',
        element: <Landing />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'mensagem',
        element: <Mensagem />,
        loader: mensagemLoader
      },
      {
        path: 'criar-nova-senha',
        element: <NovaSenha />
      },
      {
        path: 'player',
        element: <Player />,
        loader: playerLoader
      },
      {
        path: 'privacidade',
        element: <Privacidade />
      },
      {
        path: 'registrado',
        element: <Registrado />,
        loader: registradoLoader
      },
      {
        path: 'registre',
        element: <Registro />
      },
      {
        path: 'sobre',
        element: <Sobre />
      },
      {
        path: 'termos',
        element: <Termos />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
