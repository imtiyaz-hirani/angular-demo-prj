import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { prependOnceListener } from 'process';
import { Person } from 'src/app/model/person.model';
import { Post } from 'src/app/model/post.model';
import { CityListComponent } from './components/city-list/city-list.component';

import { DashboardService } from './service/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit,OnDestroy, AfterViewInit {

  @ViewChild(CityListComponent ) cityComponent;

  show : boolean;
  isPass : boolean = false;

  persons:Person[];
  posts : Post[];
 constructor(private _dashboardService : DashboardService ) { }

  ngAfterViewInit(): void {
    this.cityComponent.cities = this._dashboardService.getCities();
  }

  ngOnInit(): void {
    this.persons = this._dashboardService.getPersonData();
    this.show = false;
    this._dashboardService.getPosts().subscribe(
      dataVal => {
        this.posts = dataVal;
      }
    );

  }

  showContent() : void{
     this.show = !this.show;
  }

  getMessage($event : any){
    console.log($event);
  }

  getPerson($event : any){
       this.persons.push($event);
  }

  showPost(postId : number){
    //from here we reach out to service, getch post by id,
    //and pass it to
  }

  deletePost(postId: number){
      this._dashboardService.deletePost(postId).subscribe(
        data=> {
            this.posts = this.posts.filter(e=> e.id !==  postId);
        }
      );
  }

  ngOnDestroy(): void {

  }
}
