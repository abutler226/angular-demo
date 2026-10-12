import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [App, RouterModule, CatalogComponent, CartComponent],
  declarations: [PageNotFoundComponent],
})
export class AppModule {}
