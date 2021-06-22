const mongoose = require('mongoose')
//User
const userDeviceSchema = new mongoose.Schema({
    type : Number,
    serial : String, 
 })
 const userSchema = new mongoose.Schema({
    email : String,
    pw : String,
    device : [userDeviceSchema]
 })

//Device
const deviceSchema = new mongoose.Schema({
   type : String
})

 const User = mongoose.model("User",userSchema)
const Device = mongoose.model("Device", deviceSchema) 
 module.exports = {User, Device}