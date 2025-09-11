import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    // <div className='text-light'>Header</div>
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a href="" className='navbar-brand text-light'>Stock Prediction App</a>

            <div>
                <Button text='Login' class="btn-outline-info"/>
                &nbsp;
                &nbsp;
                <Button text='Register' class="btn-outline-warning"/>
            </div>
        </nav>
    </>
  )
}

export default Header