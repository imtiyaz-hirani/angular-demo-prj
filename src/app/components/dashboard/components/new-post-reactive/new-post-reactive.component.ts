import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-new-post-reactive',
  templateUrl: './new-post-reactive.component.html',
  styleUrls: ['./new-post-reactive.component.css']
})
export class NewPostReactiveComponent implements OnInit {

  userFormGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userFormGroup = new FormGroup({
      title: new FormControl('',
        [Validators.required, Validators.minLength(3), Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z0-9 ]+$/) ]),
      body: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required)
    }
    );
  }

  onFormSubmit(){

  }
}
