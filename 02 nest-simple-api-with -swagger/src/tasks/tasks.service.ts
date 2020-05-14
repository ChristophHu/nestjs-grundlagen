import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {
    Tasks: ITask[] = [
        { id: '1', title: 'Erster Task', description: 'Das ist der erste Task' },
        { id: '2', title: 'Zweiter Task', description: 'Das ist der zweite Task' }
    ]

    getTasks(): ITask[] {
        return this.Tasks
    }

    getTask(id: string): ITask {
        const foundedTask = this.Tasks.find(task => task.id === id)
        return foundedTask
    }

    createTask(taskDTO: TaskDTO): ITask {
        this.Tasks.push(taskDTO)
        return taskDTO
    }

    editTask(id: string, taskDTO: TaskDTO): ITask {
        const foundedTask = this.getTask(id)
        foundedTask.title = taskDTO.title ? taskDTO.title : foundedTask.title
        foundedTask.description = taskDTO.description ? taskDTO.description : foundedTask.description
        return foundedTask
    }

    deleteTask(id: string) {
        this.Tasks = this.Tasks.filter(task => task.id !== id)
    }
}
