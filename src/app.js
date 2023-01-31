const path = require("path");
const express = require("express");
const registrador = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const indexRouter = require("./router/index.js");



//configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".ejs");


//middlewares
app.use(registrador("dev"));
app.use(bodyParser.urlencoded({extended: false}));

//router
app.use("/", indexRouter);

app.listen(app.get("port"), () => {
    console.log("puerto en ", app.get("port"));
});