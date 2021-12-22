import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-stat',
  templateUrl: './todo-stat.component.html',
  styleUrls: ['./todo-stat.component.css']
})
export class TodoStatComponent implements OnInit {

  @Input()
  numberOfTodos: number;

  @Input()
  completedTodos: number;

  @Input()
  pendingTodos: number;

  constructor() { }

  ngOnInit(): void {
  }

}
