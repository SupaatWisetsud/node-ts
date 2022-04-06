import { Sequelize } from 'sequelize';
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.DB_CONNECTION;
let sequelize;
if (url) {
    sequelize = new Sequelize(url, {
        logging: false,
    });    
}


export default sequelize;