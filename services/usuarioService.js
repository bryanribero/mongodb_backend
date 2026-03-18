import mongoose from 'mongoose'
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

export async function deleteUser(filter) {
  return await Usuario.deleteOne(filter)
}

export async function transactionUser(newUser, filter, newValue, num) {
  const session = await mongoose.startSession()

  try {
    await session.withTransaction(async () => {
      await Usuario.create([newUser], { session })

      await Usuario.updateOne(
        filter,
        {
          $set: newValue,
        },
        { session }
      )

      if (num < 1) {
        throw new Error('No se completo la transaccion')
      }
    })
  } finally {
    session.endSession()
  }
}
