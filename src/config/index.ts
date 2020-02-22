import * as dotenv from 'dotenv';
import testConfig from './test.config';

const envFile = process.env.NODE_ENV
  ? `./.env.${process.env.NODE_ENV}`
  : './.env';

dotenv.config({ path: envFile });

let config = {
  app: {
    port: process.env.SERVER_PORT || process.env.PORT || 3000,
    apiBase: '/api/v1',
  },
  database: {
    uri:
      process.env.MONGO_LAB_URL ||
      process.env.MONGODB_URI ||
      `mongodb://${process.env.DB_PORT_TCP_ADDR || 'localhost'}/library-db`,
    options: {
      useNewUrlParser: true,
      keepAlive: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    debug: process.env.MONGODB_DEBUG || false,
  },
};

if (process.env.NODE_ENV === 'test') {
  config = { ...config, ...testConfig };
}

const exportingConfig = config;

export default exportingConfig;
