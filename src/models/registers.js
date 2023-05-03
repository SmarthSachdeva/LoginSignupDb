const mongoose = require("mongoose");

const personRegister = new mongoose.Schema({
    fullName : {
        type : String,
        required:true
    },
    username : {
        type : String,
        required:true
    },
    email: {
        type : String,
        required:true,
        unique:true
    }, 
    phoneNum: {
        type : Number,
        required:true,
        unique:true
    },
    password: {
        type : String,
        required:true
    },
    confirmPassword: {
        type : String,
        required:true
    },
    gender: {
        type : String,
        required:true
    } 

})

const Register = new mongoose.model("Register" , personRegister );

module.exports = Register;