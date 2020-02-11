const { Todos } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Todos.find({});

            res.status(200).send({ message: "Show data todos", data: result });
        } catch (error) {
            console.log(error);
        }
    },

    addData: async (req, res) => {
        try {
            const result = await Todos.create(req.body);
            res.status(200).send({ message: "add new Todo", data: result });
        } catch (error) {
            console.log(error);
        }
    },

    getById: async (req, res) => {
        try {
            const myId = req.params.id;
            await Todos.findById(myId, (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.status(200).send({
                    message: "Get By Id",
                    data: data
                });
            });
        } catch (error) {
            console.log(error);
        }
    },

    // getByUsername: (req, res) => {
    //     res.status(200).send({
    //         message: "this is TEST SECTION, second Function by username"
    //     });
    // }
};
