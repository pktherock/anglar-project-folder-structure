import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HistoryComponent } from './components/history/history.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
