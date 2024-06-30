import { ObjectId } from 'mongodb'

import Password from '../../aux/Password.js'

export default {
  Query: {
    usuarios: async (__root, __args, { db }) => {
      return await db.collection('usuarios').find().toArray()
    },
    usuarioPorId: async (_, { id }, { db }) => {
      return await db.collection('usuarios').findOne({ _id: new ObjectId(id) })
    },
    usuarioPorEmail: async (_, { email }, { db }) => {
      return await db.collection('usuarios').findOne({ email })
    },
    usuariosPorReferencia: async (_, { referencia }, { db }) => {
      return await db.collection('usuarios').find({ referencia }).toArray()
    }
  },
  Mutation: {
    criaUsuario: async (_, { params }, { db }) => {
      params.senha = await Password.encrypt(params.senha)
      const user = await db.collection('usuarios').insertOne(params)
      params._id = user.insertedId
      return params
    },
    atualizaUsuario: async (_, { id, nome, email }, { db }) => {
      const user = { nome, email }
      await db
        .collection('usuarios')
        .updateOne({ _id: db.ObjectId(id) }, { $set: user })
      user.id = id
      return user
    },
    apagaUsuario: async (_, { id }, { db }) => {
      const user = await db.collection('usuarios').findOne({ _id: new ObjectId(id) })
      await db.collection('usuarios').deleteOne({ _id: db.ObjectId(id) })
      return user
    },
    suspendeUsuario: async (_, { id }, { db }) => {
      const user = await db.collection('usuarios').findOne({ _id: new ObjectId(id) })
      await user.updateOne({ ativo: false })
      return user
    },
    reativaUsuario: async (_, { id }, { db }) => {
      const user = await db.collection('usuarios').findOne({ _id: new ObjectId(id) })
      await user.updateOne({ ativo: true })
      return user
    },
    baneUsuario: async (_, { id }, { db }) => {
      const user = await db.collection('usuarios').findOne({ _id: new ObjectId(id) })
      await user.updateOne({ banido: true })
      return user
    },
    criaAdmin: async (_, { id }, { db }) => {
      const userId = new ObjectId(id);
      const result = await db.collection('usuarios').findOneAndUpdate(
        { _id: userId },
        { $set: { papel: 'admin' } },
        { returnDocument: 'after' }
      );
      return result
    },
    criaSuperadmin: async (_, { id }, { db }) => {
      const userId = new ObjectId(id);
      const result = await db.collection('usuarios').findOneAndUpdate(
        { _id: userId },
        { $set: { papel: 'super' } },
        { returnDocument: 'after' }
      );
      return result
    },
    validaEmail: async (_, { id }, { db }) => {
      const userId = new ObjectId(id);
      const result = await db.collection('usuarios').findOneAndUpdate(
        { _id: userId },
        { $set: { validado: true } },
        { returnDocument: 'after' }
      );
      return result
    },
    removeUsuario: async (_, { id }, { db }) => {
      const userId = new ObjectId(id);
      const result = await db.collection('usuarios').findOneAndDelete(
        { _id: userId },
        { $set: { validado: true } },
        { returnDocument: 'after' }
      );
      return result
    }
  }
}
