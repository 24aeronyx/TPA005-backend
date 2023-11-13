const { User, Todo } = require("../models");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.findAll({ include: Todo });

      res.json({
        message: "Successfully retrieved all users",
        data: users,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;

      const user = await User.findByPk(userId, {
        include: Todo,
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

  deleteUserById: async (req, res) => {
    try {
      const userId = req.params.id;

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      await user.destroy();

      res.json({
        message: "Successfully deleted user by id",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  updateUserById: async (req, res) => {
    try {
      const userId = req.params.id;

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      await user.update(req.body);

      res.json({
        message: "Successfully updated user by id",
        data: user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};
