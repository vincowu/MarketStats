const mongoose = require("mongoose");

const StockSchema = mongoose.Schema(
    {
        watchlistStocks: {
            type: Array,
            required: true
        },
        userId: {
            type: String,
            required: true
        }
    });

module.exports = mongoose.model("stock", StockSchema);