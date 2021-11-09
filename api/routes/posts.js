const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Post = require('../models/Post');

// create new post routes

router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// update post route

router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    } else {
      res.status(401).json({ msg: 'You can update only your post' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// delete post route

router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json({ msg: 'Post had been deleted' });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    } else {
      res.status(401).json({ msg: 'You can delete only your post' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// get post by id
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
