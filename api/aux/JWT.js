import dotenv from 'dotenv'

import { JSONWebToken, HS256Strategy } from '@mokuteki/jwt'
dotenv.config()

const strategy = new HS256Strategy({
  ttl: 120 * 60 * 1000,
  secret: process.env.APP_SECRET
})

const jwt = new JSONWebToken(strategy)

const JWT = {

  generate: function (obj) {
    const newObj = {
      sub: obj._id,
      ema: obj.email,
      exp: '120m'
    }
    const token = jwt.generate(newObj)
    return token
  },

  extract: function (token) {
    return jwt.verify(token)
  }
}

export default JWT
