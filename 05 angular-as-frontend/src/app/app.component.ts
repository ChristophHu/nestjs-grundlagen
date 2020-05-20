import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { ITask } from './interface/task.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    tasks: Observable<ITask[]>;

    constructor(private tasksService: TasksService) {}

    getTasks() {
        this.tasks = this.tasksService.getTasks();
    }

    ngOnInit() {
        this.tasks = this.tasksService.getTasks();
    }
}
