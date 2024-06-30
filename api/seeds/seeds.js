// Run node seeds.js to populate the DB
import dotenv from 'dotenv'
import mongodb from 'mongodb'

import cursosSeeds from './cursos-seeds.js'
import criarPagamentos from './pagamentos-seeds.js'
import usuariosSeeds from './usuarios-seeds.js'

dotenv.config()
const MongoClient = mongodb.MongoClient
const mongoURL = 'mongodb://172.17.0.2:27017'
const mongoClient = new MongoClient(mongoURL)

async function seedDatabase () {
  try {
    await mongoClient.connect()

    const db = mongoClient.db('bsscursos')
    const cursosCollection = db.collection('cursos')
    const pagamentosCollection = db.collection('pagamentos')
    const usuariosCollection = db.collection('usuarios')

    await db.dropCollection('cursos')
    console.log('Cursos Apagados!')
    await db.dropCollection('pagamentos')
    console.log('Pagamentos Apagados!')
    await db.dropCollection('usuarios')
    console.log('Usuarios Apagados!')

    await usuariosCollection.insertMany(usuariosSeeds)
    console.log('Usuarios Criados...')
    await cursosCollection.insertMany(cursosSeeds)
    console.log('Cursos Criados...')

    const ultimoUsuario = await db.collection('usuarios').findOne({}, { sort: { _id: -1 } })
    const ultimoItem = await db.collection('cursos').findOne({}, { sort: { _id: -1 } })
    const primeiroUsuario = await db.collection('usuarios').findOne({}, { sort: { _id: 1 } })
    const primeiroItem = await db.collection('cursos').findOne({}, { sort: { _id: 1 } })

    const pagamentosSeeds = criarPagamentos(5, ultimoUsuario, primeiroUsuario, ultimoItem, primeiroItem)

    await pagamentosCollection.insertMany(pagamentosSeeds)
    console.log('Pagamentos Criados...')
    //   Nota: ajustar para criar um erro para cada inserção de dados nas coleções.

    console.log('Database seddado')
  } catch (err) {
    console.error('Erro no seeding do database:', err)
  } finally {
    await mongoClient.close()
  }
}

seedDatabase()
