const mongoose = require("mongoose");
const dateobj = new Date();
const options = {year:'numeric', month: '2-digit', day: '2-digit', minimumIntegerDigits: 2};
const formatdate = dateobj.toLocaleDateString(options);

console.log("no");

const catSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },    
    lives:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: formatdate,
        required: true
    }
});

module.exports = mongoose.model('Gato',catSchema);