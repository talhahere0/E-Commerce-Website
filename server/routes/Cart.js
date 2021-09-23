const router = require('express').Router()
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken")
const CryptoJS = require('crypto-js')
const Cart = require("../models/Cart")


//updated
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
   
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },
        {new:true}
        )
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//Create
router.post("/",verifyToken,async (req,res)=>{
    const newCart = new Cart(req.body)
    try{
        const savedCart = await newCart.save()
        // console.log(newProduct)
        res.status(200).json(savedCart)
    }catch(Err){
        res.status(500).json(Err)
    }

})

//delete
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

//Get User Cart
router.get("/find/:userId",verifyTokenAndAuthorization,async(req,res)=>{
    try{
        const Cart = await Cart.findOne({userId:req.params.userId})
        res.status(200).json(Cart)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get All user
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const carts = await Cart.find()
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router