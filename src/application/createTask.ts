import { Task } from '../domain/entities/Task';
import { TaskRepository } from '../domain/repositories/TaskRepository';
import { v4 as uuidv4 } from 'uuid';

export class CreateTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute(title: string, description?: string): Promise<Task> {
    const task = new Task({ title, description, status: 'pendente' }, uuidv4());
    return this.taskRepository.create(task);
  }
}
