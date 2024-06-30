import bcrypt from 'bcryptjs'

const Password = {

  encrypt: async function (pwd) {
    const saltRounds = 10
    return await bcrypt.hash(pwd, saltRounds)
  },

  verify: async function (pwd, pwdDB) {
    return await bcrypt.compare(pwd, pwdDB)
  },

  validate: function (pwd) {
    return (/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(pwd))
  }

}

export default Password
