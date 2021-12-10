import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PersonListComponent } from './components/dashboard/components/person-list/person-list.component';
import { CityListComponent } from './components/dashboard/components/city-list/city-list.component';
import { PersonStatComponent } from './components/dashboard/components/person-stat/person-stat.component';
import { GeneralComponent } from './components/dashboard/components/general/general.component';
import { FormsModule } from '@angular/forms';
import { DashboardService } from './components/dashboard/service/dashboard.service';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { AddCityComponent } from './components/dashboard/components/add-city/add-city.component';
import { HttpClientModule} from '@angular/common/http';
import { PostListComponent } from './components/dashboard/components/post-list/post-list.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutusComponent,
    PersonListComponent,
    CityListComponent,
    PersonStatComponent,
    GeneralComponent,
    NavbarComponent,
    PageNotFoundComponent,
    AddCityComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
