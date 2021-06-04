const express = require('express');
const router = express.Router();
const Cocktail = require('../models/Cocktail');
const multer = require('multer');
const config = require('../config');
const path = require('path');
const { nanoid } = require('nanoid');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

const createRouter = () => {
  router.get('/', async (req, res) => {
    try {
      const cocktails = await Cocktail.find();
      res.send(cocktails);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  router.get('/my', async (req, res) => {
    try {
      console.log('req.user', req.user)
      const cocktails = await Cocktail.find({ user: req.user._id });
      res.send(cocktails);
    } catch (error) {
      res.status(500).send(error);
    }
  })

  router.post('/', [auth, upload.single('image')], async (req, res) => {
    const cocktail = {...req.body, user: req.user._id};
    if (req.file) {
      cocktail.image = req.file.filename;
    }
    const newCocktail = new Cocktail(cocktail);
    try {
      await newCocktail.save();
      res.send(newCocktail);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  return router;
};

module.exports = createRouter;