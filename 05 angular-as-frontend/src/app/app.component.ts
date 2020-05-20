import { Component } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasks: any = [];

    constructor(private tasksService: TasksService) {}

    getTasks() {
        this.tasksService.getTasks().subscribe(data => {
            this.tasks = data;
        });
    }
}
