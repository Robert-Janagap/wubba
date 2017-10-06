import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }
    this.authService.loginUser(user).subscribe( user => {
      if( user.success ) {
        this.authService.storeData(user.token, user.user, user.user_id);
        this.flashMessage.show(user.msg, {
  				cssClass: 'message-success', 
  				timeout: 5000
        });
        this.router.navigate(['/dashboard']);
      }else{
        this.flashMessage.show(user.msg, {
  				cssClass: 'message-error', 
  				timeout: 5000
  			});
      }
    });
  }
}
