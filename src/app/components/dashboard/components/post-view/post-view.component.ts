import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  postForm: FormGroup;
  editedPost: Post;

  displayStyle = "none";
  constructor(private activatedRoute: ActivatedRoute,
    private _dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('',
        [Validators.required, Validators.minLength(3), Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z0-9 ]+$/) ]),
      body: new FormControl('', Validators.required),
    }
    );
    this.comments = [];
    this.postId = this.activatedRoute.snapshot.params['id'];
    console.log("act route id: " , this.postId);

    this._dashboardService.getPostById(this.postId).subscribe(
      (data)=> { this.post = data;},
      (error)=>{  console.log('error'); },
      ()=> { console.log('complete');  }
    ) ;

    this._dashboardService
      .getCommentsByPostId(this.postId)
      .subscribe(data=>{
        this.comments = data;
      });
  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  onFormSubmit(){

      this.editedPost = {
        id: this.post.id,
        userId: this.post.userId,
        title: this.postForm.value.title,
        body : this.postForm.value.body
      }

       this._dashboardService.editPost(this.editedPost)
       .subscribe(data=>{
         this.post = data;
         this.displayStyle = "none";
       });
  }
}
