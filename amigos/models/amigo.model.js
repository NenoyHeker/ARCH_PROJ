const db = require('../../db/db')

const getAmigos = () => {
    try{
        console.log('furula');
        return db
    }catch (err){
        console.error('Error al obtener los datos',err)
    }
}




const getAmigo = id =>{
    try{
        return db.filter(item=>item.id===id)[0]
    }catch (err){
        console.error('Error al obtener los datos',err)
    }
}


/*
const crearAmigo = (amigo) => {
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

const actualizarAmigo = (id, amigo) => {
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

const eliminarAmigo = (id) => {
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

*/

module.exports={getAmigos,getAmigo};