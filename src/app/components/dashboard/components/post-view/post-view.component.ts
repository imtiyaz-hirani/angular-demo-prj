import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/model/comment.model';
import { Post } from 'src/app/model/post.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-dashboard-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  postId: number;
  post: Post;
  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute,
    private _dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.comments = [];
    this.postId = this.activatedRoute.snapshot.params['id'];
    console.log("act route id: " , this.postId);

    //from here we reach out to service, getch post by id,
    //and attach it to post

    this._dashboardService.getPostById(this.postId).subscribe(
      (data)=> { this.post = data;   },
      (error)=>{  console.log('error'); },
      ()=> { console.log('complete');  }
    ) ;

    this._dashboardService
      .getCommentsByPostId(this.postId)
      .subscribe(data=>{
        this.comments = data;
      });
  }

}
