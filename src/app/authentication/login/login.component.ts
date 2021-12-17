import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
    this.username = 'harry';
    this.password = 'potter';

    let token = btoa(this.username + ':' + this.password);
    localStorage.setItem('token', token);
  }
}
