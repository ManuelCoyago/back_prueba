// config/db.js
const mongoose = require('mongoose');

const connectionDB = async () => {
  try {
    await mongoose.connect(
        'mongodb+srv://alexasalexc:s7Cr6Tuc8c1HkYrD@deployprueba.opgio.mongodb.net/DonantesDB?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectionDB;
