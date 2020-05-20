import { Controller, Get, Post, Body, Param, Put, Delete, Logger } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.interface';
import { TaskDTO } from './dto/task.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('tasks') // Swagger Tag Decorator
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(): Promise<ITask[]> {
        return this.tasksService.getTasks()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTask(@Param() param): Promise<ITask> {
        return this.tasksService.getTask(param.id)
    }

    @Post()
    createTask(@Body() taskDTO: TaskDTO): Promise<ITask> {
        console.log('createTask')
        return this.tasksService.createTask(taskDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTask(@Param('id') id, @Body() taskDTO: TaskDTO): Promise<ITask> {
        return this.tasksService.editTask(id, taskDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTask(@Param('id') id) {
        this.tasksService.deleteTask(id)
    }
}
