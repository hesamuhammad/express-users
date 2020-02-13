const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://hesamuhammad:Hesa1234@cluster0-dlh6p.mongodb.net/test?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => {
        console.log("Connected to mongo database");
    })
    .catch(error => {
        console.log("Theres something wrong", error);
    });

const db = mongoose.connection

module.exports = db;