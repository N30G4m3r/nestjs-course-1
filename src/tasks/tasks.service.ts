import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      id: this.tasks.length + 1,
      ...task,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'Actulizando tareas';
  }

  deleteTask() {
    return 'Eliminando tareas';
  }

  updateTaskStatus() {
    return 'Actulizando el estatus de la tarea';
  }
}
