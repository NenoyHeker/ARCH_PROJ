const express = require("express");
const catSchema = require("../schema/gato.schema");

const router = express.Router();


// get an user

router.get('/patcat/:id', (req, res) =>{
    const { id } = req.params;
    clienteSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// update an user

router.put('/updatecat/:id', (req, res) =>{
    const { id } = req.params;
    const {name, lastname, phone, date} = req.body
    clienteSchema
    .updateOne({_id: id}, {$set:{name, lastname, phone, date}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// delete an user

router.delete('/killcat/:id', (req, res) =>{
    const { id } = req.params;
    clienteSchema
    .deleteOne({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;


// get all cats

const getCats = (res) => {
    try{
        catSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message: error}));
    }catch (err){
        console.error('Error al obtener datos ',err)
    }
   
}




const getCat = id =>{
    try{
        return db.filter(item=>item.id===id)[0]
    }catch (err){
        console.error('Error al obtener los datos',err)
    }
}


//create cat
router.post('/addcat', (req, res) =>{
    const cliente = clienteSchema(req.body);
    cliente.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});


const addCat = (amigo) => {
    try {
        // Genera un nuevo ID para el amigo (debes manejar la asignación de ID)
        const nuevoAmigo = { id: db.length + 1, ...amigo };
        db.push(nuevoAmigo);
        return nuevoAmigo;
    } catch (err) {
        console.error('Error al crear un amigo', err);
        return null;
    }
}

const updateCat = (id, amigo) => {
    try {
        const index = db.findIndex((item) => item.id === id);
        if (index === -1) {
            return null; // El amigo no existe
        }
        db[index] = { id, ...amigo };
        return db[index];
    } catch (err) {
        console.error('Error al actualizar un amigo', err);
        return null;
    }
}

const killCat = (id) => {
    try {
        const index = db.findIndex((item) => item.id === id);
        if (index === -1) {
            return false; // El amigo no existe
        }
        db.splice(index, 1);
        return true;
    } catch (err) {
        console.error('Error al eliminar un amigo', err);
        return false;
    }
}


module.exports={getCats,getCat,addCat,updateCat,killCat};