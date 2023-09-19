import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsComponent } from './dashboards.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "DashboardsComponent" , component : DashboardsComponent }
    ])
  ]
})
export class DashboardsModule { }
