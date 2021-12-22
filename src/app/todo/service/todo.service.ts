import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {

  public todo$ = new BehaviorSubject<Todo[]>([]);

  constructor(private http:HttpClient) { }

  getTodo() : Observable<Todo[]>{
    return this.todo$;
  }

  getTodoFromApi() : Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.apiPath + '/todos');
  }

  setTodo(todo: Todo[]):void{
      this.todo$.next(todo);
  }
}
