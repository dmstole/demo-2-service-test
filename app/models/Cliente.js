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
            notEmpty: {
               msg: "O campo nome é obrigatório."
            }
         }
      },

      logradouro: {
         type: DataType.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: "O campo logradouro é obrigatório."
            }
         }
      },

      numero: {
         type: DataType.INTEGER,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: "O campo número é obrigatório."
            },
            isInt: {
               msg: "O campo número é inválido."
            }
         }
      },

      bairro: {
         type: DataType.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: "O campo bairro é obrigatório."
            }
         }
      },

      cidade: {
         type: DataType.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: "O campo cidade é obrigatório."
            }
         }
      },

      estado: {
         type: DataType.STRING,
         allowNull: false,
         validate: {
            notEmpty: {
               msg: "O campo estado é obrigatório."
            }
         }
      }
   });

   return Cliente;
};