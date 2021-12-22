import { Action } from "@ngrx/store";
import { Course } from "../model/course.model";

export enum CourseType{
  ADD_ITEM ='[COURSE] Add Course',
  DELETE_COURSE ='[COURSE] Delete Course'
}

export class AddCourseAction implements Action{
  readonly type = CourseType.ADD_ITEM;

  constructor(public payload: Course){
    console.log("in add course action.. " +payload.name);
  }
}

export class DeleteCourseAction implements Action {
  readonly type = CourseType.DELETE_COURSE;

  constructor(public payload: number){}
}

export type CourseAction  = AddCourseAction | DeleteCourseAction;

