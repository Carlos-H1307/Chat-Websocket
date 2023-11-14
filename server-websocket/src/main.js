require('dotenv').config();
const express           = require("express");
const { createServer }  = require("http");
const app               = express();
const httpServer        = createServer(app);
//const io                = new Server(httpServer, { cors: { origin: "*" } });
const cors              = require('cors');
const { SocketManager } = require('./classes/SocketManager');

app.use(cors());

const socketManager = new SocketManager(httpServer);

httpServer.listen(process.env.HTTP_PORT, () => {
  console.log("Websocket rodando na porta " + process.env.HTTP_PORT );
});