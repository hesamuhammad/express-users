const { Nba } = require("../../models");

module.exports = {
    // Done
    postData: async (req, res) => {
        try {
            const data = req.body;

            const result = await Nba.create({
                ...data
            });

            console.log("result", result);

            res.status(200).send({
                message: "Your nba data succesfully added to our database",
                data: result
            });
        } catch (error) {
            console.log("ga masuk", error);
        }
    },

    // Done
    getAll: async (req, res) => {
        try {
            const result = await Nba.find({}).populate(
                "users",
                "firstName lastName"
            );

            res.status(200).send({
                message: "Show datas NBA users",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },

    // Done
    getByPosition: async (req, res) => {
        try {
            const result = await Nba.find({position: req.params.position}).populate(
                "users",
                "firstName lastName"
            )
            res.status(200).send({
                message: `List data with position: ${req.params.position}`,
                data: result
            })
        } catch (error) {
            console.log(error);
        }
    },

    // Done
    getByUserId: async (req, res) => {
        try {
            const result = await Nba.find({ _id: req.params.id }).populate(
                "users",
                "firstName lastName"
            );
            res.status(200).send({
                message: `List data from id: ${req.params.id}`,
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },

    deleteById: async (req, res) => {
        try {
            await Nba.deleteOne({ _id: req.params.id }, (err, result) => {
                if (err) {
                    console.log(err);
                }
                res.status(200).send({
                    message: `Your data from id: ${req.params.id} has been deleted`,
                    data: result
                });
            });
        } catch (error) {
            console.log(error);
        }
    },

    // Done
    updateById: async (req, res) => {
        try {
            const data = req.body;
            const idBefore = req.params.id;
            await Nba.findOneAndUpdate(
                { _id: idBefore },
                data,
                { new: true },
                (err, result) => {
                    res.status(200).send({
                        message: "Your new data has been updated",
                        data: result
                    });
                }
            );
        } catch (error) {
            console.log(error);
        }
    }
};
