import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { CustomersModule } from './components/customers/customers.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    CustomersModule
  ],
  exports: [
    LayoutModule
  ]
})
export class AdminModule { }
