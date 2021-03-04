const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    todo:String,
    checked:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})
const TodoModel = mongoose.model("todo",TodoSchema);
module.exports = TodoModel;