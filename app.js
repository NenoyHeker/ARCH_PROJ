const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();

//configuración del servidor

const app = express()
const port = process.env.PORT || 9000;
app.use(cors());

//rutas

const catRoutes=require('./gato/routes/gato.routes')
app.use('/gatos',catRoutes)

//mongodb driver

mongoose.connect(
    process.env.URI_MDB)
    .then(()=> console.log("Connected to MongoDB Atlas"))
    .catch((error)=> console.log(error));

app.listen(port, () => console.log('server listening on port ', port));
