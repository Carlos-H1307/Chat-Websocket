const express = require("express");
const ChatRoutes = require("./chat.route");

const Router = express.Router();

Router.use('/chat', ChatRoutes);

module.exports = Router;