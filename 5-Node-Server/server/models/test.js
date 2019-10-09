module.exports = function (sequelize, DataTypes){
    return sequelize.define('test', { //4
        //5         //6
        testdata: DataTypes.STRING
    });
};