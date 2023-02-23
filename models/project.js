'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'},
    profileId:{
      type:DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      references:{
        model: 'Profiles',
        key:'id'
      }},
    github: {
      type:DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'},
    app: {
      type:DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'},
    picture: {
      type:DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'}
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};