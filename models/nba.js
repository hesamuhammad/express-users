const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nbaSchema = new Schema({
    users: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    position: {
        type: String,
        required: true
    },
    drafted: {
        type: String,
        required: true
    },
    picked: {
        type: String,
        required: true
    },
    nbaChampion: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Still Playing"
    }
});

const Nba = mongoose.model("nba", nbaSchema);

module.exports = Nba;
