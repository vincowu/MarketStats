const express = require('express');
const router = express.Router();
const uniqId = require('uniqId')
const axios = require('axios');
const { response } = require('express');
const { marketStack_API_URL, alphaventure_API_URL, marketstack_key, alphaventure_key } = process.env


router.get("/:stock", async (req, res) => {
    let ticker = req.params.stock
    axios.get(alphaventure_API_URL + "?function=OVERVIEW" + `&symbol=${ticker}` + `&apikey=${alphaventure_key}`, { headers: { 'User-Agent': 'request' } })
        .then((response) => {
            if (Object.keys(response.data).length === 0) {
                res.status(404).send("Does Not Exist")
            }
            else (res.send(response.data))
        })
})

router.post("/financials/:stock", async (req, res) => {
    let ticker = req.params.stock;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    console.log(ticker)
    console.log()
    return await axios.get(marketStack_API_URL + "eod" + `?access_key=${marketstack_key}` + `&symbols=${ticker}` + `&date_from=${startDate}` + `&date_to=${endDate}`)
        .then((response) => {
            res.send(response.data.data)
        })
})



module.exports = router