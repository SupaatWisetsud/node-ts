import fs from 'fs';
import path from 'path';
import sequelize from '../database/dbconfig';
import Sequelize from 'sequelize';

const { createNodeInterface } = require('graphql-sequelize');

const db: any = {};
const basename = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter((file: string) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts'))
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

const {
  nodeInterface,
  nodeField,
  nodeTypeMapper
} = createNodeInterface(sequelize);

export {
  nodeInterface,
  nodeField,
  nodeTypeMapper,
}

export default db;