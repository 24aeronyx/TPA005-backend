const { User } = require("../models");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });

    res.json({
      message: "Berhasil mendapatkan user",
      data: users,
    });
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;

      const user = await User.findByPk(userId, {
        include: Todo, // Include associated Todo records
      });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.json({
        message: "Successfully retrieved user by id",
        data: user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  addUser: async (req, res) => {},
};
