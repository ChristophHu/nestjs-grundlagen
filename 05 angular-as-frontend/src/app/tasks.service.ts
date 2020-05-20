import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
    constructor(private http: HttpClient) { }

    getTasks() {
        return this.http.get('http://localhost:3000/tasks');
    }
}
