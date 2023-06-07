const express = require("express");
const user = require("../models/user")

const router = express.Router();

//CREATE
router.post("/",async(req,res)=>{

    const newuser= new user(req.body)
    try {
        const saveduser = await newuser.save()
        res.status(200).json(saveduser)
    } catch (error) {
        res.status(500).json(error)
    }
})
//UPDATE
router.put("/:id",async(req,res)=>{
    try {
        const updateduser = await user.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(updateduser)
    } catch (error) {
        res.status(500).json(error)
    }
})
//DELETE
router.delete("/:id",async(req,res)=>{
    try {
         await user.findByIdAndDelete(req.params.id)
        res.status(200).json("user deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET
router.get("/:id",async(req,res)=>{
    try {
        const getuser  = await user.findById(req.params.id)
        res.status(200).json(getuser)
    } catch (error) {
        res.status(500).json(error)
    }
})
 
//GETALL
router.get("/",async(req,res)=>{
    try {
        const Users= await user.find()
        res.status(200).json(Users)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;
