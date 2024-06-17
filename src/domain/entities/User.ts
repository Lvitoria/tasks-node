import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class User {
  @IsUUID('4', { message: 'Invalid UUID' })
  id: string;

  @IsNotEmpty({ message: 'Username should not be empty' })
  username: string = '';

  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty({ message: 'Password should not be empty' })
  password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    this.id = id ?? uuidv4();
    Object.assign(this, props);
  }
}
