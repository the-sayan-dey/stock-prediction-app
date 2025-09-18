import axios from "axios";
import { useContext, useState } from "react";
import React  from 'react'
import {useNavigate} from 'react-router-dom'

import { AuthContext } from "../AuthProvider";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const [error, setError] = useState('')

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()

    const userData = {username, password}
    console.log('userData ==> ', userData)

    try{
      const response = await axios.post('http://127.0.0.1:8000//api/v1/token/', userData)
      console.log(response.data)

      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)

      console.log('Logged in successfully.')

      setIsLoggedIn(true)

      navigate('/dashboard')
    } catch(error){
      console.log('Invalid credentials')
      setError('Invalid credentials...')
    }
  }
  

  return (
    // <div className='text-light container'>Login</div>

    <>
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-6 bg-light-dark p-5">
                    <h3 className='text-light text-center mb-4'>Login to the Application</h3>

                    <form action="" onSubmit={handleLogin}>

                        <div className="mb-3">
                            <input type="text" name="" className='form-control' id="" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />

                            
                        </div>

                        
                        
                        
                        <div className="mb-3">
                            <input type="password" name="" placeholder='Set Password' className='form-control' id="" value={password} onChange={(e) => setPassword(e.target.value)} />

                            
                        </div>
                        
                        {error && <div className="text-danger">{error}</div>}
                        
                        <button className='btn btn-info d-block mx-auto' type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login