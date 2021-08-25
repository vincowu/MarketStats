const mongoose = require("mongoose");

const StockSchema = mongoose.Schema(
    {
        watchlistStocks: [
            {
                newlyAddedDay: String
            }
        ],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    });

module.exports = mongoose.model("stock", StockSchema);