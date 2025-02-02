// routes/donanteRoutes.js
const express = require('express');
const router = express.Router();
const donanteController = require('../controllers/donanteController');

router.get('/', donanteController.listarDonantes);

// Ruta para agregar un donante (POST /api/donantes)
router.post('/', donanteController.agregarDonante);

// Ruta para consultar un donante por cédula (GET /api/donantes/cedula/:cedula)
router.get('/cedula/:cedula', donanteController.consultarPorCedula);

// Ruta para consultar cantidad de donantes por tipo de sangre (GET /api/donantes/tipo/:tipoSangre)
router.get('/tipo/:tipoSangre', donanteController.consultarPorTipoSangre);


module.exports = router;
