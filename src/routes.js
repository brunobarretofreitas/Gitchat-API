const express = require('express');
//Middlewares
const { isAuthenticated } = require('./Middlewares/auth');
//Controllers
const ConversationController = require('./Controllers/conversation');
const AuthController = require('./Controllers/auth');
//Routes
const routes  = express.Router();

routes.get('/conversations', isAuthenticated, ConversationController.index);
routes.post('/login', AuthController.login);



module.exports = routes;