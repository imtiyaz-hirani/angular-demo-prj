import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../serivce/app.service';
import { User } from './models/user.model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {

  users: User[];

  private subscriptions: Subscription[]=[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.subscriptions.push(
      this.userService.getUserFromApi().subscribe(data=>{
        this.userService.setUsers(data);
    })
    );

    this.subscriptions.push(
      this.userService.getUsers().subscribe(data=>{
        this.users = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs=>subs.unsubscribe());
  }
}
