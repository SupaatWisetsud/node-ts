import fs from 'fs';
import path from 'path';
import sequelize from '../database/dbconfig';
import Sequelize from 'sequelize';
import {createNodeInterface} from 'graphql-sequelize';

const db: any = {
  sequelize,
};

fs
  .readdirSync(__dirname)
  .filter(file =>
    path.extname(file) === '.js' &&
    file !== 'index.js',
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
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