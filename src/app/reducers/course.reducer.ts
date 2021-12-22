import { CourseAction, CourseType } from "../actions/course.action";
import { Course } from "../model/course.model";

const initialData: Course[]=[
  {
    id: 1,
    departmentName: 'Admin',
    name: 'Angular'
  },
  {
    id: 2,
    departmentName: 'Programming',
    name: 'Java'
  }
];

export function CourseReducer(
  state:Course[]= initialData,
  action: CourseAction
){
  switch(action.type) {
    case CourseType.ADD_ITEM:
      return [...state, action.payload];
    case CourseType.DELETE_COURSE:
      return [...state, action.payload];
    default:{
      return state;
    }
  }

}
