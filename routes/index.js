const express = require('express');
const route = express.Router()

const authRoute = require('./auth-route')
const userRoute = require('./user-route')
const todoRoute = require('./todo-route');
const verifyToken = require('../middleware/auth');

route.get("/", (req, res) => {
    res.json("Selamat datang di todo app")
})

route.use("/auth", authRoute)
route.use("/users", userRoute)
route.use("/todos", verifyToken, todoRoute)

module.exports = route