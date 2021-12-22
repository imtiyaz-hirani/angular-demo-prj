import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxHomeComponent } from './components/ngrx-home/ngrx-home.component';

const routes: Routes = [
  {path : '' , component: NgrxHomeComponent},
  {
    path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'customer-stats', loadChildren: () => import('./customer-stats/customer-stats.module').then(m => m.CustomerStatsModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'user-stat', loadChildren: () => import('./user-stat/user-stat.module').then(m => m.UserStatModule) },
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
