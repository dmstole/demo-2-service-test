module.exports = function (sequelize, DataType) {
   const Cliente = sequelize.define('Cliente', {
      id: {
         type: DataType.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },

      nome: {
         type: DataType.STRING,
         allowNull: false,
         validate: {
            notEmpty: true
         }
      },

      logradouro: {
         type: DataType.STRING,
         allowNull: false,
         validate: {
            notEmpty: true
         }
      },

      numero: {
         type: DataType.INTEGER,
         allowNull: false,
         validate: {
            notEmpty: true
         }
      },

      bairro: {
         type: DataType.STRING,
         allowNull: false,
         validate: {
            notEmpty: true
         }
      },

      cidade: {
         type: DataType.STRING,
         allowNull: false,
         validate: {
            notEmpty: true
         }
      },

      estado: {
         type: DataType.STRING,
         allowNull: false,
         validate: {
            notEmpty: true
         }
      }
   });

   return Cliente;
};