// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const donanteRoutes = require('./routes/donanteRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conexión a MongoDB Atlas
connectDB();

// Rutas
app.use('/api/donantes', donanteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
