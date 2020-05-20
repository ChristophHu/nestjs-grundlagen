import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from './interface/task.interface';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class TasksService {
    constructor(private http: HttpClient) { }

    getTasks(): Observable<ITask[]> {
        console.log('getTask Server');
        return this.http
            .get<ITask[]>(`${baseUrl}/tasks`)
            .pipe(tap(data => console.log('Tasks: ' + data))
        );
    }

    createTask(task: ITask): Observable<ITask> {
        console.log(task);
        return this.http.post<ITask>(`${baseUrl}/tasks`, task);
    }
}
