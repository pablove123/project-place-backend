'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE'
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references:{
          model: 'Profiles',
          key:'id'
        }
      },
      github: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE'
      },
      app: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE'
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};