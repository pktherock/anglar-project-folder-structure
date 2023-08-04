import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeveloperInfoComponent } from './components/developer-info/developer-info.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    DeveloperInfoComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
