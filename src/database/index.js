const Sequlize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');
const Adress = require('../models/Adress');

const connection = new Sequlize(dbConfig);

Adress.init(connection);
User.init(connection);

module.exports = connection;