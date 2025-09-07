// routes/medicoRoutes.js
const express = require('express');
const router = express.Router();
const PacienteControlador = require('../controlador/PacienteControlador');

// Rutas disponibles:
// GET     /paciente          -> listar todos los pacPaciente
// GET     /paciente/:id      -> obtener unpaciente por ID
// POST    /paciente          -> crear un nuevopaciente
// PUT     /paciente/:id      -> actualizar unpaciente
// DELETE  /paciente/:id      -> eliminar unpaciente

router.get('/', PacienteControlador.listar);
router.get('/:id', PacienteControlador.obtenerPorId);
router.post('/', PacienteControlador.crear);
router.put('/:id', PacienteControlador.actualizar);
router.delete('/:id', PacienteControlador.eliminar);

module.exports = router;
