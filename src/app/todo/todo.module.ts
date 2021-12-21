import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoStatComponent } from './components/todo-stat/todo-stat.component';
import { TodoWidgetComponent } from './components/todo-widget/todo-widget.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoService } from './service/todo.service';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoStatComponent,
    TodoWidgetComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],providers:[
    TodoService
  ]
})
export class TodoModule { }
