const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
     res.send("<h1>Wohhooooooo Runnnig at 534KM/h<h1/>")
})


module.exports= router