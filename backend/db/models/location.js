
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
            Location.hasMany(models.Keystock, {
              foreignKey: 'location_id'
            })
      
    }
  };
  Location.init({
    number: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};
