// const mongoose = require('mongoose');
// const router = require('./routes/stockOfInterest');

// const UserSchema = new mongoose.Schema({
//     email: { type: String, required: true },
//     username: { type: String, required: true },
//     password: { type: String, required: true },
//     watchlist: { type: Array, required: true }
// });

// // schema looks for users with User, second instance is the Schema called. Models are constructed from Schemas and an instance of models are called documents
// const User = mongoose.model('User', UserSchema);

// function getUserDocument(req, res, next) {
//     User.findOne({ email: req.user.email }, (err, user) => {
//         if (err || !user) {
//             res.status('400').json({ status: 'user-missing' });
//         }
//         req.userDocument = user;
//         next();
//     });
// }



// module.exports = { UserSchema, User, getUserDocument };