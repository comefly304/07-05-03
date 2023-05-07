const mongoose=require('mongoose')

function Con(){
    mongoose.connect(process.env.DB_URL)
    console.log('db connected')
}


module.exports=Con