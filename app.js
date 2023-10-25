const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("dotenv").config();

//configuración del servidor

const app = express()
const port = process.env.PORT || 9000;
app.use(cors());

//rutas

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const catRoutes=require('./gato/routes/gato.routes')
app.use('/gatos',catRoutes)


app.get('/', (req, res)=> {
    res.send("Bienvenido a los Gatos");
});


//mongodb driver

mongoose.connect(
    process.env.URI_MDB)
    .then(()=> console.log("Connected to MongoDB Atlas"))
    .catch((error)=> console.log(error));

app.listen(port, () => console.log('server listening on port ', port));
