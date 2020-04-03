const Sequlize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');
const Adress = require('../models/Adress');
const Techs = require('../models/Techs');

const connection = new Sequlize(dbConfig);

Adress.init(connection);
User.init(connection);
Techs.init(connection);

Adress.associate(connection.models/**connection.models == Adress, User */);
User.associate(connection.models);
Techs.associate(connection.models);

module.exports = connection;