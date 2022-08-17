const PORT =8000
const express =require('express')
const cors = require('cors')
require('dotenv').config()
const axios =require('axios')

const app = express()

app.use(cors())
app.use(express.json())

const url = 'https://9c634c1a-d354-4cc6-9aad-a2042cf8ca7d-asia-south1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:PJCRzPGGOOBqgTTbyRyEMhpz:a6462f39e9fe8b82d29018c6522d65382ecda5ad156a84897e5a93e950a9e0f5'

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

    const options ={
        method: 'POST',
        headers:{
            Accepts:'application/json',
            'X-Cassandra-Token': token,
            'Content-Type' :' application/json'
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
