import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person.model';
import { Post } from 'src/app/model/post.model';
import { personData } from '../data/data';
@Injectable()
export class DashboardService {

  cities :string[];
  persons:Person[];

  postGetAPi: string;

  constructor(private http: HttpClient ) {
    this.persons = personData;
    this.cities  = ['mumbai','chennai','pune'];

    this.postGetAPi = 'https://jsonplaceholder.typicode.com/posts';
  }

  sum(x: number, y: number) : number {
    return x+y;
  }

  public getCities() : string[] {
    return this.cities;
  }

  public getPersonData() : Person[]{
    return this.persons;
  }

  getPosts() : Observable<Post[]>{
     return this.http.get<Post[]>(this.postGetAPi);
  }

}

