import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-dashboard-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input('personData')
  personArry : Person[];

  constructor() { }

  ngOnInit(): void {
  }

}
