const express = require("express");
const company = require("../models/companymodel")
const router = express.Router();

//CREATE
router.post("/",async(req,res)=>{

    const newcompany = new company(req.body)
    try {
        const savedcompany = await newcompany.save()
        res.status(200).json(savedcompany)
    } catch (error) {
        res.status(500).json(error)
    }
})
//UPDATE
router.put("/:id",async(req,res)=>{
    try {
        const updatedcompany = await company.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(updatedcompany)
    } catch (error) {
        res.status(500).json(error)
    }
})
//DELETE
router.delete("/:id",async(req,res)=>{
    try {
         await company.findByIdAndDelete(req.params.id)
        res.status(200).json("company deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET
router.get("/:id",async(req,res)=>{
    try {
        const getcompany  = await company.findById(req.params.id)
        res.status(200).json(getcompany)
    } catch (error) {
        res.status(500).json(error)
    }
})
 
//GETALL
router.get("/",async(req,res)=>{
    try {
        const companys = await company.find(req.params.id)
        res.status(200).json(companys)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;
