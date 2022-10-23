const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).json({status:"error",error:"No autorizado"})

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({status:"error",error:"No autorizado"})
    console.log(user)
    req.userId = user.id
    next()
  })
}

module.exports = authenticateToken