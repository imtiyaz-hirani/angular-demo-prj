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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showPost(postId: number){
    this.postEmitter.emit(postId);
    this.router.navigateByUrl('/show-post');
  }
}
