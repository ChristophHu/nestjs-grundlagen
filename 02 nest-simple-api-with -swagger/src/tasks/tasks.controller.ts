import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.interface';
import { TaskDTO } from './dto/task.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(): ITask[] {
        return this.tasksService.getTasks()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTask(@Param() param): ITask {
        return this.tasksService.getTask(param.id)
    }

    @Post()
    createTask(@Body() taskDTO: TaskDTO): ITask {
        return this.tasksService.createTask(taskDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTask(@Param('id') id, @Body() taskDTO: TaskDTO): ITask {
        return this.tasksService.editTask(id, taskDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTask(@Param('id') id) {
        this.tasksService.deleteTask(id)
    }
}
