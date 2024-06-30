import { ObjectId } from 'mongodb'

export default {
  Query: {
    cursos: async (parent, args, { db }) => {
      return await db.collection('cursos').find().toArray()
    },
    cursoPorId: async (parent, { id }, { db }) => {
      const curso = await db.collection('cursos').findOne(new ObjectId(id))
      return curso
    },
    cursoPorProfessor: async (parent, { professor }, { db }) => {
      console.log({ professor })
      return await db.collection('cursos').find({ professor }).toArray()
    }
  },
  Mutation: {
    criaCurso: async (parent, { params }, { db }) => {
      const result = await db.collection('cursos').insertOne(params)
      console.log(result)
      params._id = result.insertedId
      return params
    },
    atualizaCurso: async (parent, { id, params }, { db }) => {
      await db.collection('cursos').updateOne({ id }, { $set: params })
      return await db.collection('cursos').findOne({ id })
    },
    ativaCurso: async (_, { id }, { db }) => {
      await db.collection('cursos').updateOne({ _id: new ObjectId(id) }, { $set: { ativo: true } })
      const curso = await db.collection('cursos').findOne(new ObjectId(id))
      return curso
    },
    desativaCurso: async (_, { id }, { db }) => {
      await db.collection('cursos').updateOne({ _id: new ObjectId(id) }, { $set: { ativo: false } })
      const curso = await db.collection('cursos').findOne(new ObjectId(id))
      return curso
    },
    apagaCurso: async (parent, { id }, { db }) => {
      const result = await db.collection('cursos').deleteOne({ id })
      if (result.deletedCount === 0) {
        throw new Error(`Could not delete course with id ${id}`)
      }
      return { id }
    }
  }
}
