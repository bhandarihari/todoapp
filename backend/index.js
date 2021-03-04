const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

//mongodb connection
require("./utils/DatabaseConnection");


//using body parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

app.use(bodyParser.json())
app.use(express.json());


//using route file
app.use('/api', require('./utils/RouteFile'));



//error 404
app.use((req, res, next) => {
    next({
        msg: "Not Found",
        status: 404
    })
})

//error handelling middelware
app.use((err, req, res, next) => {
    res.status(400)
    res.json({
        msg: err.msg || err,
        status: err.status || 400

    })
})

//listining app
app.listen(port, (err, done) => {
    if (err) throw err;
    console.log("server started on port :" + port);
})