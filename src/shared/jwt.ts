import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { config } from './config';

export const verifyJWT = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return reply.status(401).send({ message: 'Missing token' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.jwtSecret);
  } catch (error) {
    return reply.status(401).send({ message: 'Invalid token' });
  }
};
