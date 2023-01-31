const mongoose = require("mongoose");
let db;
module.exports = function Connection() {
    //let pos = require("mongoose");
    if (!db) {
        return db = mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true });
        
         
    } else {
        return db = mongoose;
       
    }
    
}
