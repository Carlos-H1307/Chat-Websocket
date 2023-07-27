const express           = require("express");
const { createServer }  = require("http");
const { Server }        = require("socket.io");
const app               = express();
const httpServer        = createServer(app);
const io                = new Server(httpServer, { cors: { origin: "*" } });
const cors              = require('cors');
const Routes            = require('./routes/routes');

app.use(cors());

// io.on("connection", (socket) => {
//     console.log("Um usuário conectou-se ao chat ");
//     //socket.join("1");
//   //   socket.on("msg", (msg) => {
//   //     console.log(`${msg}`);
//   //     chat.emit("chat msg", msg);
//   //   });
// });


// //==========Rota para CADASTRO==========//

// //body-parser para analisar o corpo da requisição
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// //==========Parte do websocket==========/
// const chat = io.of("/chat");

// chat.on("connect", (socket) => {
//   console.log("Um usuário conectou-se ao chat ");
//   //socket.join("1");
//   socket.on("msg", (msg) => {
//     console.log(`${msg} | ${1}`);
//     chat.emit("chat msg", msg);
//   });
// })
module.exports = app;
app.use("/", Routes);
httpServer.listen(3000, () => {
  console.log("Rodando na porta 3000");
});

