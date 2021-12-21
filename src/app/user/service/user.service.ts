import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users$ = new BehaviorSubject<User[]>([]);
  constructor(private http: HttpClient) { }

  public getUsers() : Observable<User[]>{
    return this.users$;
  }

  public setUsers(users: User[]){
    this.users$.next(users);
  }

  public getUserFromApi() : Observable<User[]>{
     return this.http.get<User[]>
     ('https://jsonplaceholder.typicode.com/users');
  }
}
