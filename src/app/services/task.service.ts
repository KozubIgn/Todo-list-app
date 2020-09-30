import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksUrl = 'http://localhost:3000/tasks';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  switchToCompleted(task: Task): Observable<any> {
    const taskUrl = `${this.tasksUrl}/${task.id}`;
    return this.http.put(taskUrl, task, this.httpOptions);
  }

  deleteTaskFromDB(task: Task): Observable<Task> {
    const taskUrl = `${this.tasksUrl}/${task.id}`;
    return this.http.delete<Task>(taskUrl, this.httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions);
  }
}
