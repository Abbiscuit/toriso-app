const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth.middleware');

const Profile = require('../../model/Profile.model');
const User = require('../../model/User.model');

// @route        GET api/profile/me
// @desc         Get current user profile
// @access       Private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'No profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route        POST api/profile/
// @desc         Create or Update user profile
// @access       Private

router.post(
  '/',
  [
    auth,
    [
      check('skills', 'Skills is required')
        .not()
        .isEmpty(),
      check('howtos', 'You need hows')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // Check if there's error
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { skills, howtos } = req.body;

    // Profile Object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim());
    }
    if (howtos) {
      profileFields.howtos = howtos;
    }

    // Validation
    try {
      let profile = await Profile.findOneAndUpdate(
        {
          user: req.user.id
        },
        {
          $set: profileFields
        },
        {
          new: true,
          upsert: true
        }
      );
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route        GET api/profile/
// @desc         Get all profiles
// @access       Public

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name']);

    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route        GET api/profile/user/:user_id
// @desc         Get profile by ID
// @access       Public

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({
      user: req.params.user_id
    }).populate('user', ['name']);

    if (!profile) {
      return res.status(400).json({
        msg: 'Profile Not Found'
      });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') return res.status(500).send('Server Error');
    res.status(500).send('Server Error');
  }
});

// @route        DELETE api/profile
// @desc         Delete profile, user & posts
// @access       Private

router.delete('/', auth, async (req, res) => {
  try {
    // Remove Profile
    await Profile.findOneAndRemove({ user: req.user.id });

    // Remove User
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User has been deleted' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
