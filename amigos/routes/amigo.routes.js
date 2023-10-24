const express = require ('express')

const {listarAmigos, listarAmigo}=require('../controllers/amigo.controller')
const { crearNuevoAmigo, actualizarUnAmigo, eliminarUnAmigo } = require('../controllers/amigo.controller');


const router=express.Router()

//rutas:
router.get('/',listarAmigos)
router.get('/:id',listarAmigo)
router.post('/', crearNuevoAmigo);
router.put('/:id', actualizarUnAmigo);
router.delete('/:id', eliminarUnAmigo);


module.exports = router