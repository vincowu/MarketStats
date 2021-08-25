const mongoose = require("mongoose")
// This is my MONGOURI
const { mongoDB_URI } = process.env

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(mongoDB_URI, {
            useNewUrlParser: true
        });
        console.log("Connected to Mongo DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;