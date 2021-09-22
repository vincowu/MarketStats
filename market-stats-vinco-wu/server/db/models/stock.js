const mongoose = require("mongoose");

const StockSchema = mongoose.Schema(
    {
        watchlistStocks: {
            type: Array
        },
        stockAdd: {
            type: String
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    });

module.exports = mongoose.model("stock", StockSchema);