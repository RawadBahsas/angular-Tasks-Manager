import { Injectable } from '@angular/core';
import { Task } from '../Task'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //private apiUrl = "http://localhost:5000/tasks"
  private apiUrl = "http://localhost:5234/Tasks"

  constructor(private http: HttpClient) {

  }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
    // const tasks = of(TASKS);
    // return tasks;
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}?taskId=${task.id}`;
    return this.http.delete<Task>(url);
  }

  toggleReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}?taskId=${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
}
