const express           = require("express");
const { createServer }  = require("http");
const { Server }        = require("socket.io");
const app               = express();
const httpServer        = createServer(app);
const io                = new Server(httpServer, { cors: { origin: "*" } });
const cors              = require('cors');
const Routes            = require('./routes/routes');

app.use(cors());

io.on("connection", (socket) => {
  
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

module.exports = app;
app.use("/", Routes);
httpServer.listen(3000, () => {
  console.log("Rodando na porta 3000");
});

