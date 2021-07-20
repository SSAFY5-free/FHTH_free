const mongoose = require('mongoose')
//User
 const userSchema = new mongoose.Schema({
    email : String,
    pw : String,
    robots_id : [mongoose.Types.ObjectId] 
 })
const sessionSchema = new mongoose.Schema( {
    accessToken : String,
    user_id : mongoose.Types.ObjectId,
})

const robotSchema = new mongoose.Schema({ 
   serial : String,
   modules_id : [mongoose.Types.ObjectId],
   name : String
})

const registedModuleSchema = new mongoose.Schema( {
   serial : String,
   type_id : mongoose.Types.ObjectId,
   data : mongoose.Schema.Types.Mixed,
   name : String
   ,
}, {
   timestamps: true
})

const moduleTypeSchema = new mongoose.Schema( {
   name : String
})

const User = mongoose.model("User",userSchema)
const Robot =  mongoose.model("Robot", robotSchema)
const Session = mongoose.model("Session", sessionSchema)
Session.createIndexes({
   createdAt : new Date(),
   expireAfterSeconds : 60*60 
})
const ModuleType = mongoose.model("ModuleType", moduleTypeSchema)
const RegistedModule = mongoose.model("RegistedModule", registedModuleSchema, "RegistedModule")


module.exports = {User, Session, Robot, RegistedModule, ModuleType}
