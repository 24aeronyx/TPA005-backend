const { Todo } = require("../models");

module.exports = {
  getAllTodo: async (req, res) => {
    const todos = await Todo.findAll();

    res.json({
      message: "Berhasil mendapatkan todo",
      data: todos,
    });
  },

  getTodoById: async (req, res) => {
    try {
      const todoId = req.params.id;

      const todo = await Todo.findByPk(todoId);

      if (!todo) {
        return res.status(404).json({
          message: "Todo not found",
        });
      }

      res.json({
        message: "Berhasil mendapatkan todo by id",
        data: todo,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  addTodo: async (req, res) => {
    let data = req.body;

    try {
      await Todo.create(data);

      res.status(201).json({
        message: "Berhasil menambahkan todo",
      });
    } catch (error) {
      res.json({
        message: "Gagal menambahkan todo",
        error: error.message,
      });
    }
  },
};
