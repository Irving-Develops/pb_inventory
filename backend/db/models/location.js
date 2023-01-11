// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Location = sequelize.define('Location', {
//         id: {
//           allowNull: false,
//           autoIncrement: true,
//           primaryKey: true,
//           type: DataTypes.INTEGER,
//         },
//   }, {});
//   Location.associate = function (models) {
//     // associations can be defined here
//     Location.hasMany(models.Keystock, {foreignKey: 'keystock_id'});
//   };
//   return Location;
// };

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
            this.Location.hasMany(models.Keystock, {
              foreignKey: 'location_id'
            })
      
    }
  };
  Location.init({
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};