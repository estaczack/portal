import express from 'express'
import https from 'https'
import fs from 'fs'

import { ApolloServer } from 'apollo-server-express'

import mongodb from 'mongodb'
import dotenv from 'dotenv'
import cors from 'cors'

import typeDefs from './typedefs.js'
import resolvers from './resolvers.js'

import DataUtils from './aux/DataUtils.js'

import rotasCursos from './rotas/cursos.js'
import rotasPagamentos from './rotas/pagamentos.js'
import rotasUsuarios from './rotas/usuarios.js'
import rotasYoutube from './rotas/youtube.js'

dotenv.config()

const MongoClient = mongodb.MongoClient

const start = async () => {
  try {
    const mongoURL = `mongodb://172.17.0.2:27017`
    const mongoClient = new MongoClient(mongoURL)
    await mongoClient.connect()
    const db = mongoClient.db('bsscursos')
    const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ db }) })
    await server.start()
    const app = express()

    const corsOptions = {
      origin: '*'
    }

    app.use(cors(corsOptions))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    server.applyMiddleware({ app })

    app.use('*', function (req, res, next) {
      req.apolloServer = server
      if (req.method === 'POST') {
        if (req.body.params) {
          req.body.params.criadoEm = DataUtils.FormatarData(new Date())
          req.body.params.atualizadoEm = DataUtils.FormatarData(new Date())
          req.body.params.atualizadoPor = ''
        } else {
          req.body.criadoEm = DataUtils.FormatarData(new Date())
          req.body.atualizadoEm = DataUtils.FormatarData(new Date())
          req.body.atualizadoPor = ''
        }
      } else if (req.method === 'PUT') {
        if (req.body.params) {
          req.body.params.atualizadoEm = DataUtils.FormatarData(new Date())
        } else {
          req.body.atualizadoEm = DataUtils.FormatarData(new Date())
        }
      }
      next()
    })

    app.use('/api/v1/cursos', rotasCursos)
    app.use('/api/v1/pagamentos', rotasPagamentos)
    app.use('/api/v1/usuarios', rotasUsuarios)
    app.use('/api/v1/youtube', rotasYoutube)

    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err)
  }
}

start()
