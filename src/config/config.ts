import dotenv from 'dotenv';
import * as yup from 'yup';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const environments = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
};

const environmentsString = Object.values(environments);

const envVarsSchema = yup
  .object()
  .shape({
    NODE_ENV: yup
      .string()
      .oneOf(environmentsString)
      .default(environments.DEVELOPMENT),
    API_PORT: yup.number().default(3001),
    PUBLIC_URL: yup.string().default('localhost'),
    SALT_WORK_FACTOR: yup.number().default(10),
    ACCESS_TOKEN_TTL: yup.string().default('15m'),
    REFRESH_TOKEN_TTL: yup.string().default('1y'),
    JWT_SECRET: yup.string().required('Secret is required'),
    POSTGRES_HOST: yup.string(),
    POSTGRES_PORT: yup.number().default(5432),
    POSTGRES_USER: yup.string(),
    POSTGRES_PASSWORD: yup.string(),
    POSTGRES_DB: yup.string(),
    DATABASE_URL: yup.string(),
  })
  .noUnknown();

let envVars;

try {
  envVarsSchema.validateSync(process.env, { abortEarly: false });
  envVars = envVarsSchema.cast(process.env);
} catch ({ errors }) {
  throw new Error(`Config validation error: ${errors}`);
}
console.log('AQUI: ' + envVars.DATABASE_URL);
const config = {
  env: envVars.NODE_ENV,
  port: envVars.API_PORT,
  publicUrl: envVars.PUBLIC_URL,
  postgresDb: {
    host: envVars.POSTGRES_HOST,
    port: envVars.POSTGRES_PORT,
    username: envVars.POSTGRES_USER,
    password: envVars.POSTGRES_PASSWORD,
    database: envVars.POSTGRES_DB,
    dbProdUrl: envVars.DATABASE_URL,
  },
  saltWorkFactor: envVars.SALT_WORK_FACTOR,
  accessTokenTtl: envVars.ACCESS_TOKEN_TTL,
  refreshTokenTtl: envVars.REFRESH_TOKEN_TTL,
  jwtSecret: envVars.JWT_SECRET,
};

export default config;
