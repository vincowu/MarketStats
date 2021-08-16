const express = require('express');
const app = express();
require("dotenv").config();
const { PORT } = process.env
const stockOfInterest = require('./routes/stockOfInterest')

app.use(cors());
app.use(express.json());

app.use("/search", stockOfInterest)

app.listen()