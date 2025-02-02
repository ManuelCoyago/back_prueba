// models/Donante.js
const mongoose = require('mongoose');

const DonanteSchema = new mongoose.Schema({
  cedula: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  tipoSangre: { type: Number, required: true }
});

module.exports = mongoose.model('Donante', DonanteSchema);
