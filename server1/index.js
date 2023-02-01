const express =require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const info = require('./info')

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/server1')
// mongoose.connect('mongodb+srv://elad_arditi:3156487264@cluster0.8s6pnlv.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log("connected to DataBase"))
.catch((err)=>console.log("couldnt connect to DataBase"))


app.use(express.json());  //convert json to JavascriptS and Javascript to json 
app.use(cors({ 
    origin:'http://localhost:3000',
   methods: ['GET','POST',"PUT",'DELETE']
  }));

  app.use("/api/data",info)




app.listen(4001,()=>console.log("server1 on port 4001 !"))