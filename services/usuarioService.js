import Usuario from '../models/Usuario.js'

export async function insertCollection(dato) {
  return await Usuario.create(dato)
}

export async function findUser(condition = {}) {
  return await Usuario.find(condition)
}
