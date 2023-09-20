import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsModule } from '../products/products.module';
import { AuthoModule } from '../autho/autho.module';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule

  ],
  exports:[
HeaderComponent,
NotFoundComponent,
FooterComponent,


  ]
})
export class SharedModule { }
