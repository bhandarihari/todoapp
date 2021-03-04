const jwt = require('jsonwebtoken');
const AdminModel = require('../AdminRegistration/AdminSchema');


const auth = async(req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return next({
            msg: "no auth token",
            status: 400
        })
    }

    jwt.verify(token, process.env.JWT, async(err, done) => {
        if (err) {
            return next({
                msg:"unvarified token",
                status:400
            })
        }
       
        next()
    })


}
module.exports = auth;