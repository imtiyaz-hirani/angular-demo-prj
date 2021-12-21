import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerStatsComponent } from './customer-stats.component';

const routes: Routes = [{ path: '', component: CustomerStatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerStatsRoutingModule { }
