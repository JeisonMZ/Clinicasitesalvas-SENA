// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const medicoRutas = require('./vista/MedicoRutas'); // Ajusta la ruta si es necesario
const pacienteRutas = require('./vista/PacienteRutas');
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Rutas
app.use('/medicos', medicoRutas);
app.use('/pacientes', pacienteRutas); // Nueva ruta para pacientes

// Ruta base
app.get('/', (req, res) => {
    res.send('API de Médicos funcionando');
});

// Iniciar servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
