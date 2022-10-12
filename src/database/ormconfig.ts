import { ConnectionOptions } from 'typeorm';
import config from '../config/config';

type Options = ConnectionOptions;

const options: Options = {
  type: 'postgres',
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
