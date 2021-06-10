 
const mongoose = require('mongoose');
const validator = require('validator');

//define the schema skeleton
const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate : (value)=> validator.default.isEmail(value)
    },
    password:{
        type:String,
        required:true,
        validate: (value)=>validator.default.isLength(value,{min:10})
    }
})

module.exports = mongoose.model('user',userSchema)