const express = require('express')
const route = express.Router()

const { getAllTodo, getTodoById, addTodo } = require('../controllers/todo-controller')

route.get("/", getAllTodo)
route.get("/", getTodoById)
route.post("/", addTodo)
route.get("/", )

module.exports = route