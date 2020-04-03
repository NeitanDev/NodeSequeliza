const { Model, DataType } = require('sequelize');

class Adress extends Model {
    static init(connection){
        super.init({
            zipcode: DataType.STRING,
            street: DataType.STRING,
            number: DataType.INTEGER,
        },{
            sequelize: connection,
        });
    }
};

module.exports = Adress;