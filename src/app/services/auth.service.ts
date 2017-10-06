import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  registerUser( user ){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('/users/register', user, { headers: headers })
      .map( res => res.json() );
  }

  loginUser( user ){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('/users/auth', user, { headers: headers })
      .map( res => res.json() );
  }

  storeData(token, user, user_id){
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    localStorage.setItem('user_id', user_id);
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('/users/dashboard', {headers: headers})
      .map( res => res.json());
  }

  logOut(){
    this.authToken = null;
  	this.user = null;
  	localStorage.clear();
  }

  loggedIn() {
    return tokenNotExpired();
  }
}
