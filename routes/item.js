const router=require('express').Router()
const Item=require('../models/item')
const bcrypt=require('bcrypt')


//post item
router.post("/api/item",async(req,res)=>{
    try{
const {item}=req.body 

     const newitem=new Item({
    item
})
await newitem.save()
return res.send(newitem)
    }catch(err){
        return res.send(err)
    }
})
//get
router.get("/api/items",async(req,res)=>{
    try{
     const getitem=await Item.find()
     return res.send(getitem)
    }catch(err){
        return res.send(err)
    }
})


//update
router.put("/api/item/:id",async(req,res)=>{
    try{
        const updateitem=await Item.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        return res.send(updateitem)
    }catch(err){
            return res.send(err)
        }
    
})


//delet item
router.delete("/api/item/:id",async(req,res)=>{
    try{
await Item.findByIdAndDelete(req.params.id)
return res.send("item deleted")
    }catch(err){
        return res.send(err)
    }
})

module.exports=router