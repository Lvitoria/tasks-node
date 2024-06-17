import { FastifyInstance } from 'fastify';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import { Register } from '../../../application/auth/register';
import { Login } from '../../../application/auth/login';

export default (server: FastifyInstance, userRepository: UserRepository) => {
  server.post('/auth/register', async (request, reply) => {
    const { username, email, password } = request.body as { username: string, email: string, password: string };
    const register = new Register(userRepository);
    const user = await register.execute(username, email, password);
    return reply.status(201).send(user);
  });

  server.post('/auth/login', async (request, reply) => {
    const { email, password } = request.body as { email: string, password: string };
    const login = new Login(userRepository);
    const token = await login.execute(email, password);
    if (!token) {
      return reply.status(401).send({ message: 'Invalid credentials' });
    }
    return reply.send({ token });
  });
};
