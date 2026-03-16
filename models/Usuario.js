import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
    },
    edad: {
      type: Number,
      min: 18,
    },
  },
  {
    versionKey: false,
  }
)

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios')

export default Usuario
