// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Keystock = sequelize.define('Keystock', {
//       part_number: DataTypes.INTEGER,
//       lot_number: DataTypes.BIGINT,
//       date_received: DataTypes.DATEONLY,
//       type: DataTypes.STRING,
//       quantity: DataTypes.INTEGER,
//       measurement: DataTypes.STRING,
//       uom: DataTypes.STRING,
//       location_id: DataTypes.INTEGER,
//   }, {});
//   Keystock.associate = function (models) {
//     // associations can be defined here

//     Keystock.belongsTo(models.Location);
//   };
//   return Keystock;
// };


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keystock extends Model {
    static associate(models) {
      Keystock.belongsTo(models.Location, {foreignKey: 'location_id'});
    }
  };
  Keystock.init({
    part_number: DataTypes.INTEGER,
    lot_number: DataTypes.BIGINT,
    date_received: DataTypes.DATEONLY,
    type: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    measurement: DataTypes.STRING,
    uom: DataTypes.STRING,
    location_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Keystock',
  });
  return Keystock;
};

// Keystock.associate({Location});