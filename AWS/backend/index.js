const express = require("express")
const app = express()
const cors = require("cors")


const routes = require('./routes')
const {RegistedModule} = require("./models")
//dotenv
const path = require("path")
const dotenv = require('dotenv').config({})


const { PORT, MONGO_URI } = process.env

//db:mongo
const mongoose = require("mongoose")
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "fhth" })
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => { console.log("mongoDB connected") })

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())


//socket.io
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
   cors: {
      origin: "http://54.180.202.172:8081",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      transports: ['websocket', 'polling'],
      credentials: true
   }, allowEIO3: true
});

io.on('connection', async(socket) => {
   console.log('Connect from Client: ' + socket)
   //Registedmodule에 있는 id들 조회
   socket.on("module", async (data) => {
      console.log("socket module : ", data)
      const {id} = data
      const result = await RegistedModule.findById(id);
      socket.emit("module",{
         module_data : result.module_data
      })
   })
})
//REST API
app.use("/", routes);
server.listen(PORT, function () {
   console.log(PORT + " / FHTH.server is running")
})
