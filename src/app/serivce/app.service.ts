import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public score = new BehaviorSubject<number>(0);
  public name = new BehaviorSubject<string>('');
  public post = new BehaviorSubject<Post>({});
  public posts = new BehaviorSubject<Post[]>([]);

  constructor() { }

  public getScore() : Observable<number>{
    return this.score;
  }


}
