const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://smarth07:Smarth%401632@cluster0.xdkqyi7.mongodb.net/test" ,{
    useNewUrlParser:true, 
    useUnifiedTopology : true
    // useCreateIndex: true
}).then(()=>{
    console.log('connection successful')
}).catch((e) =>{
    console.log(e)
})


// mongoose.connect("mongodb://localhost:27017/" ,{
//     useNewUrlParser:true, 
//     useUnifiedTopology : true ,
//     useCreateIndex: true
// }).then(()=>{
//     console.log('connection successful')
// }).catch((e) =>{
//     console.log(e)
// })