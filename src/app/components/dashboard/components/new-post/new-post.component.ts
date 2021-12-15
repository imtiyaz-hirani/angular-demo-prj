import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/model/post.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-dashboard-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post;

  constructor( private _dashboardService: DashboardService ) { }

  ngOnInit(): void {
  }

  onSubmit(pForm:NgForm){
    this.post = {
      title: pForm.value.title,
      body: pForm.value.body,
      userId: pForm.value.userId
    }

    //reach out to service and call post API
     this._dashboardService.addPost(this.post)
     .subscribe(
       data=> {
          this.post = data;
          console.log(this.post);
       },
       error=>{
         console.log('API error');
       }
     )

  }
}
