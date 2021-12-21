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
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoFromApi().subscribe(
      (data)=>{
          this.todo = data;
          console.log(this.todo);
      },
      (error)=>{

      }
    );
  }

}
