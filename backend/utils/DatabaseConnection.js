const mongoose = require('mongoose');
 
mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err,done) => {
    if (err){
        console.log(err,"<<eror in dabase connection")
    };
    console.log("mongo database connected")
})
