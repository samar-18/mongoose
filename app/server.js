const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({path:'config/.env'})


const app = express()
app.use(express.json())
//Connect to the Mongos Atlas
mongoose.connect(process.env.DB_URI,
                { useUnifiedTopology: true ,
                 useNewUrlParser: true ,
                useFindAndModify: false,
                useCreateIndex:true,
                useFindAndModify: false},
                (err) => {
    if (err){
        console.log("database not connectec there is an error")
    }
    else {
        console.log("db connected...")

    }
    
    })

app.use('/api',require('./routes/user'))


//listen to the server port
app.listen(5000,()=>{
    console.log("connected....")
})