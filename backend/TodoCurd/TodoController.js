const todoModel = require('./TodoSchema ');
const TodoMaper = require('./TodoMaper');

const GET = async (req, res, next) => {
    try {
        const condition = {};
        const data = await todoModel.find(condition)
        if (!data) {
            return next({
                msg: "empty data",
                status: 400
            })
        }
        res.json(data)
    } catch (err) {
        return next(err)
    }
}
const GETBYID = async (req, res, next) => {
    try {
        const condition = req.params.id;
        const data = await todoModel.findById(condition)
        if (!data) {
            return next({
                msg: "empty data",
                status: 400
            })
        }
        res.json(data)
    } catch (err) {
        return next(err)
    }
}

const POST = async(req, res, next) => {
    try {
        if(!req.body.todo){
            return next({
                msg:"required field",
                status:400
            })
        }
        const admin = new todoModel({})
        TodoMaper(admin,req)
        const saver = await admin.save();
        res.json(saver)
    } catch (err) {
        next(err)
    }
}
const PUT = async(req, res, next) => {
    try {
        const condition = req.params.id;
        const Admin = await todoModel.findById(condition)
        Admin.checked = !Admin.checked
        // TodoMaper(Admin,req)
        const saver = await Admin.save();
        res.json(saver)
    } catch (err) {
        next(err)
    }
}
const DELETE = async(req, res, next) => {
    try{
       const  condition = req.params.id;
        const data = await todoModel.findById(condition)
        if(!data){
           return next({
                msg:"no data found",
                status:400
            })
        }
        const removed = await data.remove();
        res.json(removed)

    }catch(err){
        next(err)
    }
}
module.exports = {
    GET,
    POST,
    PUT,
    DELETE,
    GETBYID
}