import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

console.log('He i am home module!!');

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
