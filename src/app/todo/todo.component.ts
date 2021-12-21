import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo.model';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo[];
  numberOfTodos: number;
  completedTodos: number;
  pendingTodos: number;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoFromApi().subscribe(
      (data)=>{
          this.todo = data;
          this.numberOfTodos = this.todo.length;
          this.completedTodos = this.todo
                                .filter(t=>t.completed === true).length;
          this.pendingTodos = this.todo
                                .filter(t=>t.completed === false).length;
      },
      (error)=>{

      }
    );


  }

}
