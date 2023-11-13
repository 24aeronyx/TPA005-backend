const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const {User} = require('../models')

const route = express.Router()

route.post('/login', async (req, res) => {
  try {
    const data = req.body
    const user = await User.findOne({ where: { email: data.email } });

    if (!user) {
      return res.json({
        message: "Who are you?"
      });
    }

    if (bcrypt.compareSync(data.password, user.password)) {
      const token = jwt.sign({ email: data.email }, "oljhcsaouhbgoq")
      return res.json({
        message: "anda berhasil login",
        token
      });
    }

    return res.json({
      message: "password anda salah"
    });
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal server Error" });
  }
});


route.post('/register', async (req, res) => {
  try {
    const data = req.body
    console.log(data);
    
    const existingUser = await User.findOne({
      where:
      {
        email: data.email,
      }
    });
    
    if (existingUser) {
      return res.json({
        message: 'Email already registered',
      });
    }
  
    const deletedUser = await User.findOne({
      where: {
        id: { [Op.ne]: null }, 
      },
      order: [['id', 'DESC']],
    });

    let newUserId;

    if (deletedUser) {
      newUserId = deletedUser.id + 1;
    } else {
    
    }

    const saltRounds = 10
    const hashPassword = bcrypt.hashSync(data.password, saltRounds)

    await User.create({
      id: newUserId,
      name: data.name,
      email: data.email,
      password: hashPassword,
      contact: data.contact,
      address: data.address
    })

    return res.json({
      message: "Your account has been registered"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal Server Error"})
  } 
})

module.exports = route