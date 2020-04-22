"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "recipes",
      [
        {
          name: "Rendang",
          description:
            " Rendang is an Indonesian spicy meat dish originating from the Minangkabau region in West Sumatra, Indonesia. It has spread across Indonesia to the cuisines of neighbouring Southeast Asian countries",
          imageUrl:
            "https://omnivorescookbook.com/wp-content/uploads/2019/12/1911_Beef-Rendang_550.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Sate Ayam",
          description:
            " Satay, or sate in Indonesian and Malay spelling, is a Southeast Asian dish of seasoned, skewered and grilled meat, served with a sauce. It is from Indonesia and popular in Malaysia, Philippines, Singapore, Thailand, and Brune",
          imageUrl:
            "https://static.wixstatic.com/media/348537_fa4147fcada9443aa0e9c4c3c883e358~mv2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("recipes", null, {});
  },
};
