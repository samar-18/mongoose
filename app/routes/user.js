const express = require('express')
const router = express.Router()

const UserModel = require('../models/User') //here we importe the model


// Request post to create a new user
router.post('/user',(req,res)=>{
    const {firstname,lastname,email,password}=req.body
    const newUser = new UserModel({
        firstname,
        lastname,
        email,
        password    //or password:password

    })
   
    newUser.save()
    .then(URLSearchParams=>res.status(200).json(users))
    .catch(err=>res.status(400).json(err))
    
})

//Request Get
router.get('/user',(req,res)=>{
    UserModel.find()
    .then(users=>res.status(200).json(users))
    .catch(err=>res.status(400).json(err))


})

//request Delete
router.delete('/user/:id',(req,res)=>{
    UserModel.findByIdAndDelete(req.params.id)
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})

//findby id
router.findById(('/user/6092777bb9e4a71dd8dfb484'),(req,res)=>{
    UserModel.find(req.params.id)
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})




module.exports=router