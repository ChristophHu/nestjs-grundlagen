import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskDTO } from './dto/task.dto';

import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TasksService {
    // Tasks: ITask[] = [
    //     { id: '1', title: 'Erster Task', description: 'Das ist der erste Task' },
    //     { id: '2', title: 'Zweiter Task', description: 'Das ist der zweite Task' }
    // ]

    constructor(
        @InjectModel('Task') private readonly taskModel: Model<ITask>) {
    }

    async getTasks(): Promise<ITask[]> {
        return await this.taskModel.find().exec()
    }

    async getTask(id: string): Promise<ITask> {
        const foundedTask = await this.taskModel.findById(id).exec()
        return foundedTask
    }

    async createTask(taskDTO: TaskDTO): Promise<ITask> {
        const newTask = await this.taskModel(taskDTO)
        return newTask.save()
    }

    async editTask(id: string, taskDTO: TaskDTO): Promise<ITask> {
        return await this.taskModel.findByIdAndUpdate(id, taskDTO, {new: true})
    }

    async deleteTask(id: string) {
        await this.taskModel.findByIdAndRemove(id)
    }
}
