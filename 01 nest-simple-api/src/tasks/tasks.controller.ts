import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.interface';
import { TaskDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(): ITask[] {
        return this.tasksService.getTasks()
    }

    @Get(':id')
    getTask(@Param() param): ITask {
        return this.tasksService.getTask(param.id)
    }

    @Post()
    createTask(@Body() taskDTO: TaskDTO): ITask {
        return this.tasksService.createTask(taskDTO)
    }

    @Put(':id')
    editTask(@Param('id') id, taskDTO: TaskDTO): ITask {
        return this.tasksService.editTask(id, taskDTO)
    }

    @Delete(':id')
    deleteTask(@Param('id') id) {
        this.tasksService.deleteTask(id)
    }
}
