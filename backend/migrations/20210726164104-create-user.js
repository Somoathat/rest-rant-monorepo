"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "password_digest", {
      type: Sequelize.DataTypes.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("users", "password_digest");
  },
};

  
User.init {
  userId: {
    type: DataTypes.SMALLINT,
    primaryKey; true,
    autoIncrement; true

  };
  firstName: DataTypes.STRING,
  lastName; DataTypes.STRING,
  email; DataTypes.STRING,
  passwordDigest; DataTypes.STRING
};

