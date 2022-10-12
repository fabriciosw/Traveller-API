import { ConnectionOptions } from 'typeorm';
import config from '../config/config';

type Options = ConnectionOptions;

const options: Options = {
  type: 'postgres',
  host: config.postgresDb.host,
  port: config.postgresDb.port,
  username: config.postgresDb.username,
  password: config.postgresDb.password,
  database: config.postgresDb.database,
  url: config.postgresDb.dbProdUrl,
  logger: 'advanced-console',
  cli: {
    entitiesDir: './src/database/entities',
    migrationsDir: './src/database/migrations',
  },
  entities: [`${__dirname}/entities/*{.js,.ts}`],
  migrations: [`${__dirname}/migrations/*{.js,.ts}`],
  synchronize: false,
  logging: false,
};

export = options;
