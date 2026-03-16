import Usuario from '../models/Usuario.js'

export async function insertCollection(dato) {
  const newUser = new Usuario(dato)

  const savedUser = await newUser.save()

  return savedUser
}
