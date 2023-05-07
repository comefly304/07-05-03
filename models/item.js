const mongoose=require('mongoose')

const itemschema=new mongoose.Schema({
    item:{type:String}
},{
    timestamps:true
})

const Item=mongoose.model("itemtodopractice",itemschema)

module.exports=Item