import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    App,   
    RouterModule,
    CatalogComponent,
    CartComponent  ],
  declarations: []
})
export class AppModule { }