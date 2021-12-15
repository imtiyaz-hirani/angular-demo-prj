import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/model/comment.model';
import { Person } from 'src/app/model/person.model';
import { Post } from 'src/app/model/post.model';
import { personData } from '../data/data';
@Injectable()
export class DashboardService {

  cities :string[];
  persons:Person[];

  postGetAPi: string;
  singleGetApiForPost: string;
  commentsByPostId: string;
  addPostApi: string;

  constructor(private http: HttpClient ) {
    this.persons = personData;
    this.cities  = ['mumbai','chennai','pune'];

    this.postGetAPi = 'https://jsonplaceholder.typicode.com/posts';
    this.singleGetApiForPost = 'https://jsonplaceholder.typicode.com/posts';
    this.commentsByPostId = 'https://jsonplaceholder.typicode.com/posts';
    this.addPostApi = 'https://jsonplaceholder.typicode.com/posts';
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

  getPostById(postId: number) : Observable<Post> {
     return this.http.get<Post>(this.singleGetApiForPost + '/' + postId);
  }

  getCommentsByPostId(postId: number) : Observable<Comment[]>{
     return this.http.get<Comment[]>(this.commentsByPostId
      + '/' + postId + '/comments');
  }

  addPost(post: Post):Observable<Post>{
    return this.http.post<Post>(this.addPostApi, post);
  }
}

