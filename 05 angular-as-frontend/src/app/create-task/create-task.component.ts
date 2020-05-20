import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.createForm(fb);
    }

    createForm(fb: FormBuilder) {
        return fb.group({
            name: new FormControl('title', Validators.required),
            description: new FormControl('task')
        });
    }

    ngOnInit(): void {
    }

    createTask() {
        //
    }
}
