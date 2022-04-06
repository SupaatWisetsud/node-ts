'use strict';

const tableName = 'demo';
module.exports = {
    async up(queryInterface, Sequelize) {
        const { DataTypes } = Sequelize;
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.createTable(tableName, {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                }
            }, { transaction });

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },

    async down(queryInterface) {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.dropTable(tableName, { transaction });
            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
};
