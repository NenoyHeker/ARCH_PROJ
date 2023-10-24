const {getCats,getCat,addCat,updateCat,killCat}=require('../models/gato.model')

const listarGatos = (req,res) => {
    try{
        const resp = getCats()
        res.status(200).send(resp)
    }catch (err){
        res.status(500).send(err)
    }
}


const listarGato = (req,res) =>{
    try{
        const resp = getCat(parseInt(req.params.id))
        res.status(200).send(resp)
    } catch(err){
        res.status(500).send(err)
    }
}



const crearNuevoGato = (req, res) => {
    try {
        const nuevoGato = crearGato(req.body);
        if (!nuevoGato) {
            res.status(400).send('No se pudo crear el amigo');
            return;
        }
        res.status(201).send(nuevoGato);
    } catch (err) {
        res.status(500).send(err);
    }
}

const actualizarGato = (req, res) => {
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

const eliminarGato = (req, res) => {
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



module.exports = {listarGatos,listarGato,crearNuevoGato, actualizarGato, eliminarGato};