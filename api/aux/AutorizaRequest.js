import JWT from './JWT.js'

export default function (req, res, next) {
  const authHeader = req.headers.authorization
  const xEmail = req.headers['x-email']
  const userAgent = req.get('User-Agent')
  if (userAgent && userAgent.startsWith('curl/')) {
    next()
  } else {
    let token = authHeader && authHeader.split(' ')[1]
    let decoded = JWT.extract(token)
  
    if (!token) {
      res.status(400).json({
        ok: false,
        msg: 'Requisição inválida'
      })
    }
  
    if (xEmail === decoded.ema) {
      next()
    } else {
      res.status(401).json({
        ok: false,
        msg: 'Requisição não autorizada'
      })
    }
  }
}
