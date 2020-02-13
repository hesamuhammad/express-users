var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const expressJWT = require("express-jwt");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var nbaRouter = require("./routes/nba");

var app = express();

app.use(cors());
app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets")));

app.use(
    expressJWT({ secret: "INISECRET" }).unless({
        path: [
            { url: "/", methods: ["GET"] },
            { url: "/users/login", methods: ["POST"] },
            { url: "/nba", methods: ["GET"] },
            { url: "/users", method : ["POST"]}
        ]
    })
);

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        return res.status(401).send({ message: "You are not a member" });
    } else {
        return next();
    }
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/nba", nbaRouter);
app.use("/todos", require("./routes/todos"));
app.use("/assets", express.static("assets"));

module.exports = app;
