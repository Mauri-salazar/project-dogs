const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,//UUID genera numero randon unico
      defaultValue: DataTypes.UUIDV4,//valor determinado de sequelize
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    height_min:{
      type:DataTypes.STRING,
      allowNull: false
    },
    height_max:{
      type:DataTypes.STRING,
      allowNull: false
    },
    weight_min:{
      type:DataTypes.STRING,
      allowNull: false
    },
    weight_max:{
      type:DataTypes.STRING,
      allowNull: false
    },
    life_time_min:{
      type:DataTypes.STRING,
      allowNull: false
    },
    life_time_max:{
      type:DataTypes.STRING,
      allowNull: false
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};





// ID *
// Nombre *
// Altura * height
// Peso * "weight"
// Años de vida life_span