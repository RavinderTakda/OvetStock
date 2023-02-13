

const mongoose = require("mongoose")

const SignupSchema = mongoose.Schema({
"Name":{type:String,required:true},
"Email":{type:String,required:true},
"Password":{type:String,required:true}

})


const SignupModel =mongoose.model(signup,SignupSchema)


module.exports = {
    SignupModel
}