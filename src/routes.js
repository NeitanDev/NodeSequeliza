const express = require('express');
const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/users/:user_id/adresses', AdressController.store);
routes.get('/users/:user_id/adresses', AdressController.index);


module.exports = routes;