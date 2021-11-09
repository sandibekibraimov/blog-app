const express = require('express');
const router = express.Router();

const Category = require('../models/Category');

// create a category route
router.post('/', async (req, res) => {
  const newCat = new Category(req.body);

  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// get all categories route

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
