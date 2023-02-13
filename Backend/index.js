
const express =require("express")
const cors = require("cors")
const {SignupModel} = require("./Model/signup.model")

const app =express()
app.use(cors())
app.use(express.json())






app.post("/Signup",(req,res)=>{
    
    const {Name,Email,Password} = req.body
    const isUser = SignupModel.find({Email})

    if(isUser){
        res.send("User already exists Try again to ")
    }

    
})


app.post("/Login",(req,res)=>{
    console.log(req.body)

    
})









app.listen(8000, ()=>{
    console.log("Connection success")
})