const Sequlize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');

const connection = new Sequlize(dbConfig);

User.init(connection);

module.exports = connection;