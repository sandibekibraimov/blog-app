const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/User');

// register routes

router.post('/register', async (req, res) => {
  const { username, email, password, profilePic } = req.body;
  try {
    const email = await User.findOne({ email });
    if (email) {
      return res.status(404).json({ msg: 'User exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPass,
      profilePic,
    });

    await newUser.save();

    res.status(200).json({ msg: 'user created successfully', newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// login routes

router.post('/login', async (req, res) => {
  const { username, email, password, profilePic } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    !user &&
      res.status(404).json({ msg: 'There is no user with such credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    !isMatch &&
      res.status(404).json({ msg: 'There is no user with such credentials' });

    res.status(200).json({ msg: 'Successfully logged in' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
