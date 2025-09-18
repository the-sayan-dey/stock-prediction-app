import {useContext} from 'react'
import Button from './Button'

import {Link, useNavigate} from 'react-router-dom'

import { AuthContext } from '../AuthProvider'

const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')

    setIsLoggedIn(false)
    console.log('Logged out.')
    navigate('/login')
  }

  return (
    // <div className='text-light'>Header</div>
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link to="/" className='navbar-brand text-light'>Stock Prediction App</Link>

            <div>
              {isLoggedIn ? (
                // <span className='text-light'>Logout</span>
                // <Button text='Logout' class='btn-danger' />
                <>
                  <Button text='Dashboard' url="/dashboard" class="btn-outline-warning"/>
                  &nbsp;
                  &nbsp;
                  <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
                </>
              ) :
              
                <>
                  <Button text='Login' class="btn-outline-info" url="/login" />
                  &nbsp;
                  &nbsp;
                  <Button text='Register' url="/register" class="btn-outline-warning"/>
                </>
              
              }
                
            </div>
        </nav>
    </>
  )
}

export default Header