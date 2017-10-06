import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
  
  }

  onLogOutClick(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  	return false;
  }

}
