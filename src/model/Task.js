
module.exports = function() {
    let mongoose = require("mongoose");
    let Schema = mongoose.Schema;
    let db;
    if (!db) {
        db = mongoose.connect("mongodb://127.0.0.1:27017/tasks", { autoIndex: false })
        .then(console.log("mongoDB conectado"))
    }
    let Task = new Schema({
        title: String,
        description: String,
        status: Boolean
    });
    
    return mongoose.model("test", Task);
}