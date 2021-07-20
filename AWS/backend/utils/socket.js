const { RegistedModule } = require("../models");
module.exports = function (server) {
  const io = require("socket.io")(server, {
    cors: {
      origin: "http://54.180.202.172:8081",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      transports: ["websocket", "polling"],
      credentials: true,
    },
    allowEIO3: true,
  });

  io.on("connection", async (socket) => {
    console.log("Connect from Client: " + socket);
    //Registedmodule에 있는 id들 조회
    socket.on("module", async (data) => {
      console.log("socket module : ", data);
      const { id } = data;
      const result = await RegistedModule.findById(id);
      socket.emit("module", {
        module_data: result.module_data,
      });
    });
  });
  return io;
};
