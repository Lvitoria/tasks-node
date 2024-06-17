import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export class Register {
  constructor(private userRepository: UserRepository) {}

  async execute(username: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword }, uuidv4());
    return this.userRepository.create(user);
  }
}
