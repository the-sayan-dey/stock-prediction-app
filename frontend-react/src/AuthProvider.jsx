import { createContext } from 'react'
import {useState, useContext} from 'react'

// create the context
const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken')
    )

  return (
    // <div>AuthProvider</div>
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext}