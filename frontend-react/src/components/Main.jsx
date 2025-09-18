import React from 'react'
import {useContext} from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'


import { AuthContext } from '../AuthProvider'
import {Link, useNavigate} from 'react-router-dom'

const Main = () => {

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
    // <div className='text-light'>Main</div>
    
    <>
   
        <div className='container'>
            <div className='p-5 text-center bg-light-dark'>
                <h1 className='text-light'>Stock Prediction App</h1>
                <p className='text-light lead'>Empowering smarter investments with AI-driven insights, our stock prediction app helps you stay ahead of market trends, minimize risks, and unlock opportunities for consistent growth and financial success.</p>


                {/* {isLoggedIn ? (

                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                ) : 
                
                <>
                  <Button text='Login' class='btn-info' url="/login" />
                  &nbsp;
                  &nbsp;
                  <Button text='Register' url="/register" class="btn-warning"/>
                </>

                
                
                } */}

                <Button text="Explore Now" class="btn-info" url="/dashboard" />

                
            </div>
        </div>

    </>
  )
}

export default Main