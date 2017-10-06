import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(
    private authService: AuthService,
    private todoService: TodoService
  ) { }

}
