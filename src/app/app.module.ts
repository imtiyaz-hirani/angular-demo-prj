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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from './components/dashboard/service/dashboard.service';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { AddCityComponent } from './components/dashboard/components/add-city/add-city.component';
import { HttpClientModule} from '@angular/common/http';
import { PostListComponent } from './components/dashboard/components/post-list/post-list.component';
import { PostViewComponent } from './components/dashboard/components/post-view/post-view.component';
import { NewPostComponent } from './components/dashboard/components/new-post/new-post.component';
import { NewPostReactiveComponent } from './components/dashboard/components/new-post-reactive/new-post-reactive.component';
import { LoginComponent } from './authentication/login/login.component'

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
    PostListComponent,
    PostViewComponent,
    NewPostComponent,
    NewPostReactiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
