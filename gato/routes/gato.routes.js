const express = require("express");
const catSchema = require("../models/gato.model");

const router = express.Router();

//create cat
router.post('/addcat', (req, res) =>{
    const gato = catSchema(req.body);
    gato.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get all cats

router.get('/cats', (req, res) =>{
    catSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// get a cat

router.get('/patcat/:id', (req, res) =>{
    const { id } = req.params;
    catSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// update a cat

router.put('/updatecat/:id', (req, res) =>{
    const { id } = req.params;
    const {name, color, lives, date} = req.body
    catSchema
    .updateOne({_id: id}, {$set:{name, color, lives, date}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

// delete a cat

router.delete('/killcat/:id', (req, res) =>{
    const { id } = req.params;
    catSchema
    .deleteOne({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;