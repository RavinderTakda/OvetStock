


const mongoose = require("mongoose")

const connecton = mongoose.connect("mongodb+srv://RavinderTakda:<password>@cluster0.7zsjhui.mongodb.net/?retryWrites=true&w=majority")

const Schema = mongoose.Schema({

"Name":{type:String,required:true},
"Email":{type:String,required:true},
"Password":{type:String,required:true}

})



const Model =mongoose.model(Email,Schema)


module.exports ={
    connecton,
    Model
}