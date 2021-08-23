const mongooste = require("mongoose");

const TaskSchema = mongoose.Schema(
    {
        watchlist: {
            type: Array,
            required: true
        }
    });

module.exports = mongoose.model("task", TaskSchema);