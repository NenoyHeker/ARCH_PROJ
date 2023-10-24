const {getAmigos,getAmigo}=require('../models/amigo.model')

const listarAmigos = (req,res) => {
    try{
        const resp = getAmigos()
        res.status(200).send(resp)
    }catch (err){
        res.status(500).send(err)
    }
}


const listarAmigo = (req,res) =>{
    try{
        const resp = getAmigo (parseInt(req.params.id))
        res.status(200).send(resp)
    } catch(err){
        res.status(500).send(err)
    }
}



const crearNuevoAmigo = (req, res) => {
    try {
        const nuevoAmigo = crearAmigo(req.body);
        if (!nuevoAmigo) {
            res.status(400).send('No se pudo crear el amigo');
            return;
        }
        res.status(201).send(nuevoAmigo);
    } catch (err) {
        res.status(500).send(err);
    }
}

const actualizarUnAmigo = (req, res) => {
    try {
        const resp = actualizarAmigo(parseInt(req.params.id), req.body);
        if (!resp) {
            res.status(404).send('Amigo no encontrado');
            return;
        }
        res.status(200).send(resp);
    } catch (err) {
        res.status(500).send(err);
    }
}

const eliminarUnAmigo = (req, res) => {
    try {
        const exito = eliminarAmigo(parseInt(req.params.id));
        if (!exito) {
            res.status(404).send('Amigo no encontrado');
            return;
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
}



module.exports = {listarAmigos,listarAmigo}