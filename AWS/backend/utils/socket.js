const { RegistedModule } = require("../models");
module.exports.createSocket = function (http_server, https_server) {
  const io = require("socket.io")(http_server, {
    cors: {
      origin: [
        "http://127.0.0.1:8081",
        "http://ssafy5-free.github.io",
        "https://ssafy5-free.github.io",
      ],

      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      transports: ["websocket", "polling"],
      credentials: true,
    },
    allowEIO3: true,
  });
  io.attach(https_server, {
    cors: {
      origin: [
        "http://127.0.0.1:8081",
        "http://ssafy5-free.github.io",
        "https://ssafy5-free.github.io",
      ],

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
      const { _id } = data;
      const result = await RegistedModule.findById(_id);
      socket.emit("module", {
        data: result.data,
      });

      console.log("socket module : ", result);
    }),
      socket.on("command", (data) => {
        console.log("command : ", data);
      });
  });
};
