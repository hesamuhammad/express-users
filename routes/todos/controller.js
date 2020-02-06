const todos = require("../../models/todos")

module.exports = {
    getAll: (req, res) => {
        res.status(200).send({message: "Welcome to my todos route"})
    },
    getById: (req, res) => {
        res.status(200).send({message: "this is TEST SECTION, second Function by id"})
    },
    getByUsername: (req, res) => {
        res.status(200).send({message: "this is TEST SECTION, second Function by username"})
    }
};