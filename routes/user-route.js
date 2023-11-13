const express = require('express')
const route = express.Router()

const { getAllUser, getUserById, deleteUserById, updateUserById } = require('../controllers/user-controller')

route.get("/", getAllUser)
route.get("/:id", getUserById)
route.delete("/:id", deleteUserById)
route.put("/:id", updateUserById)

module.exports = route