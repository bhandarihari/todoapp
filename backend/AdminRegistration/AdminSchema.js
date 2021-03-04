const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AdminSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
})
const AdminModel = mongoose.model("admindata",AdminSchema);
module.exports = AdminModel;