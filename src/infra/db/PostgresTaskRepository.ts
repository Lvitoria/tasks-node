import { TaskRepository } from '../../domain/repositories/TaskRepository';
import { Task } from '../../domain/entities/Task';
import { getRepository } from 'typeorm';
import { TaskModel } from './models/TaskModel';

export class PostgresTaskRepository implements TaskRepository {
  async create(task: Task): Promise<Task> {
    const taskRepo = getRepository(TaskModel);
    const taskEntity = taskRepo.create(task);
    await taskRepo.save(taskEntity);
    return task;
  }

  async findById(id: string): Promise<Task | null> {
    const taskRepo = getRepository(TaskModel);
    const taskEntity = await taskRepo.findOne(id);
    if (!taskEntity) {
      return null;
    }
    return new Task(taskEntity, taskEntity.id);
  }

  async findAll(): Promise<Task[]> {
    const taskRepo = getRepository(TaskModel);
    const taskEntities = await taskRepo.find();
    return taskEntities.map(entity => new Task(entity, entity.id));
  }

  async update(task: Task): Promise<Task> {
    const taskRepo = getRepository(TaskModel);
    await taskRepo.save(task);
    return task;
  }

  async delete(id: string): Promise<void> {
    const taskRepo = getRepository(TaskModel);
    await taskRepo.delete(id);
  }
}
