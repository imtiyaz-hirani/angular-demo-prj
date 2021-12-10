import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-city-list',
  templateUrl:  'city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  show: boolean = true;
  cities : string[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.show = true;
  }

  showAddCity(){
    this.show = false;
    this.router.navigateByUrl('/dashboard/add-city');
  }
}
