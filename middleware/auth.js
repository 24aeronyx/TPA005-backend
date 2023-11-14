const jwt = require("jsonwebtoken")

const KEY = "oljhcsaouhbgoq"

const verifyToken = (req, res, next) => {
  console.log(req)
  const header = req.headers.authorization
  console.log(header)

  if (!header) {
    return next();
  }

  const token = header.split(" ")[1]

  if (!token) {
    res.json({
      message: "invalid token"
    })
    return
  }

  const payload = jwt.verify(token, KEY)

  req.payload = payload

  next()
}

module.exports = verifyToken