const { createServer }  = require("http");
const { Server }        = require("socket.io");
const app               = require("../main");
const httpServer        = createServer(app);
const io                = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
    console.log("Um usuário conectou-se ao chat ");
    //socket.join("1");
  //   socket.on("msg", (msg) => {
  //     console.log(`${msg}`);
  //     chat.emit("chat msg", msg);
  //   });
});

module.exports = io;