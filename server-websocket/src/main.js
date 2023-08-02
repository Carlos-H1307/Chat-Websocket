const express           = require("express");
const { createServer }  = require("http");
const { Server }        = require("socket.io");
const app               = express();
const httpServer        = createServer(app);
const io                = new Server(httpServer, { cors: { origin: "*" } });
const cors              = require('cors');
require('dotenv').config();

app.use(cors());

io.use((socket, next) => {

  const user_id = socket.handshake.auth.user_id;

  if (!user_id) 
  {
    return next(new Error("invalid username"));
  }

  socket.user_id = user_id;
  next();
});

io.on("connection", (socket) => {
  
  socket.on("private message", ( {content, to} ) => {

    io.sockets.sockets.forEach( ( socket ) => {
      if(socket.user_id === to)
      {
        socket.emit("private message", {
          content,
          from: socket.id,
        });
      }
    });

  });
  
});

httpServer.listen(process.env.HTTP_PORT, () => {
  console.log("Websocket rodando na porta " + process.env.HTTP_PORT );
});