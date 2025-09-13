import React ,{useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)

    const handleRegistration = async (e) => {
        e.preventDefault();
        console.log('test')

        const userData = {
            username, email, password
        }

        // console.log( "userdata ==>",userData);

        try{
            const response = await axios.post('http://127.0.0.1:8000//api/v1/register/', userData)
            console.log('response.data==> ',response.data)
            console.log("Registration was successful")

            setErrors({})
            setSuccess(true)
        } catch(error){
            setErrors(error.response.data)

            console.error('Registration error: ', error.response.data)
        }
    }
  return (
    // <div className='text-light container'>Register</div>

    <>
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-6 bg-light-dark p-5">
                    <h3 className='text-light text-center mb-4'>Create an Account</h3>

                    <form action="" onSubmit={handleRegistration}>

                        <div className="mb-3">
                            <input type="text" name="" className='form-control' id="" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />

                            {/* error display  */}
                            <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                        </div>

                        <div className="mb-3">
                            <input type="email" name="" placeholder='Enter Email Address' className='form-control' id="" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        
                        
                        <div className="mb-3">
                            <input type="password" name="" placeholder='Set Password' className='form-control' id="" value={password} onChange={(e) => setPassword(e.target.value)} />

                            <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                        </div>
                        

                        {success && <div className='alert alert-success'>Registration Successful.</div>}

                        <button className='btn btn-info d-block mx-auto' type='submit'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register