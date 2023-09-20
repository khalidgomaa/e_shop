import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { AuthoModule } from './autho/autho.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartsModule } from './carts/carts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    AuthoModule,
    FormsModule,
    CartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
