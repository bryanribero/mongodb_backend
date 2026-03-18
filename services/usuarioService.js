import Usuario from '../models/Usuario.js'

export async function insertCollection(dato) {
  return await Usuario.create(dato)
}

export async function findUser(condition = {}) {
  return await Usuario.find(condition)
}

export async function updateAndFindUser(condition, set) {
  return await Usuario.findOneAndUpdate(condition, set, {
    returnDocument: 'after',
  })
}
