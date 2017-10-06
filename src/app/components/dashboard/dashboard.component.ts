import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object;
  user_id: any;
  todo: String;
  edit: Object;
  tasks: Object;
  editVisible: any;
  updatedTodo: String;
  idTodo: String;

  constructor(
    private authService: AuthService,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe( profile => {
      this.user = profile.user.user;
      this.user_id = profile.user._id;
    }, err =>{
      return false;
    });
    
    this.getTask();

  }
  
  getTask(){
    this.todoService.getTask().subscribe( tasks => {
      this.tasks = tasks;
    });
  }

  onAddTodoClick(){
    const user_id = localStorage.getItem('user_id');
    const task_id = (this.todo + '-' + Math.floor((Math.random() * 9999) + 1000)).replace(/\s+/g, '-').toLowerCase();
    const newTodo = {
      task: this.todo,
      user_id: user_id,
      task_id: task_id,
      done: false
    }
    this.todoService.addTask( newTodo ).subscribe( task => {
      this.getTask();
      this.todo = "";
    });
  }

  onEditTaskClick(task, task_id){
    this.editVisible = true;
    this.updatedTodo = task;
    this.idTodo = task_id;
  }

  onUpdateTaskClick(){
    this.editVisible = false;
    const updateTask = {
      task: this.updatedTodo,
      task_id: this.idTodo,
      user_id: this.user_id
    }

    this.todoService.updateTask( updateTask ).subscribe( data => {
      this.getTask();
    });
  }

  onDeleteTaskClick(taskId){
    this.todoService.deleteTask( taskId ).subscribe( data => {
      this.getTask();
    });
  }
}
