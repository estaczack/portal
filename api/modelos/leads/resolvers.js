import Password from '../../aux/Password.js'

export default {
  Query: {
    leads: async (__root, __args, { db }) => {
      return await db.collection('leads').find().toArray()
    },
    leadPorId: async (_, { id }, { db }) => {
      return await db.collection('leads').findOne({ _id: db.ObjectId(id) })
    },
    leadPorEmail: async (_, { email }, { db }) => {
      return await db.collection('leads').findOne({ email })
    },
    leadsPorPerfil: async (_, { perfil }, { db }) => {
      return await db.collection('leads').find({ perfil }).toArray()
    },
    leadsMailing: async (_, { aceiteMailing }, { db }) => {
      return await db.collection('leads').find({ aceiteMailing }).toArray()
    }
  },
  Mutation: {
    criaLead: async (_, { nome, email, celularComDDD, perfil, aceiteMailing, pwd, origin }, { db }) => {
      pwd = await Password.encrypt(pwd)
      const leadUsuario = { nome, email, celularComDDD, perfil, aceiteMailing, pwd, origin }
      const result = await db.collection('leads').insertOne(leadUsuario)
      leadUsuario.id = result.insertedId
      return leadUsuario
    },
    apagaLead: async (_, { id }, { db }) => {
      const leadUsuario = await db.collection('leads').findOne({ _id: db.ObjectId(id) })
      await db.collection('leads').deleteOne({ _id: db.ObjectId(id) })
      return leadUsuario
    }
  }
}
