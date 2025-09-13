import React from 'react'
import Button from './Button'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    // <div className='text-light'>Header</div>
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link to="/" className='navbar-brand text-light'>Stock Prediction App</Link>

            <div>
                <Button text='Login' class="btn-outline-info" url="/login" />
                &nbsp;
                &nbsp;
                <Button text='Register' url="/register" class="btn-outline-warning"/>
            </div>
        </nav>
    </>
  )
}

export default Header