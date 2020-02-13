const { Users } = require("../../models");
const { hashPassword } = require("../../helpers");
const { comparedPassword } = require("../../helpers");
const jwt = require("jsonwebtoken");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Users.find({});

            res.status(200).send({ message: "Show datas users", data: result });
        } catch (error) {
            console.log(error);
        }
    },

    getById: async (req, res) => {
        const getById = req.params.id;
        await Users.findById(getById, (err, data) => {
            res.status(200).send({
                message: "Get by id:",
                data: data
            });
        });
    },

    getByEmail: async (req, res) => {
        try {
            const getByEmail = req.params.email;
            await Users.findById(getByEmail, (err, data) => {
                res.status(200).send({
                    message: "Get by Email:",
                    data: data
                });
            });
        } catch (error) {
            console.log(error);
        }
    },

    updateByEmail: async (req, res) => {
        try {
            const data = req.body;
            const email = req.params.email;
            await Users.findOneAndUpdate(
                { email: email }, // conditions
                data, // update
                { new: true }, // options
                (err, dataUser) => {
                    // callback
                    res.status(200).send({
                        message: "Data has been updated",
                        data: dataUser
                    });
                }
            );
        } catch (error) {
            console.log(error);
        }
    },

    deleteByEmail: async (req, res) => {
        try {
            await Users.deleteOne(
                { email: req.params.email },
                (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    res.status(200).send({
                        message: `Your data from email: ${req.params.email} has been deleted`,
                        data: result
                    });
                }
            );
        } catch (error) {
            console.log(error);
        }
    },

    postData: async (req, res) => {
        try {
            const data = req.body;
            console.log("masuk", req.body);
            const file = req.file;
            const hash = await hashPassword(req.body.password);

            // console.log(data, "ini data");
            // console.log(hash, "ini hash");

            const result = await Users.create({
                ...data,
                avatar: file === undefined ? null : file.path,
                password: hash
            });
            console.log(result);
            // console.log(file);

            res.status(200).send({
                message: "Your image successfully added to our database",
                data: result
                // password: hash
            });
        } catch (error) {
            console.log(error);
        }
    },

    login: async (req, res) => {
        try {
            const result = await Users.findOne({ email: req.body.email });
            const compared = await comparedPassword(
                req.body.password,
                result.password
            );
            if (compared === true) {
                res.status(200).send({
                    message: "You are successfully logged in",
                    data: result
                });
            } else {
                res.status(400).send({
                    message: "Are you really our user ?"
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
};
