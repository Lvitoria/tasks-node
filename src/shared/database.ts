import { createConnection } from 'typeorm';
import { config } from './config';
import { TaskModel } from '../infra/db/models/TaskModel';
import { UserModel } from '../infra/db/models/UserModel';

export const connectDatabase = async () => {
  await createConnection({
    type: 'postgres',
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    entities: [TaskModel, UserModel],
    synchronize: true,
  });
};
