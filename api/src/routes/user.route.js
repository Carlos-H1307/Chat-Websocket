const express = require('express');
const User = require('../controllers/User');

const Router = express.Router();
const user = new User();

Router.get('/', user.get)
Router.post('/', user.create);
Router.post('/login', user.login)
Router.delete('/login', user.logout)

module.exports = Router;
