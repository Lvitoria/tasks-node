import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { getRepository } from 'typeorm';
import { UserModel } from './models/UserModel';

export class PostgresUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const userRepo = getRepository(UserModel);
    const userEntity = userRepo.create(user);
    await userRepo.save(userEntity);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const userRepo = getRepository(UserModel);
    const userEntity = await userRepo.findOne({ where: { email } });
    if (!userEntity) {
      return null;
    }
    return new User(userEntity, userEntity.id);
  }
}
