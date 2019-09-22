const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.middleware');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Post = require('../../model/Post.model');
const Profile = require('../../model/Profile.model');
const User = require('../../model/User.model');

// @route        POST api/posts
// @desc         Create Post
// @access       Private
router.post(
  '/',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // Validation
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route        GET api/posts
// @desc         Get all posts
// @access       Private

router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({
      date: -1
    });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route        GET api/posts/:post_id
// @desc         Get post by ID
// @access       Public

router.get('/:post_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    res.json(post);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post is not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route        DELETE api/posts/:post_id
// @desc         Delete Post
// @access       Private
router.delete('/:post_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    // Check if post exists
    if (!post) {
      return res.status(404).json({ msg: 'Post is not found' });
    }

    // Check Use
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await post.remove();

    res.json({ msg: 'Post is removed' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post is not found' });
    }
    res.status(500).send('Server Error');
  }
});
// @route        POST api/posts/like/:post_id
// @desc         "LIKE" Post
// @access       Private

// @route        POST api/posts/unlike/:post_id
// @desc         "UNLIKE" Post
// @access       Private

// @route        POST api/posts/comment/:post_id
// @desc         Comment on a post
// @access       Private

// @route        POST api/posts/comment/:post_id/:comment_id
// @desc         Delete comment
// @access       Private

module.exports = router;
