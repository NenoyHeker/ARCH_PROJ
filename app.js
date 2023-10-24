const express = require('express')

const app = express()
const port = 7070


const amigoRoutes=require('./amigos/routes/amigo.routes')

app.use('/amigos',amigoRoutes)

app.listen(port,()=>console.log(`Servidor escuchando en http://localhost ${port}`))