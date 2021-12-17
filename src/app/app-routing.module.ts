import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { AddCityComponent } from './components/dashboard/components/add-city/add-city.component';
import { NewPostReactiveComponent } from './components/dashboard/components/new-post-reactive/new-post-reactive.component';
import { NewPostComponent } from './components/dashboard/components/new-post/new-post.component';
import { PostViewComponent } from './components/dashboard/components/post-view/post-view.component';
 import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path : '' , redirectTo: '/dashboard' , pathMatch: 'full' },
  { path: 'dashboard' , component: DashboardComponent,
  children: [
        { path : 'add-city' , component: AddCityComponent},
  ]
  },
  { path : 'login' , component: LoginComponent },
  { path : 'show-post/:id' , component: PostViewComponent , canActivate:[AuthGuard]},
  { path : 'new-post' , component: NewPostComponent , canActivate:[AuthGuard]},
  { path : 'new-post-reactive' , component: NewPostReactiveComponent , canActivate:[AuthGuard]},
  { path : 'about-us' , component: AboutusComponent , canActivate:[AuthGuard]},
  { path : '**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
