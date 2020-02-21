const testConfig = {
  app: {
    port: process.env.SERVER_PORT || process.env.PORT || 3089,
    apiBase: '/api/v1',
  },
  database: {
    uri:
      process.env.MONGO_LAB_URL ||
      process.env.MONGODB_URI ||
      `mongodb://${process.env.DB_PORT_TCP_ADDR ||
        'localhost'}/library-db-test`,
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

export default testConfig;
