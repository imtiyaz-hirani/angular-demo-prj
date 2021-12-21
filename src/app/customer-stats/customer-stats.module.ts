import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerStatsRoutingModule } from './customer-stats-routing.module';
import { CustomerStatsComponent } from './customer-stats.component';


@NgModule({
  declarations: [
    CustomerStatsComponent
  ],
  imports: [
    CommonModule,
    CustomerStatsRoutingModule
  ]
})
export class CustomerStatsModule { }
