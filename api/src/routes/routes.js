const express = require("express");
const ChatRoutes = require("./chat.route");
const UserRoutes = require("./user.route");

const Router = express.Router();

Router.use('/chat', ChatRoutes);
Router.use('/user', UserRoutes);

module.exports = Router;