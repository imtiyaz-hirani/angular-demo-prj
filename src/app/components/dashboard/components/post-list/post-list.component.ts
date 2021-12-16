import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post.model';


@Component({
  selector: 'app-dashboard-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input('postData')
  posts : Post[];

  @Output()
  postEmitter = new EventEmitter;
  @Output()
  deleteEmitter = new EventEmitter;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showPost(postId: number){
    this.postEmitter.emit(postId);
    this.router.navigateByUrl('/show-post/' + postId);
  }

  showNewPost(){
    this.router.navigateByUrl('/new-post');
  }

  showNewReactivePost(){
    this.router.navigateByUrl('/new-post-reactive');
  }

  deletePost(id: number){
    this.deleteEmitter.emit(id);
  }
}
