const Sequlize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');
const Adress = require('../models/Adress');

const connection = new Sequlize(dbConfig);

Adress.init(connection);
User.init(connection);

Adress.associate(connection.models/**connection.models == Adress, User */);
User.associate(connection.models);

module.exports = connection;