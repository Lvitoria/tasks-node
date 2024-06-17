import { IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { v4 as uuid4 } from 'uuid';

export enum TaskStatus {
  PENDING = 'pendente',
  IN_PROGRESS = 'em progresso',
  COMPLETED = 'concluído',
}

export class Task {
  @IsUUID()
  id!: string;

  @IsNotEmpty()
  title: string;

  description?: string;

  @IsEnum(TaskStatus)
  status!: TaskStatus;

  createdAt!: Date;
  updatedAt!: Date;

  constructor(props: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>, id?: string, createdAt?: Date, updatedAt?: Date) {
    Object.assign(this, props);
    if (id) {
      this.id = uuid4();
    }
    if (!createdAt) {
      this.createdAt = new Date();
    }
    if (!updatedAt) {
      this.updatedAt = new Date();
    }
  }
}
