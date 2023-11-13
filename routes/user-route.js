const express = require('express')
const route = express.Router()

const { getAllUser, getUserById, addUser } = require('../controllers/user-controller')

route.get("/", getAllUser)
route.get("/", getUserById)
route.get("/", addUser)
route.get("/", )

module.exports = route