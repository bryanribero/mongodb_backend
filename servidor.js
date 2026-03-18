import http from 'http'
import {
  findUser,
  insertCollection,
  updateAndFindUser,
} from './services/usuarioService.js'
import conectarDB from './db.js'

const server = http.createServer(async (req, res) => {
  await conectarDB()

  if (req.method === 'POST' && req.url === '/usuario') {
    try {
      const usuario = await insertCollection({
        nombre: 'Bryan',
        edad: 27,
      })

      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify(usuario))
    } catch (err) {
      res.writeHead(401)
      res.end(err)
    }
  }

  if (req.method === 'GET' && req.url === '/usuario') {
    try {
      const user = await findUser({ nombre: 'Jose' })

      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify(user))
    } catch (err) {
      res.writeHead(401)
      res.end(err)
    }
  }

  if (req.method === 'PATCH' && req.url === '/usuario') {
    try {
      const user = await updateAndFindUser(
        { nombre: 'Jose' },
        { $set: { nombre: 'Ya no es Jose' } }
      )

      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify(user))
    } catch (err) {
      res.writeHead(401)
      res.end(err)
    }
  }
})

server.listen(3000, () => {
  console.log('http://localhost:3000')
})
