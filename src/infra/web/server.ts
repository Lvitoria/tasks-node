import fastify from 'fastify';
import { connectDatabase } from '../../shared/database';
import taskRoutes from './routes/taskRoutes';
import authRoutes from './routes/authRoutes';
import { PostgresTaskRepository } from '../db/PostgresTaskRepository';
import { PostgresUserRepository } from '../db/PostgresUserRepository';

const server = fastify();

connectDatabase().then(() => {
  const taskRepository = new PostgresTaskRepository();
  const userRepository = new PostgresUserRepository();

  taskRoutes(server, taskRepository);
  authRoutes(server, userRepository);

  server.listen(3000, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}).catch(error => console.error('Error connecting to the database', error));
