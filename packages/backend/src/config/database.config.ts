import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

const dbConfig = (): DataSourceOptions => {
  const migrationsPath = path.join(__dirname, '../', '**/migrations/*.{js,ts}');
  const entitiesPath = path.join(__dirname, '../', '**/*.entity.{js,ts}');

  return {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT_DB),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: ['query', 'error'],
    entities: [entitiesPath],
    migrations: [migrationsPath],
    subscribers: ['src/subscriber/**/*.ts'],
    migrationsRun: true
  };
};

export const AppDataSource = new DataSource(dbConfig());

export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    process.exit(1);
  }
};

export default dbConfig;
