
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './autho/components/login/login.component';
import { RegistrationComponent } from './autho/components/registration/registration.component';
import { AppComponent } from './app.component';
import { CartProductsComponent } from './carts/cart-products/cart-products.component';

const routes: Routes = [
  { path: '', component: AllproductsComponent },
  { path: 'products', component: AllproductsComponent },

  
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
 
  { path: 'product/:id', component: ProductsDetailsComponent },
  { path: 'cart', component: CartProductsComponent },
  
 
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
