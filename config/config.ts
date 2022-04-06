import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    url: process.env.DB_CONNECTION,
  },
}
