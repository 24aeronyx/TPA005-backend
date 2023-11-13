const { User } = require("../models")

module.exports = {
    getAllUser: async (req, res) => {
      const users = await User.findAll({attributes: { exclude: ["password"] }});
  
      res.json({
        message: "Berhasil mendapatkan user",
        data: users,
      });
    },

    getUserById: async(req, res) => {

    },

    addUser: async(req, res) => {

    },
}