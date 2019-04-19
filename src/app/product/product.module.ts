import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: DetailComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ListComponent, DetailComponent],
  exports: [ RouterModule ]
})
export class ProductModule { }
