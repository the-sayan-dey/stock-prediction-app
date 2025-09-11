import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    // <div className='text-light'>Main</div>
    
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark'>
                <h1 className='text-light'>Stock Prediction App</h1>
                <p className='text-light lead'>Empowering smarter investments with AI-driven insights, our stock prediction app helps you stay ahead of market trends, minimize risks, and unlock opportunities for consistent growth and financial success.</p>

                <Button text='Login' class='btn-info' />
            </div>
        </div>
    </>
  )
}

export default Main