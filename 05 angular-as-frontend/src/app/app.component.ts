import { Component } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasks: any = {};

    constructor(private tasksService: TasksService) {}

    getData() {
        this.tasksService.getData().subscribe(data => {
            console.log(data);
            this.tasks = data;
        });
    }
}
