const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bearerToken = require('express-bearer-token');
const oktaAuth = require('./middleware/auth');

require('dotenv').config();
const { PORT } = process.env
const stockOfInterest = require('./routes/stockOfInterest')


app.use(cors());
app.use(express.json());
// app.use(bearerToken())
// app.use(oktaAuth)


app.use("/", stockOfInterest)

// mongoose.connect(`mongodb://localhost:27017/user`)
//     .then(() => {
//         console.log('Connected to database');
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});
    // });