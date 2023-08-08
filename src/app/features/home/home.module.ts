import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

console.log('He i am home module!!');

@NgModule({
  declarations: [DashboardComponent, ShowDetailsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
