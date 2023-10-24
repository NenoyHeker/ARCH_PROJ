const express = require ('express')

const {listarGatos, listarGato, crearNuevoGato, actualizarGato, eliminarGato}=require('../controllers/gato.controller')

const router=express.Router()

//rutas:
router.get('/cats',listarGatos)
router.get('/patcat/:id',listarGato)
router.post('/addcat', crearNuevoGato)
router.put('/updatecat/:id', actualizarGato)
router.delete('/killcat/:id', eliminarGato)

module.exports = router