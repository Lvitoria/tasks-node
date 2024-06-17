import { FastifyInstance } from 'fastify';
import { TaskRepository } from '../../../domain/repositories/TaskRepository';
import { CreateTask } from '../../../application/createTask';
import { verifyJWT } from '../../shared/jwt';

export default (server: FastifyInstance, taskRepository: TaskRepository) => {
  server.post('/tasks', { preHandler: [verifyJWT] }, async (request, reply) => {
    const { title, description } = request.body as { title: string, description?: string };
    const createTask = new CreateTask(taskRepository);
    const task = await createTask.execute(title, description);
    return reply.status(201).send(task);
  });

  // Outros endpoints (GET, PUT, DELETE) seguem o mesmo padrão.
};
