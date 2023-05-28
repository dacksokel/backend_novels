
import dotenv from 'dotenv';
import IConfig from '../src/interfaces/IConfig';

dotenv.config({ path: `./config/env/${process.env.NODE_ENV}.env` });
console.log(`Mode: ${process.env.NODE_ENV}`);

const config: IConfig = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000'),
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/novelas',
  },
};

export default config;



