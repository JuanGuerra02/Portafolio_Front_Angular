import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {  RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BarnumberComponent } from './barnumber/barnumber.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BarnumberComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BarnumberComponent
  ]
})
export class SharedModule { }
