const AdminMaper = require("./AdminMaper");
const AdminSchema = require("./AdminSchema");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const GetAllData = async (req, res, next) => {
    try {
        const condition = {}
        const data = await AdminSchema.find(condition);
        res.json(data)
    } catch (err) {
      return  next(err)
    }
}

const GetById = async(req, res, next) => {
    try{
        const condition = req.params.id
       const data = await AdminSchema.findById(condition)
       if(data){
           return res.json(data)
       }
       if(!data){
           return next({
               msg:"no user with this id"
           })
       }
    }catch(err){
        return next({
            msg: "server error",
            status: 500
        })
    }

}

const Post = async(req, res, next) => {
    try{
        const Admin =await new AdminSchema({})
        const pw = await bcrypt.hash(req.body.password,12);
        req.body.password = pw;
        AdminMaper(Admin,req);
        const saver = await Admin.save()
        res.json(saver)
    }catch(err){
        return next({
            msg: "server error",
            status: 500
        })
    }
    
}

const Put = async(req, res, next) => {
    try{
        const condition = req.params.id;
        const Admin =await AdminSchema.findById(condition)
        if(Admin){
            if(req.body.password){
                const pw = await bcrypt.hash(req.body.password,12);
                req.body.password = pw;
            }
            AdminMaper(Admin,req);
            const saver = await Admin.save()
            res.json(saver)
        }
        if(!Admin){
            next({
                msg:"no user with this id",
                status:400
            })
        }
        
    }catch(err){
        return next({
            msg: "server error",
            status: 500
        })
    }
}

const Delete = async(req, res, next)=>{
    try {
        const condition = req.params.id;
        const data = await AdminSchema.findById(condition);
        if (!data) {
            return next({
                msg: "item not found",
                status: 400
            })
        }
        const removed = await data.remove();
        res.json(removed)
    } catch (err) {
        next(err)
    }
}

    const Login = async(req,res,next)=>{
        const condition = req.body.email
        const userData = await AdminSchema.findOne({email:condition});
        if(!userData){
            return next({
                msg:"No user with this email",
                status:400
            })
        }
        
        const verry_login_password = await bcrypt.compare(req.body.password, userData.password);
        if (!verry_login_password) {
            return next({
                msg: "incorrect password",
                status: 400
            })
        }
        const token = jwt.sign({
            id: userData._id,
            email:userData.email
        }, process.env.JWT);
        res.json({
            token:token,
            user:userData.email
        })

    }
    const CheckToken = (req,res,next)=>{
        try{
            const token = req.body.token;
            if(!token){
                next({
                    msg:"no token",
                    status:400
                })
            }
            jwt.verify(token, process.env.JWT, async(err, done) => {
                if (err) {
                    return next({
                        msg:"unvarified token",
                        status:400
                    })
                }
               
                res.json(true)
            })
        }catch(err){
            next(err)
        }
    }

module.exports={
    GetAllData,
    GetById,
    Post,
    Put,
    Delete,
    Login,
    CheckToken
}