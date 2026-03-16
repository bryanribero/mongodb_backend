import http from 'http'
import { insertCollection } from './services/usuarioService.js'
import conectarDB from './db.js'

const server = http.createServer(async (req, res) => {
  await conectarDB()

  if (req.method === 'POST' && req.url === '/usuario') {
    try {
      const usuario = await insertCollection({
        nombre: 'Mariana',
        edad: 900,
        propiedades: true,
      })

      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify(usuario))
    } catch (err) {
      res.writeHead(401)
      res.end(err)
    }
  }
})

server.listen(3000, () => {
  console.log('http://localhost:3000')
})
