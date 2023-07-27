const express = require('express');
const Chat = require('../controllers/Chat');

const Router = express.Router();
const chat = new Chat();

Router.get('/', chat.get);

module.exports = Router;
