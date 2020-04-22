"use strict";
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define(
    "recipe",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  recipe.associate = function (models) {
    // associations can be defined here
    recipe.belongsTo(models.user);
  };
  return recipe;
};
