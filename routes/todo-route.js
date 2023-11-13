const express = require('express')
const route = express.Router()

const { getAllTodo, getTodoById, addTodo, editTodoById, deleteAllTodo, deleteTodoById } = require('../controllers/todo-controller')

route.get("/", getAllTodo)
route.get("/:id", getTodoById)
route.post("/", addTodo)
route.put("/:id", editTodoById )
route.delete("/", deleteAllTodo)
route.delete("/:id", deleteTodoById)

module.exports = route