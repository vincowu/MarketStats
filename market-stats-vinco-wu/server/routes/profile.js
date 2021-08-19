// const express = require('express');
// const users = require('../users');
// const fs = require("fs");
// const router = express.Router();


// router.get('/profile',
//   users.getUserDocument,
//   (req, res, next) => {
//     const user = req.userDocument;
//     res.status(200).json({
//       email: user.email,
//       username: user.username,
//       watchlist: user.watchlist
//     });
//   });

// router.put('/profile', async (req, res, next) => {
//   const exists = await users.User.exists({ email: req.user.email });
//   if (exists) {
//     return res.status(400).json({ status: 'user-exists' });
//   }
//   await users.User.create({ email: req.user.email, username: req.body.username, score: 0 });
//   res.status(200).json({ status: 'ok' });
// });





// module.exports = createRouter;