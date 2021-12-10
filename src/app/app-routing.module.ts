import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { AddCityComponent } from './components/dashboard/components/add-city/add-city.component';
 import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path : '' , redirectTo: '/dashboard' , pathMatch: 'full' },
  { path: 'dashboard' , component: DashboardComponent,
  children: [
        { path : 'add-city' , component: AddCityComponent},
  ]
  },

  { path : 'about-us' , component: AboutusComponent},
  { path : '**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
