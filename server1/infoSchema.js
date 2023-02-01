
const mongoose= require('mongoose');
const jwt = require("jsonwebtoken");


const infoSchema = new mongoose.Schema({
    userId:{
        type:Number,
        required:true
    },
    
     id:{
    type:Number,
    required:true
    },
    title:{
        type:String,
        required:true
        },
    body:{
       type:String,
         required:true
        }

})


const Info= new mongoose.model('Info', infoSchema); 


module.exports=Info;