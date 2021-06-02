const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const multer = require('multer');
const config = require('../config');
const { nanoid } = require('nanoid');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const createRouter = () => {
  router.post('/', upload.single('avatar'), async (req, res) => {
    if (req.file) {
      req.body.avatar = req.file.filename;
    } else {
      req.body.avatar = 'avatar.svg';
    }
    try {
      const user = new User(req.body);
      user.generateToken();
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  router.post('/sessions', async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    const errorMessage = 'Wrong username or password';
    if (!user) return res.status(400).send({error: errorMessage});

    const isMatch = await user.checkPassword(req.body.password);
    if (!isMatch) return res.status(400).send({error: errorMessage});

    user.generateToken();
    try {
      await user.save();
    } catch(e) {
      res.status(500).send(e);
    }
    res.send(user);
  });

  router.delete('/sessions', async (req, res) => {
    const token = req.get('Authentication');
    const success = {message: 'Success'};
    if (!token) return res.send(success);

    const user = await User.findOne({token});
    if (!user) return res.send(success);
    user.generateToken();
    try {
      await user.save();
      return res.send(success);
    } catch(e) {
      res.status(500).send(e);
    }
  });

  return router;
};

module.exports = createRouter;