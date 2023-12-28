const express = require('express');
const multer = require('multer');
const router = express.Router();
const db = require('../data/database');

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storageConfig });

router.get('/', async (req, res) => {
  const users = await db.getDb().collection('users').find().toArray();
  console.log(users);
  res.render('profiles', { users });
});

router.get('/new-user', (req, res) => {
  res.render('new-user');
});

router.post('/profiles', upload.single('image'), async (req, res) => {
  const uploadedImageFile = req.file;
  const userData = req.body;

  await db.getDb().collection('users').insertOne({
    username: userData.username,
    imagePath: uploadedImageFile.path
  });

  res.redirect('/');
})

module.exports = router;