const mongoose = require('mongoose');

//Shema DB
const TaskChema  = mongoose.Schema({
    titre : String,
    statuts : Number
})

module.exports = mongoose.model('Task', TaskChema);