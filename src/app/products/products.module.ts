import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { AuthoModule } from '../autho/autho.module';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AllproductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,

  ],
  exports:[
    AllproductsComponent,
    ProductsDetailsComponent,
    
  ]
})
export class ProductsModule { }
