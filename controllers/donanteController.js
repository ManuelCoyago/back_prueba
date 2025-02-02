const Donante = require('../models/Donante');

// Agregar Donante
exports.agregarDonante = async (req, res) => {
  try {
    const { cedula, nombre, edad, tipoSangre } = req.body;
    const donanteExistente = await Donante.findOne({ cedula });
    if (donanteExistente) {
      return res.status(400).json({ error: 'El donante ya existe' });
    }
    const donante = new Donante({ cedula, nombre, edad, tipoSangre });
    await donante.save();
    res.status(201).json({ message: 'Donante agregado exitosamente', donante });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

// Consultar Donante por Cédula
exports.consultarPorCedula = async (req, res) => {
  try {
    const { cedula } = req.params;
    const donante = await Donante.findOne({ cedula });
    if (!donante) {
      return res.status(404).json({ error: 'No se encontró el donante' });
    }
    res.json(donante);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

// Consultar Donantes por Tipo de Sangre
exports.consultarPorTipoSangre = async (req, res) => {
  try {
    const { tipoSangre } = req.params;
    const count = await Donante.countDocuments({ tipoSangre: parseInt(tipoSangre) });
    res.json({ tipoSangre: parseInt(tipoSangre), cantidad: count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

// ✅ Listar Todos los Donantes
exports.listarDonantes = async (req, res) => {
  try {
    const donantes = await Donante.find();
    res.json(donantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
