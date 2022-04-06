import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.DB_CONNECTION;
if (url) {
    const sequelize = new Sequelize(url);

    console.log("CONNECTING TO :" + url)

    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch((e) => {
        console.log(e);
    });
} else {
    console.log("dons't url connect database")
}


