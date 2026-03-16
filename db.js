import mongoose from 'mongoose'

const conectarDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017', {
      dbName: 'prueba',
    })

    console.log('Conexión a MongoDB exitosa')
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err)
    process.exit(1)
  }
}

export default conectarDB
