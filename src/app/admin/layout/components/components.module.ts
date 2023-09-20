import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [HeaderComponent,FooterComponent,SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  exports:[
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
