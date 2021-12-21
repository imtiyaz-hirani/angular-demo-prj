import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  list: Todo[];
  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(id: number){
      console.log(id);
  }
}
