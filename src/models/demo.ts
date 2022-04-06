import Sequelize, { Model } from 'sequelize'

class Demo extends Model {
    static tableName = 'rcm_demo';
}

const schema = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field:"id"
    },
    name: {
        type: Sequelize.STRING,
    }
};

export default (sequelize) => {
    Demo.init(schema, {
        sequelize,
        tableName: Demo.tableName,
        timestamps: false,
    });

    return Demo;
};