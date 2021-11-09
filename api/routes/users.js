const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/User');

// update user routes

router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    res.status(401).json({ msg: 'You may update only your account' });
  }
});

// delete user route

router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ msg: 'Successfully deleted' });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    res.status(401).json({ msg: 'You may delete only your account' });
  }
});

// get user by id
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
