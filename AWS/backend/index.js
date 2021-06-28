const express = require("express")
const app = express()
const cors = require("cors")
const routes = require('./routes')
const dotenv = require('dotenv')
const path = require("path")
const mongoose = require("mongoose")


//dotenv
dotenv.config({
   path : path.resolve(
      process.cwd(),
      ".env"
      )
   })


const {PORT, MONGO_URI} = process.env //8081, localhost

//db:mongo
mongoose.connect(MONGO_URI, { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {console.log("mongoDB connected")})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())



//REST API
 app.use("/", routes);   


app.listen(PORT, function() {
    console.log(PORT + " / FHTH.server is running")
})