import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private taskService: TasksService) {
        this.form = this.createForm(fb);
    }

    createForm(fb: FormBuilder) {
        return fb.group({
            title: new FormControl('Titel', Validators.required),
            description: new FormControl('Aufgabe')
        });
    }

    ngOnInit(): void {
    }

    createTask() {
        this.taskService.createTask(this.form.value).subscribe();
        console.log('createTask');
    }
}
