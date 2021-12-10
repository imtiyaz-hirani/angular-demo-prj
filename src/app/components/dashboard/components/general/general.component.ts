import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  @Input('isPassVal')
  isPass: boolean;

  message : string;

  fname: string;
  lname: string;
  person: Person;

  @Output()
  msgEmitter = new EventEmitter;

  @Output()
  personEmitter = new EventEmitter;

  constructor() { }

  ngOnInit(): void {

  }

  messageSubmit(){
    this.msgEmitter.emit(this.message);
  }

  addPerson(){
    this.person = {
      fname : this.fname,
      lname : this.lname
    }

     this.personEmitter.emit(this.person);
  }

}
