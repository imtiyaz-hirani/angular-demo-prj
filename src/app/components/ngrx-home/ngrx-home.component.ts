import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddCourseAction } from 'src/app/actions/course.action';
import { Course } from 'src/app/model/course.model';
import { StoreState } from 'src/app/model/store-state.model';

@Component({
  selector: 'app-ngrx-home',
  templateUrl: './ngrx-home.component.html',
  styleUrls: ['./ngrx-home.component.css']
})
export class NgrxHomeComponent implements OnInit {

  courses$ : Observable<Course[]>;
  course: Course;
  constructor(private store: Store<StoreState>) {

  }

  ngOnInit(): void {
      this.courses$ = this.store.select(e=>e.courses);
      this.courses$.subscribe(data=>{
        console.log(data);
      });
  }

  addCourse(courseForm: NgForm){
      this.course = courseForm.value;
      this.store.dispatch(new AddCourseAction(this.course));
  }
}
