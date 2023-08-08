import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'show-details',
    component: ShowDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
