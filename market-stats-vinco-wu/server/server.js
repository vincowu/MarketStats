const express = require('express');
const app = express();
const cors = require('cors')
const user = require('./routes/user')
require('dotenv').config();
// Port 
const { PORT } = process.env
// Import MongoDB Initiation and Route to stockOfInterest
const InitiateMongoServer = require('./db/config/db')
const stockOfInterest = require('./routes/stockOfInterest')


// Initiate MongoDb Server
InitiateMongoServer();


// middleware
app.use(cors());
app.use(express.json());

// Route to get highligthed stocks you search for
app.use("/", stockOfInterest);
// Route for User
app.use("/user", user);


// Listening on Port 8080
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});