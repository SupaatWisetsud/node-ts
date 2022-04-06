'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('demo', [
        {
          "name": "demo 1",
        },
        {
          "name": "demo 2",
        },
        {
          "name": "demo 3",
        },
        {
          "name": "demo 4",
        },
      ], { transaction });
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
