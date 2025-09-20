import axios from 'axios'
import React, {useEffect, useState} from 'react'

import axiosInstance from '../../axiosInstance'

const Dashboard = () => {

    const [ticker , setTicker] = useState('')
    const [error, setError] = useState()

    const [plot, setPlot] = useState()
    const [ma100, setMA100] = useState()
    const [ma200, setMA200] = useState()
    const [prediction, setPrediction] = useState()

    const [mse, setMSE] = useState()
    const [rmse, setRMSE] = useState()
    const [r2, setR2] = useState()

    // const accessToken = localStorage.getItem('access_token')

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const response = await axiosInstance.get('/protected-view')
                // console.log('Success: ', response.data)
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
        }

        fetchProtectedData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await axiosInstance.post('/predict/', {
                ticker: ticker
            });
            console.log(response.data)

            const backendRoot = import.meta.env.VITE_BACKEND_ROOT
            const plotUrl = `${backendRoot}${response.data.plot_img}`
            const ma100Url = `${backendRoot}${response.data.plot_100_dma}`
            const ma200Url = `${backendRoot}${response.data.plot_200_dma}`

            const predictionUrl = `${backendRoot}${response.data.plot_prediction}`
            // console.log(plotUrl)
            setPlot(plotUrl)
            setMA100(ma100Url)
            setMA200(ma200Url)
            setPrediction(predictionUrl)

            setMSE(response.data.mse)
            setRMSE(response.data.rmse)
            setR2(response.data.r2)
            // set plots


            if(response.data.error){
                setError(response.data.error)
            }

        } catch(error){
            console.error('There was an error while making the api...', error);
        }
    }

  return (
    <div className='text-light container'>
        <div className="row">
            <div className="col-md-6 mx-auto">
                <form action="" method="post" onSubmit={handleSubmit}>
                    <input type="text" name="" id="" className='form-control' placeholder='Enter Stock Ticker' 
                    
                        onChange={(e) => setTicker(e.target.value)} required
                    
                    />

                    <small>{error && <div className='text-danger'>{error}</div>}</small>

                    <button type='submit' className='btn btn-success mt-3'>See Prediction</button>
                </form>
            </div>

            {/* print prediction plots */}
            { prediction && (
                <div className="prediction mt-5">
                <div className="p-5">
                    {plot && (
                        <img src={plot} style={{ maxWidth: '100%' }} alt="" />
                    )}
                </div>

                <div className="p-3">
                    {ma100 && (
                        <img src={ma100} style={{ maxWidth: '100%' }} alt="" />
                    )}
                </div>


                <div className="p-3">
                    {ma200 && (
                        <img src={ma200} style={{ maxWidth: '100%' }} alt="" />
                    )}
                </div>



                <div className="p-3">
                    {prediction && (
                        <img src={prediction} style={{ maxWidth: '100%' }} alt="" />
                    )}
                </div>


                <div className="text-light p-3">
                    <h4>Model Evaluation</h4>

                    <p>Mean Squared Error (MSE): {mse}</p>
                    <p>Root Mean Squared Error (RMSE): {rmse}</p>
                    <p>R-Squared (R2): {r2}</p>
                </div>
            </div>

            ) }
            
        </div>
    </div>
  )
}

export default Dashboard