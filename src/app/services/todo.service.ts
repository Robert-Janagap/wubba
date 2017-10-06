import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  newTask: any;

  constructor(
    private http: Http
  ) { }

  addTask( newTask ){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('/todo/task', newTask, { headers: headers })
      .map( res => res.json() );
  }

  getTask(){
    const user_id = localStorage.getItem('user_id');
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('/todo/' + user_id, {headers:headers})
      .map( res => res.json());
  }

  updateTask( task ){
    let headers = new Headers();
    headers.append('Content-type', 'application/json'); 
    return this.http.put('/todo/' + task.user_id, task, { headers: headers })
      .map( res => res.json() );
  }

  deleteTask( task_id ){
    const user_id = localStorage.getItem('user_id');
    const task = {
      task_id: task_id
    }
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.put('/todo/delete/' + user_id, task)
      .map( res => res.json() );
  }
}
