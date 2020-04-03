const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
        this.hasMany(models.Adress, { foreignKey: 'user_id', as: 'adresses' });// Relacionamento n para 1
        this.belongsToMany(models.Techs, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
    }
}

module.exports = User;