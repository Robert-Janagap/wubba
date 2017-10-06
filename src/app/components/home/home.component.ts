import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: String;
  email: String;
  password: String;

  constructor(
    private authService: AuthService,
    private flashMessages: FlashMessagesService,
    private validateService: ValidateService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    
    // Validate all fields
    if(!this.validateService.validateRegister( newUser )){
      this.flashMessages.show('Fill All Fields', {cssClass: 'message-error', timeout: 3000});
      return false;
    }

    // Validate if email is correct 
    if(!this.validateService.validateEmail( newUser.email )){
      this.flashMessages.show('Invalid Email', {cssClass: 'message-error', timeout: 3000});
      return false;
    }

    // User registration
    this.authService.registerUser( newUser ).subscribe( data => {
      if( data ) {
        this.router.navigate(['/dashboard']);
      }else{
        console.log('no data');
      }
    });
  }
}
