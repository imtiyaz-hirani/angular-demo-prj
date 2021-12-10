import { Component, OnDestroy, OnInit } from '@angular/core';
import { Person } from './model/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
 //ng constructs the component and then initializes it.

 //Lifecycle Hooks : contructor , ngOnInIt() , ngOnDestroy()

  constructor(){}

  ngOnInit(): void {

  }

  ngOnDestroy(): void{

  }

}

//ngSwitch
