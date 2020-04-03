const { Model, DataTypes } = require('sequelize');

class Techs extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'techs'
        });
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' });// Relacionamento N para N nas duas tabelas
    }
}

module.exports = Techs;