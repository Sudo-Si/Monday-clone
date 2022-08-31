const PORT =8000
const express =require('express')
const cors = require('cors')
require('dotenv').config()
const axios =require('axios')

const app = express()

app.use(cors())
app.use(express.json())

/* task url  */
const url = 'https://b655984e-71fe-4dfb-986e-8fdee2c42580-asia-south1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:mfmSXFESRFtzujPkYOueRtzo:649ae2536f73e2a76ae70a5f3283c515932cddd7bfb0eeb4e47229436bfbfb51'

app.get('/tickets', async (req, res) => {
    const options ={
        method: 'GET', 
        headers:{
            Accepts:'application/json',
            'X-Cassandra-Token': token,
        }
    }
    try {
        const response = await axios.get(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        .res.status(500).json({message: err})
        
    }
})

app.post('/tickets', async(req, res)=>{
    const formData = req.body.formData

    const options = {
        method : 'POST',
        headers:{
            Accepts :'application/json',
            'X-Cassandra-Token': token,
            'Content-Type' : 'application/json'
        },
        data: formData
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
        
    } catch (err) {
        console.log(err)
        .res.status(500).json({message: err})
        
    }
})
app.listen(PORT, ()=>console.log(`server running on PORT ${PORT}`))
