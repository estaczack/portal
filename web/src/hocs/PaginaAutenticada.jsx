import Login from '../pages/Login'

export default function PaginaAutenticada({comp}) {
  if (localStorage.getItem('bssuser')) {
    return comp
  } else {
    return <Login />
  }
}