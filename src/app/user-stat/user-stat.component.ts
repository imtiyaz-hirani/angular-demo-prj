import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-user-stat',
  templateUrl: './user-stat.component.html',
  styleUrls: ['./user-stat.component.css']
})
export class UserStatComponent implements OnInit,OnDestroy {
  count: number;
  private subscriptions: Subscription[]=[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.userService.getUsers().subscribe(data=>{
        this.count = data.length;
      })
    );

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs=>subs.unsubscribe());
  }
}
