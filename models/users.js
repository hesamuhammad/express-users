const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: false
    },
    address: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    age: {
        type: String
        // require: false
    },
    avatar: {
        type: String
    }
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
