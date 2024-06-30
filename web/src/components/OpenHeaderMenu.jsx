import { Link } from 'react-router-dom'

export default function OpenHeaderMenu () {
  return (
    <div className='level-right'>
      <div className='level-item'>
        <Link className='button is-dark' to='/'>
          <i className='fa-solid fa-house-chimney'></i>&nbsp;&nbsp;Homepage
        </Link>
        <Link className='button is-dark' to='/login'>
          <i className='fa-solid fa-right-to-bracket'></i>&nbsp;&nbsp;Entre
        </Link>
      </div>
    </div>
  )
}
