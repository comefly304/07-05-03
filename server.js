const express=require('express');
const router = require('./routes/item');
const Con = require('./config/db');
require('dotenv').config()
const cors=require('cors')


const app=express()

app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json())
app.use("/",router)




const PORT=5500;
app.listen(PORT,()=>{
    Con()
    console.log(`server is running in port ${PORT}`)
})