const { Todo } = require("../models")

module.exports = {
    getAllTodo: async (req, res) => {
      const todos = await Todo.findAll();
  
      res.json({
        message: "Berhasil mendapatkan todo",
        data: todos,
      });
    },

    getTodoById: async(req, res) => {

    },

    addTodo: async(req, res) => {

    },
}