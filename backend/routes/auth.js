const express = require('express');
const User = require('../models/User');
const router = express.Router();
const user = require('../models/User');
const { body, validationResult } = require('express-validator');

// Creatin a user Using : POST at "/api/auth", Who do not need auth.

//adding validation with the help of validtor package
router.post('/', [body('username').isLength({ min: 6 }),
body('email').isEmail(),
body('password').isLength({ min: 8 })
],

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }).then(user => res.json(user));
  })



module.exports = router;